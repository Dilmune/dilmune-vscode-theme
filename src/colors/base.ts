import { formatHex } from 'culori'
import type { BaseColors, Mode } from '../types'

function hex(l: number, c: number, h: number): string {
  return formatHex({ mode: 'oklch', l, c, h })
}

export const baseColors: Record<Mode, BaseColors> = {
  light: {
    background: hex(0.96, 0.005, 80),
    foreground: hex(0.18, 0.01, 260),
    card: hex(0.985, 0.003, 80),
    primary: hex(0.65, 0.17, 35),
    primaryForeground: hex(1, 0, 0),
    border: hex(0.9, 0.008, 80),
    mutedForeground: hex(0.5, 0.012, 260),
    sidebar: hex(0.97, 0.004, 80),
    sidebarBorder: hex(0.91, 0.006, 80),
    success: hex(0.6, 0.18, 145),
    warning: hex(0.75, 0.18, 75),
    destructive: hex(0.577, 0.215, 27.33),
    info: hex(0.6, 0.15, 240),
  },
  dim: {
    background: hex(0.95, 0.028, 78),
    foreground: hex(0.22, 0.015, 50),
    card: hex(0.895, 0.028, 78),
    primary: hex(0.56, 0.18, 30),
    primaryForeground: hex(0.96, 0.02, 78),
    border: hex(0.84, 0.025, 75),
    mutedForeground: hex(0.44, 0.015, 50),
    sidebar: hex(0.895, 0.028, 76),
    sidebarBorder: hex(0.82, 0.025, 75),
    success: hex(0.58, 0.16, 145),
    warning: hex(0.72, 0.16, 75),
    destructive: hex(0.58, 0.22, 27),
    info: hex(0.58, 0.12, 240),
  },
  dark: {
    background: hex(0.13, 0.01, 260),
    foreground: hex(0.93, 0.005, 250),
    card: hex(0.17, 0.01, 260),
    primary: hex(0.70, 0.16, 35),
    primaryForeground: hex(0.12, 0.01, 260),
    border: hex(0.26, 0.008, 260),
    mutedForeground: hex(0.6, 0.01, 260),
    sidebar: hex(0.09, 0.01, 260),
    sidebarBorder: hex(0.2, 0.01, 260),
    success: hex(0.55, 0.16, 145),
    warning: hex(0.7, 0.16, 75),
    destructive: hex(0.637, 0.208, 25.33),
    info: hex(0.55, 0.13, 240),
  },
}
