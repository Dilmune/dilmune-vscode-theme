import { formatHex, oklch, parse, type Oklch } from 'culori'
import type { BaseColors, SyntaxColors } from '../types'

function toOklch(hex: string): Oklch {
  const parsed = parse(hex)
  if (!parsed) throw new Error(`Invalid color: ${hex}`)
  const converted = oklch(parsed)
  if (!converted) throw new Error(`Cannot convert to oklch: ${hex}`)
  return converted
}

function toHex(color: Oklch): string {
  return formatHex(color)
}

function adjustColor(hex: string, opts: { lightness?: number; chroma?: number }): string {
  const color = toOklch(hex)
  return toHex({
    ...color,
    l: Math.max(0, Math.min(1, (color.l ?? 0) + (opts.lightness ?? 0))),
    c: Math.max(0, (color.c ?? 0) + (opts.chroma ?? 0)),
  })
}

export function mute<T extends Record<string, string>>(colors: T, amount = 0.4): T {
  const result = {} as Record<string, string>
  for (const [key, value] of Object.entries(colors)) {
    const color = toOklch(value)
    result[key] = toHex({
      ...color,
      c: Math.max(0, (color.c ?? 0) * (1 - amount)),
    })
  }
  return result as T
}

export function soften<T extends Record<string, string>>(colors: T, amount = 0.03): T {
  const result = {} as Record<string, string>
  for (const [key, value] of Object.entries(colors)) {
    result[key] = adjustColor(value, { lightness: amount })
  }
  return result as T
}

export function boost<T extends Record<string, string>>(colors: T, amount = 0.15): T {
  const result = {} as Record<string, string>
  for (const [key, value] of Object.entries(colors)) {
    const color = toOklch(value)
    result[key] = toHex({
      ...color,
      c: Math.max(0, (color.c ?? 0) * (1 + amount)),
    })
  }
  return result as T
}

export function adjustLightness(hex: string, amount: number): string {
  return adjustColor(hex, { lightness: amount })
}

export function adjustChroma(hex: string, factor: number): string {
  const color = toOklch(hex)
  return toHex({
    ...color,
    c: Math.max(0, (color.c ?? 0) * factor),
  })
}

export function withOpacity(hexColor: string, opacity: number): string {
  const base = hexColor.slice(0, 7)
  const r = parseInt(base.slice(1, 3), 16)
  const g = parseInt(base.slice(3, 5), 16)
  const b = parseInt(base.slice(5, 7), 16)
  const a = Math.round(opacity * 255).toString(16).padStart(2, '0')
  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}${a}`
}

export function applyBaseVariant(colors: BaseColors, variant: 'default' | 'soft' | 'muted' | 'high-contrast'): BaseColors {
  switch (variant) {
    case 'default':
      return colors
    case 'soft':
      return {
        ...colors,
        background: adjustLightness(colors.background, 0.06),
        sidebar: adjustLightness(colors.sidebar, 0.07),
        card: adjustLightness(colors.card, 0.05),
        border: adjustLightness(colors.border, 0.04),
      }
    case 'muted':
      return {
        ...mute(colors, 0.4),
        foreground: colors.foreground,
        mutedForeground: colors.mutedForeground,
        primaryForeground: colors.primaryForeground,
      }
    case 'high-contrast': {
      const isLight = toOklch(colors.background).l > 0.5
      const borderShift = isLight ? -0.25 : 0.20
      return {
        ...boost(colors, 0.2),
        foreground: colors.foreground,
        background: colors.background,
        card: colors.card,
        sidebar: colors.sidebar,
        mutedForeground: adjustColor(colors.mutedForeground, { lightness: isLight ? -0.06 : 0.06 }),
        primaryForeground: colors.primaryForeground,
        border: adjustColor(colors.border, { lightness: borderShift }),
        sidebarBorder: adjustColor(colors.sidebarBorder, { lightness: isLight ? borderShift : borderShift + 0.05 }),
      }
    }
  }
}

export function applySyntaxVariant(colors: SyntaxColors, variant: 'default' | 'soft' | 'muted' | 'high-contrast'): SyntaxColors {
  switch (variant) {
    case 'default':
      return colors
    case 'soft':
      return {
        ...soften(mute(colors, 0.1), 0.03),
        comment: colors.comment,
      }
    case 'muted':
      return mute(colors, 0.4)
    case 'high-contrast':
      return boost(colors, 0.15)
  }
}
