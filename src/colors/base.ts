import { formatHex } from 'culori'
import { palette } from './palette'
import type { BaseColors, Mode } from '../types'

function hex(l: number, c: number, h: number): string {
  return formatHex({ mode: 'oklch', l, c, h })
}

export const baseColors: Record<Mode, BaseColors> = {
  light: {
    background: palette.parchment[200],
    foreground: hex(0.18, 0.01, 260),
    card: palette.parchment[50],
    primary: hex(0.55, 0.19, 28),
    primaryForeground: hex(1, 0, 0),
    border: palette.parchment[300],
    mutedForeground: hex(0.50, 0.012, 260),
    sidebar: palette.parchment[300],
    sidebarBorder: hex(0.83, 0.014, 75),
    success: hex(0.58, 0.18, 145),
    warning: hex(0.72, 0.18, 75),
    destructive: hex(0.55, 0.24, 27),
    info: hex(0.58, 0.15, 240),
  },
  // Dim: portal dim DNA — hue 78, chroma 0.028 (sandy clay cream)
  dim: {
    background: hex(0.82, 0.028, 78),             // portal's exact hue+chroma, darker lightness
    foreground: hex(0.22, 0.015, 50),             // dark brown (portal dim foreground)
    card: hex(0.78, 0.028, 78),                   // following portal's card pattern
    primary: hex(0.56, 0.18, 30),                 // portal dim primary exactly
    primaryForeground: palette.parchment[50],
    border: hex(0.75, 0.025, 76),                 // portal dim border pattern
    mutedForeground: hex(0.50, 0.015, 50),        // portal dim muted pattern
    sidebar: hex(0.74, 0.030, 76),                // more distinct from editor (gap ~8)
    sidebarBorder: hex(0.73, 0.025, 76),
    success: hex(0.52, 0.16, 145),
    warning: hex(0.62, 0.16, 75),
    destructive: hex(0.52, 0.22, 27),
    info: hex(0.52, 0.14, 240),
  },
  // Dusk: dark version of portal dim — SAME hue 78 family, just darker
  // The brand red shows through in the warm undertone
  dusk: {
    background: hex(0.35, 0.028, 78),             // portal dim hue+chroma at dark lightness
    foreground: hex(0.92, 0.015, 78),             // warm parchment foreground
    card: hex(0.40, 0.028, 78),
    primary: hex(0.65, 0.20, 28),                 // bright brand red on dark
    primaryForeground: hex(0.15, 0.015, 50),
    border: hex(0.45, 0.025, 78),
    mutedForeground: hex(0.68, 0.018, 60),        // visible muted
    sidebar: hex(0.30, 0.028, 78),                // darker sidebar, same warmth
    sidebarBorder: hex(0.40, 0.025, 78),
    success: hex(0.60, 0.16, 145),
    warning: hex(0.72, 0.16, 75),
    destructive: hex(0.62, 0.22, 27),
    info: hex(0.60, 0.12, 240),
  },
  dark: {
    background: hex(0.18, 0.012, 260),
    foreground: hex(0.92, 0.012, 75),
    card: hex(0.22, 0.012, 260),
    primary: hex(0.65, 0.20, 28),
    primaryForeground: hex(0.12, 0.01, 260),
    border: hex(0.30, 0.008, 260),
    mutedForeground: hex(0.55, 0.01, 260),
    sidebar: hex(0.14, 0.012, 260),
    sidebarBorder: hex(0.25, 0.01, 260),
    success: hex(0.55, 0.18, 145),
    warning: hex(0.70, 0.18, 75),
    destructive: hex(0.62, 0.24, 25),
    info: hex(0.55, 0.15, 240),
  },
}
