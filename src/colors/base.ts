import { formatHex } from 'culori'
import type { BaseColors, Mode } from '../types'

function hex(l: number, c: number, h: number): string {
  return formatHex({ mode: 'oklch', l, c, h })
}

export const baseColors: Record<Mode, BaseColors> = {
  // Light: warm off-white, not sterile — like aged paper
  light: {
    background: hex(0.92, 0.012, 75),
    foreground: hex(0.18, 0.01, 260),
    card: hex(0.95, 0.008, 75),
    primary: hex(0.55, 0.19, 28),
    primaryForeground: hex(1, 0, 0),
    border: hex(0.86, 0.012, 75),
    mutedForeground: hex(0.50, 0.012, 260),
    sidebar: hex(0.90, 0.014, 75),
    sidebarBorder: hex(0.85, 0.012, 75),
    success: hex(0.58, 0.18, 145),
    warning: hex(0.72, 0.18, 75),
    destructive: hex(0.55, 0.24, 27),
    info: hex(0.58, 0.15, 240),
  },
  // Dim: warm dark brown — candlelit study, not a pale cream
  dim: {
    background: hex(0.30, 0.025, 50),
    foreground: hex(0.88, 0.01, 75),
    card: hex(0.36, 0.025, 50),
    primary: hex(0.62, 0.20, 28),
    primaryForeground: hex(0.15, 0.01, 50),
    border: hex(0.40, 0.02, 50),
    mutedForeground: hex(0.62, 0.015, 50),
    sidebar: hex(0.24, 0.025, 50),
    sidebarBorder: hex(0.35, 0.02, 50),
    success: hex(0.58, 0.16, 145),
    warning: hex(0.72, 0.16, 75),
    destructive: hex(0.60, 0.22, 27),
    info: hex(0.58, 0.12, 240),
  },
  // Dim Warm: amber-tinted brown — like clay near a kiln
  'dim-warm': {
    background: hex(0.30, 0.035, 45),
    foreground: hex(0.88, 0.01, 75),
    card: hex(0.36, 0.035, 45),
    primary: hex(0.62, 0.20, 32),
    primaryForeground: hex(0.15, 0.01, 50),
    border: hex(0.40, 0.03, 45),
    mutedForeground: hex(0.62, 0.015, 50),
    sidebar: hex(0.24, 0.035, 45),
    sidebarBorder: hex(0.35, 0.03, 45),
    success: hex(0.58, 0.16, 145),
    warning: hex(0.72, 0.16, 75),
    destructive: hex(0.60, 0.22, 27),
    info: hex(0.58, 0.12, 240),
  },
  // Dim Deep: dark mahogany — night owl warmth, never cold
  'dim-deep': {
    background: hex(0.22, 0.02, 40),
    foreground: hex(0.90, 0.008, 75),
    card: hex(0.27, 0.02, 40),
    primary: hex(0.65, 0.22, 28),
    primaryForeground: hex(0.12, 0.01, 40),
    border: hex(0.32, 0.018, 40),
    mutedForeground: hex(0.55, 0.012, 50),
    sidebar: hex(0.18, 0.02, 40),
    sidebarBorder: hex(0.28, 0.018, 40),
    success: hex(0.55, 0.16, 145),
    warning: hex(0.70, 0.16, 75),
    destructive: hex(0.62, 0.22, 27),
    info: hex(0.55, 0.13, 240),
  },
  // Dark: deep blue-black with presence, not pure void
  dark: {
    background: hex(0.18, 0.012, 260),
    foreground: hex(0.93, 0.005, 250),
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
