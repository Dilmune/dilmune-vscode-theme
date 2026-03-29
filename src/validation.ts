import { parse, wcagContrast, oklch, type Oklch } from 'culori'

export interface ContrastResult {
  token: string
  hex: string
  background: string
  ratio: number
  pass: boolean
}

export interface CollisionResult {
  tokenA: string
  tokenB: string
  deltaE: number
  pass: boolean
}

export interface ValidationReport {
  theme: string
  contrastResults: ContrastResult[]
  collisionResults: CollisionResult[]
  contrastPass: boolean
  collisionPass: boolean
}

const MIN_CONTRAST_RATIO = 4.5
const MIN_DELTA_E = 5.0

/**
 * WCAG 2.1 contrast ratio between two hex colors.
 * Uses culori's built-in wcagContrast which handles sRGB luminance.
 */
export function contrastRatio(fgHex: string, bgHex: string): number {
  const fg = parse(fgHex)
  const bg = parse(bgHex)
  if (!fg || !bg) throw new Error(`Invalid color: ${fgHex} or ${bgHex}`)
  return wcagContrast(fg, bg)
}

/**
 * OKLCH Euclidean delta-E between two hex colors.
 * Scaled so that L, C, H differences are perceptually weighted.
 * H is converted to radians and scaled by chroma to avoid
 * inflating distance for low-chroma (gray) colors.
 */
export function deltaE(hexA: string, hexB: string): number {
  const a = toOklch(hexA)
  const b = toOklch(hexB)

  const dL = (a.l ?? 0) - (b.l ?? 0)
  const dC = (a.c ?? 0) - (b.c ?? 0)

  // Hue difference scaled by average chroma — low-chroma colors
  // shouldn't report large delta-E just because hues differ
  const avgC = ((a.c ?? 0) + (b.c ?? 0)) / 2
  const hA = ((a.h ?? 0) * Math.PI) / 180
  const hB = ((b.h ?? 0) * Math.PI) / 180
  const dH = 2 * avgC * Math.sin((hA - hB) / 2)

  // Scale L to [0, 100] range for perceptual distance
  return Math.sqrt((dL * 100) ** 2 + (dC * 100) ** 2 + (dH * 100) ** 2)
}

function toOklch(hex: string): Oklch {
  const parsed = parse(hex)
  if (!parsed) throw new Error(`Invalid color: ${hex}`)
  const converted = oklch(parsed)
  if (!converted) throw new Error(`Cannot convert to oklch: ${hex}`)
  return converted
}

/**
 * Validate all syntax colors against a background.
 * Returns per-token contrast results and pairwise collision results.
 */
export function validateTheme(
  themeName: string,
  syntaxColors: Record<string, string>,
  background: string,
): ValidationReport {
  const entries = Object.entries(syntaxColors)

  // Contrast check: every syntax color vs background
  const contrastResults: ContrastResult[] = entries.map(([token, hex]) => {
    const ratio = contrastRatio(hex, background)
    return { token, hex, background, ratio: Math.round(ratio * 100) / 100, pass: ratio >= MIN_CONTRAST_RATIO }
  })

  // Collision check: every pair of syntax colors
  // Skip pairs that resolve to the same hex (intentional aliases like keyword↔terracotta)
  const collisionResults: CollisionResult[] = []
  for (let i = 0; i < entries.length; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      if (entries[i][1] === entries[j][1]) continue
      const de = deltaE(entries[i][1], entries[j][1])
      collisionResults.push({
        tokenA: entries[i][0],
        tokenB: entries[j][0],
        deltaE: Math.round(de * 10) / 10,
        pass: de >= MIN_DELTA_E,
      })
    }
  }

  // Sort collisions by delta-E ascending (worst first)
  collisionResults.sort((a, b) => a.deltaE - b.deltaE)

  return {
    theme: themeName,
    contrastResults,
    collisionResults,
    contrastPass: contrastResults.every((r) => r.pass),
    collisionPass: collisionResults.filter((r) => !r.pass).length === 0,
  }
}

/**
 * Print validation results to stdout.
 */
export function printReport(report: ValidationReport): void {
  const { theme, contrastResults, collisionResults } = report

  // Contrast
  const contrastFails = contrastResults.filter((r) => !r.pass)
  if (contrastFails.length === 0) {
    console.log(`  \x1b[32m✓\x1b[0m All ${contrastResults.length} syntax colors pass AA (4.5:1) against ${report.contrastResults[0]?.background}`)
  } else {
    for (const fail of contrastFails) {
      console.log(`  \x1b[31m✗\x1b[0m FAIL: ${fail.token} contrast ${fail.ratio}:1 (minimum 4.5:1)`)
    }
  }

  // Collisions
  const collisionFails = collisionResults.filter((r) => !r.pass)
  const closest = collisionResults[0]
  if (collisionFails.length === 0 && closest) {
    console.log(`  \x1b[32m✓\x1b[0m Minimum delta-E: ${closest.deltaE} (${closest.tokenA} ↔ ${closest.tokenB})`)
  } else {
    for (const fail of collisionFails) {
      console.log(`  \x1b[31m✗\x1b[0m FAIL: ${fail.tokenA} ↔ ${fail.tokenB} delta-E ${fail.deltaE} (minimum 5.0)`)
    }
  }

  // Warn on close pairs (5.0-8.0)
  const warnings = collisionResults.filter((r) => r.pass && r.deltaE < 8.0)
  for (const warn of warnings) {
    console.log(`  \x1b[33m⚠\x1b[0m Close pair: ${warn.tokenA} ↔ ${warn.tokenB} delta-E ${warn.deltaE}`)
  }
}

/**
 * Generate a full markdown report table for all themes.
 */
export function markdownReport(reports: ValidationReport[]): string {
  const lines: string[] = ['# Dilmune Theme Contrast & Collision Report', '']

  for (const report of reports) {
    lines.push(`## ${report.theme}`, '')

    // Contrast table
    lines.push('### Contrast Ratios', '')
    lines.push('| Token | Hex | Ratio | Pass |')
    lines.push('|-------|-----|-------|------|')
    for (const r of report.contrastResults) {
      lines.push(`| ${r.token} | \`${r.hex}\` | ${r.ratio}:1 | ${r.pass ? '✓' : '✗'} |`)
    }
    lines.push('')

    // Collision table (show top 10 closest pairs)
    lines.push('### Closest Color Pairs (delta-E)', '')
    lines.push('| Token A | Token B | Delta-E | Pass |')
    lines.push('|---------|---------|---------|------|')
    for (const r of report.collisionResults.slice(0, 10)) {
      lines.push(`| ${r.tokenA} | ${r.tokenB} | ${r.deltaE} | ${r.pass ? '✓' : '✗'} |`)
    }
    lines.push('')
  }

  return lines.join('\n')
}
