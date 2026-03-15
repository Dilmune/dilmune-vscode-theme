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

// Dark: vivid on deep blue-black (bg L=0.18 — needs BRIGHTER syntax than dim)
const darkSyntax: SyntaxColors = {
  keyword: hex(0.75, 0.22, 28),            // brighter than dim (was 0.68)
  string: hex(0.78, 0.15, 90),             // brighter (was 0.74)
  function: hex(0.76, 0.14, 180),          // brighter (was 0.70)
  type: hex(0.78, 0.14, 55),              // brighter (was 0.74)
  variable: hex(0.86, 0.01, 75),           // brighter (was 0.82)
  constant: hex(0.76, 0.18, 70),           // brighter (was 0.72)
  comment: hex(0.58, 0.012, 260),          // brighter (was 0.55)
  operator: hex(0.70, 0.012, 260),         // brighter (was 0.65)
  tag: hex(0.72, 0.20, 28),               // brighter (was 0.65)
  attribute: hex(0.76, 0.12, 80),          // brighter (was 0.72)
  cssProperty: hex(0.76, 0.14, 180),       // brighter (was 0.70)
  regex: hex(0.72, 0.14, 350),             // brighter (was 0.68)
  decorator: hex(0.65, 0.08, 50),          // brighter (was 0.60)
  namespace: hex(0.68, 0.10, 160),         // brighter (was 0.62)
}

// Light: bold dark-on-cream
const lightSyntax: SyntaxColors = {
  keyword: hex(0.48, 0.22, 28),
  string: hex(0.42, 0.14, 130),           // warm green for light mode readability
  function: hex(0.40, 0.14, 180),
  type: hex(0.48, 0.14, 55),
  variable: hex(0.25, 0.01, 260),
  constant: hex(0.46, 0.18, 70),
  comment: hex(0.55, 0.015, 260),          // gap 37 from bg
  operator: hex(0.42, 0.01, 260),
  tag: hex(0.46, 0.20, 28),
  attribute: hex(0.46, 0.14, 80),
  cssProperty: hex(0.40, 0.14, 180),
  regex: hex(0.48, 0.14, 350),
  decorator: hex(0.46, 0.10, 50),
  namespace: hex(0.40, 0.12, 160),
}

// Dim: warm candlelight on dark brown (bg L=0.30)
// Min gap: comments 30+, operators 35+, syntax 40+, variables 50+
const dimSyntax: SyntaxColors = {
  keyword: hex(0.72, 0.22, 28),            // gap 42 (was 37)
  string: hex(0.75, 0.14, 90),             // gap 45 (was 42)
  function: hex(0.72, 0.12, 180),          // gap 42 (was 35)
  type: hex(0.75, 0.14, 55),              // gap 45 (was 42)
  variable: hex(0.82, 0.015, 60),          // gap 52
  constant: hex(0.74, 0.16, 70),           // gap 44 (was 40)
  comment: hex(0.60, 0.015, 50),           // gap 30 (was 24!)
  operator: hex(0.66, 0.015, 50),          // gap 36 (was 28!)
  tag: hex(0.70, 0.20, 28),               // gap 40 (was 35)
  attribute: hex(0.74, 0.12, 80),          // gap 44 (was 40)
  cssProperty: hex(0.72, 0.12, 180),       // gap 42 (was 35)
  regex: hex(0.70, 0.14, 350),             // gap 40
  decorator: hex(0.66, 0.08, 50),          // gap 36 (was 28)
  namespace: hex(0.66, 0.10, 150),         // gap 36 (was 28)
}

// Dim Warm: warmer syntax to match amber backgrounds (bg L=0.30)
const dimWarmSyntax: SyntaxColors = {
  keyword: hex(0.72, 0.22, 30),
  string: hex(0.75, 0.14, 95),
  function: hex(0.72, 0.12, 175),
  type: hex(0.75, 0.14, 58),
  variable: hex(0.82, 0.015, 65),
  constant: hex(0.74, 0.16, 75),
  comment: hex(0.61, 0.015, 55),
  operator: hex(0.67, 0.015, 55),
  tag: hex(0.70, 0.20, 30),
  attribute: hex(0.74, 0.12, 85),
  cssProperty: hex(0.72, 0.12, 175),
  regex: hex(0.70, 0.14, 350),
  decorator: hex(0.66, 0.08, 55),
  namespace: hex(0.66, 0.10, 150),
}

// Dim Deep: brighter syntax for darker background
const dimDeepSyntax: SyntaxColors = {
  keyword: hex(0.72, 0.22, 28),
  string: hex(0.76, 0.14, 90),
  function: hex(0.70, 0.14, 180),
  type: hex(0.76, 0.14, 55),
  variable: hex(0.84, 0.015, 60),
  constant: hex(0.74, 0.18, 70),
  comment: hex(0.52, 0.015, 50),
  operator: hex(0.62, 0.015, 50),
  tag: hex(0.70, 0.20, 28),
  attribute: hex(0.74, 0.12, 80),
  cssProperty: hex(0.70, 0.14, 180),
  regex: hex(0.70, 0.14, 350),
  decorator: hex(0.62, 0.08, 50),
  namespace: hex(0.62, 0.10, 160),
}

export const syntaxColors: Record<Mode, SyntaxColors> = {
  light: lightSyntax,
  dim: dimSyntax,
  'dim-warm': dimWarmSyntax,
  'dim-deep': dimDeepSyntax,
  dark: darkSyntax,
}
