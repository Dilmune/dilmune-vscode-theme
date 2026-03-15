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
  // Dim: warm parchment — like aged paper, NOT muddy brown
  dim: {
    background: hex(0.82, 0.02, 75),             // lifted from 0.70 — clean warm parchment
    foreground: hex(0.18, 0.01, 260),
    card: hex(0.85, 0.016, 75),
    primary: hex(0.55, 0.19, 28),
    primaryForeground: palette.parchment[50],
    border: hex(0.76, 0.018, 75),
    mutedForeground: hex(0.50, 0.012, 60),        // enough gap from bg
    sidebar: hex(0.78, 0.022, 75),                // distinct from editor
    sidebarBorder: hex(0.74, 0.018, 75),
    success: hex(0.52, 0.16, 145),
    warning: hex(0.62, 0.16, 75),
    destructive: hex(0.52, 0.22, 27),
    info: hex(0.52, 0.14, 240),
  },
  // Dusk: warm chocolate — sidebar icons must be visible
  dusk: {
    background: palette.parchment[700],
    foreground: hex(0.92, 0.012, 75),             // warmer, brighter
    card: hex(0.46, 0.035, 55),
    primary: hex(0.65, 0.20, 28),                 // brighter on dark bg
    primaryForeground: hex(0.15, 0.01, 50),
    border: hex(0.50, 0.028, 55),
    mutedForeground: hex(0.70, 0.015, 55),        // much brighter (was 0.65)
    sidebar: hex(0.36, 0.03, 55),                 // slightly lighter for icon contrast
    sidebarBorder: hex(0.46, 0.028, 55),
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
