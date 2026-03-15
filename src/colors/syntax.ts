import { formatHex } from 'culori'
import type { Mode, SyntaxColors } from '../types'

function hex(l: number, c: number, h: number): string {
  return formatHex({ mode: 'oklch', l, c, h })
}

// Hue map (consistent across all modes):
//   keywords:   hue 28  (red-orange — THE brand, sacred)
//   types:      hue 55  (golden amber — warm but clearly distinct from keywords)
//   strings:    hue 90  (warm yellow-green — distinct from both keywords and types)
//   functions:  hue 180 (teal — cool contrast against warm)
//   constants:  hue 70  (amber-gold — between types and strings)
//   comments:   low chroma, visible but receded
//   tags:       hue 28  (brand, same as keywords in markup)
//   attributes: hue 80  (golden, pairs with tags)

// Dark: vivid on deep blue-black (bg L=0.18 — needs BRIGHTER syntax than dusk)
const darkSyntax: SyntaxColors = {
  keyword: hex(0.75, 0.22, 28),
  string: hex(0.78, 0.15, 90),
  function: hex(0.76, 0.14, 180),
  type: hex(0.78, 0.14, 55),
  variable: hex(0.86, 0.01, 75),
  constant: hex(0.76, 0.18, 70),
  comment: hex(0.58, 0.012, 260),
  operator: hex(0.70, 0.012, 260),
  tag: hex(0.72, 0.20, 28),
  attribute: hex(0.76, 0.12, 80),
  cssProperty: hex(0.76, 0.14, 180),
  regex: hex(0.72, 0.14, 350),
  decorator: hex(0.65, 0.08, 50),
  namespace: hex(0.68, 0.10, 160),
}

// Light: bold dark-on-cream
const lightSyntax: SyntaxColors = {
  keyword: hex(0.48, 0.22, 28),
  string: hex(0.42, 0.14, 130),
  function: hex(0.40, 0.14, 180),
  type: hex(0.48, 0.14, 55),
  variable: hex(0.25, 0.01, 260),
  constant: hex(0.46, 0.18, 70),
  comment: hex(0.55, 0.015, 260),
  operator: hex(0.42, 0.01, 260),
  tag: hex(0.46, 0.20, 28),
  attribute: hex(0.46, 0.14, 80),
  cssProperty: hex(0.40, 0.14, 180),
  regex: hex(0.48, 0.14, 350),
  decorator: hex(0.46, 0.10, 50),
  namespace: hex(0.40, 0.12, 160),
}

// Dim: dark-on-parchment syntax (bg L=0.70, mid-tone warm)
const dimSyntax: SyntaxColors = {
  keyword: hex(0.42, 0.20, 28),
  string: hex(0.38, 0.14, 130),
  function: hex(0.36, 0.14, 180),
  type: hex(0.42, 0.14, 55),
  variable: hex(0.22, 0.01, 260),
  constant: hex(0.40, 0.16, 70),
  comment: hex(0.50, 0.015, 60),
  operator: hex(0.40, 0.015, 60),
  tag: hex(0.40, 0.18, 28),
  attribute: hex(0.40, 0.12, 80),
  cssProperty: hex(0.36, 0.12, 180),
  regex: hex(0.42, 0.14, 350),
  decorator: hex(0.42, 0.08, 50),
  namespace: hex(0.36, 0.10, 160),
}

// Dusk: warm candlelight on dark brown (bg L=0.30)
const duskSyntax: SyntaxColors = {
  keyword: hex(0.72, 0.22, 28),
  string: hex(0.75, 0.14, 90),
  function: hex(0.72, 0.12, 180),
  type: hex(0.75, 0.14, 55),
  variable: hex(0.82, 0.015, 60),
  constant: hex(0.74, 0.16, 70),
  comment: hex(0.60, 0.015, 50),
  operator: hex(0.66, 0.015, 50),
  tag: hex(0.70, 0.20, 28),
  attribute: hex(0.74, 0.12, 80),
  cssProperty: hex(0.72, 0.12, 180),
  regex: hex(0.70, 0.14, 350),
  decorator: hex(0.66, 0.08, 50),
  namespace: hex(0.66, 0.10, 150),
}

export const syntaxColors: Record<Mode, SyntaxColors> = {
  light: lightSyntax,
  dim: dimSyntax,
  dusk: duskSyntax,
  dark: darkSyntax,
}
