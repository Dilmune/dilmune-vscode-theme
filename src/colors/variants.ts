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
    case 'soft': {
      // Dark modes get a subtler lift — large shifts erode syntax contrast
      const isDark = toOklch(colors.background).l < 0.5
      const bgLift = isDark ? 0.03 : 0.06
      const sidebarLift = isDark ? 0.04 : 0.07
      const cardLift = isDark ? 0.03 : 0.05
      const borderLift = isDark ? 0.02 : 0.04
      return {
        ...colors,
        background: adjustLightness(colors.background, bgLift),
        sidebar: adjustLightness(colors.sidebar, sidebarLift),
        card: adjustLightness(colors.card, cardLift),
        border: adjustLightness(colors.border, borderLift),
        // Lift semantic colors to maintain contrast on the raised background
        ...(isDark ? {
          mutedForeground: adjustLightness(colors.mutedForeground, 0.03),
          success: adjustLightness(colors.success, 0.03),
          warning: adjustLightness(colors.warning, 0.03),
          info: adjustLightness(colors.info, 0.03),
          destructive: adjustLightness(colors.destructive, 0.03),
        } : {}),
      }
    }
    case 'muted':
      return {
        ...mute(colors, 0.4),
        foreground: colors.foreground,
        mutedForeground: colors.mutedForeground,
        primaryForeground: colors.primaryForeground,
        // Preserve semantic colors — muting success/warning/info/destructive
        // causes terminal ANSI and squiggly contrast failures
        success: colors.success,
        warning: colors.warning,
        destructive: colors.destructive,
        info: colors.info,
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

export function applySyntaxVariant(colors: SyntaxColors, variant: 'default' | 'soft' | 'muted' | 'high-contrast', isDark = false): SyntaxColors {
  switch (variant) {
    case 'default':
      return colors
    case 'soft': {
      // Dark modes: lifted background erodes contrast, so boost syntax lightness more
      const liftAmount = isDark ? 0.06 : 0.03
      const softened = soften(mute(colors, 0.1), liftAmount)
      return {
        ...softened,
        // Preserve comment and operator — they're near-gray so 10% muting
        // collapses their already-small delta-E (dim-linen was 2.9)
        comment: isDark ? adjustColor(colors.comment, { lightness: 0.06 }) : colors.comment,
        operator: isDark ? adjustColor(colors.operator, { lightness: 0.06 }) : colors.operator,
      }
    }
    case 'muted': {
      // Chroma reduction can slightly shift sRGB luminance, causing
      // borderline contrast failures. Nudge lightness to compensate:
      // dark modes push lighter, light modes push darker.
      const muted = mute(colors, 0.4)
      const lNudge = isDark ? 0.01 : -0.01
      const result = {} as Record<string, string>
      for (const [key, value] of Object.entries(muted)) {
        result[key] = adjustColor(value, { lightness: lNudge })
      }
      return result as SyntaxColors
    }
    case 'high-contrast': {
      // Boost chroma AND push lightness away from background
      const lShift = isDark ? 0.06 : -0.02
      const boosted = boost(colors, 0.2)
      const result = {} as Record<string, string>
      for (const [key, value] of Object.entries(boosted)) {
        result[key] = adjustColor(value, { lightness: lShift })
      }
      return result as SyntaxColors
    }
  }
}
