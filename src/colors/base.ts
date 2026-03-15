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
    sidebar: hex(0.86, 0.018, 75),
    sidebarBorder: hex(0.83, 0.014, 75),
    success: hex(0.58, 0.18, 145),
    warning: hex(0.72, 0.18, 75),
    destructive: hex(0.55, 0.24, 27),
    info: hex(0.58, 0.15, 240),
  },
  // Dim: mid-tone warm parchment — like coffee with milk
  dim: {
    background: hex(0.70, 0.04, 65),
    foreground: hex(0.20, 0.01, 260),
    card: hex(0.66, 0.04, 65),
    primary: hex(0.55, 0.19, 28),
    primaryForeground: hex(0.98, 0.005, 75),
    border: hex(0.62, 0.035, 65),
    mutedForeground: hex(0.48, 0.015, 60),
    sidebar: hex(0.65, 0.04, 65),
    sidebarBorder: hex(0.60, 0.035, 65),
    success: hex(0.50, 0.16, 145),
    warning: hex(0.60, 0.16, 75),
    destructive: hex(0.52, 0.22, 27),
    info: hex(0.50, 0.14, 240),
  },
  // Dusk: warm dark brown — candlelit study
  dusk: {
    background: hex(0.30, 0.025, 50),
    foreground: hex(0.90, 0.01, 75),
    card: hex(0.36, 0.025, 50),
    primary: hex(0.62, 0.20, 28),
    primaryForeground: hex(0.15, 0.01, 50),
    border: hex(0.40, 0.02, 50),
    mutedForeground: hex(0.65, 0.015, 50),
    sidebar: hex(0.24, 0.025, 50),
    sidebarBorder: hex(0.35, 0.02, 50),
    success: hex(0.58, 0.16, 145),
    warning: hex(0.72, 0.16, 75),
    destructive: hex(0.60, 0.22, 27),
    info: hex(0.58, 0.12, 240),
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
