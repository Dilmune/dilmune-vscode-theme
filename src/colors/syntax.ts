import { formatHex } from 'culori'
import type { Mode, SyntaxColors } from '../types'

function hex(l: number, c: number, h: number): string {
  return formatHex({ mode: 'oklch', l, c, h })
}

// Hue map (consistent across all modes — from palette):
//   terracotta: H28  — keywords, brand accent
//   clay-rose:  H340 — types, warm fired clay
//   sage:       H140 — strings, warm green
//   verdigris:  H180 — functions, aged copper teal
//   amber:      H70  — constants, warm gold
//   clay:       H350 — regex, warm rose
//   fossil:     H50  — decorators, muted earth
//   dune:       H60  — operators, warm neutral

const darkSyntax: SyntaxColors = {
  keyword: hex(0.75, 0.22, 28),
  string: hex(0.78, 0.15, 140),
  function: hex(0.76, 0.14, 180),
  type: hex(0.78, 0.12, 340),              // H340 clay-rose (was H55 amber — indistinguishable from constant)
  variable: hex(0.86, 0.01, 75),
  constant: hex(0.76, 0.18, 70),
  comment: hex(0.60, 0.015, 55),           // boosted L for 4.5:1 on dark bg L=0.18
  operator: hex(0.70, 0.012, 60),
  tag: hex(0.72, 0.20, 28),
  attribute: hex(0.76, 0.12, 80),
  cssProperty: hex(0.76, 0.14, 180),
  regex: hex(0.72, 0.14, 350),
  decorator: hex(0.65, 0.08, 50),
  namespace: hex(0.68, 0.10, 160),
  terracotta: hex(0.75, 0.22, 28),
  sandstone: hex(0.78, 0.12, 340),         // matches type
  amber: hex(0.76, 0.18, 70),
  verdigris: hex(0.76, 0.14, 180),
  sage: hex(0.78, 0.15, 140),
  clay: hex(0.72, 0.14, 350),
  fossil: hex(0.65, 0.08, 50),
  docComment: hex(0.62, 0.018, 55),        // boosted L from 0.60
}

const lightSyntax: SyntaxColors = {
  keyword: hex(0.48, 0.22, 28),
  string: hex(0.42, 0.14, 140),
  function: hex(0.40, 0.14, 180),
  type: hex(0.48, 0.12, 340),              // H340 clay-rose (was H62 amber — indistinguishable from constant)
  variable: hex(0.25, 0.01, 260),
  constant: hex(0.46, 0.18, 75),
  comment: hex(0.50, 0.015, 55),           // darkened L for 4.5:1 on light bg
  operator: hex(0.42, 0.01, 60),
  tag: hex(0.46, 0.20, 28),
  attribute: hex(0.46, 0.14, 80),
  cssProperty: hex(0.40, 0.14, 180),
  regex: hex(0.48, 0.14, 350),
  decorator: hex(0.46, 0.10, 50),
  namespace: hex(0.40, 0.12, 160),
  terracotta: hex(0.48, 0.22, 28),
  sandstone: hex(0.48, 0.12, 340),         // matches type
  amber: hex(0.46, 0.18, 75),
  verdigris: hex(0.40, 0.14, 180),
  sage: hex(0.42, 0.14, 140),
  clay: hex(0.48, 0.14, 350),
  fossil: hex(0.46, 0.10, 50),
  docComment: hex(0.46, 0.018, 55),        // darkened L for contrast
}

// Dim: dark-on-parchment (bg L=0.82) — portal dim feel
const dimSyntax: SyntaxColors = {
  keyword: hex(0.46, 0.22, 28),
  string: hex(0.40, 0.14, 140),
  function: hex(0.38, 0.14, 180),
  type: hex(0.46, 0.12, 340),              // H340 clay-rose (was H62 amber — indistinguishable from constant)
  variable: hex(0.24, 0.01, 260),
  constant: hex(0.44, 0.18, 75),
  comment: hex(0.42, 0.015, 55),           // darkened L for 4.5:1 on dim bg (L=0.82)
  operator: hex(0.36, 0.012, 60),          // darkened — was identical to comment
  tag: hex(0.44, 0.20, 28),
  attribute: hex(0.44, 0.14, 80),
  cssProperty: hex(0.38, 0.14, 180),
  regex: hex(0.46, 0.14, 350),
  decorator: hex(0.44, 0.10, 50),
  namespace: hex(0.38, 0.12, 160),
  terracotta: hex(0.46, 0.22, 28),
  sandstone: hex(0.46, 0.12, 340),         // matches type
  amber: hex(0.44, 0.18, 75),
  verdigris: hex(0.38, 0.14, 180),
  sage: hex(0.40, 0.14, 140),
  clay: hex(0.46, 0.14, 350),
  fossil: hex(0.44, 0.10, 50),
  docComment: hex(0.38, 0.018, 55),        // darkened L for contrast
}

// Dusk: light-on-chocolate (bg L=0.35) — comments/operators MUST be visible
const duskSyntax: SyntaxColors = {
  keyword: hex(0.82, 0.22, 28),              // boosted L for AA (4.5:1) on dusk bg L=0.35
  string: hex(0.76, 0.14, 140),              // gap 41
  function: hex(0.74, 0.12, 180),            // gap 39
  type: hex(0.76, 0.12, 340),               // H340 clay-rose (was H55 amber — indistinguishable from constant)
  variable: hex(0.84, 0.015, 60),            // gap 49
  constant: hex(0.76, 0.16, 70),             // gap 41
  comment: hex(0.72, 0.018, 55),             // boosted L for 4.5:1 on dusk bg L=0.35
  operator: hex(0.70, 0.015, 60),            // gap 35
  tag: hex(0.72, 0.20, 28),                 // gap 37
  attribute: hex(0.76, 0.12, 80),            // gap 41
  cssProperty: hex(0.74, 0.12, 180),         // gap 39
  regex: hex(0.72, 0.14, 350),               // gap 37
  decorator: hex(0.68, 0.08, 50),            // gap 33
  namespace: hex(0.68, 0.10, 150),           // gap 33
  terracotta: hex(0.82, 0.22, 28),           // matches keyword boost
  sandstone: hex(0.76, 0.12, 340),           // matches type
  amber: hex(0.74, 0.16, 70),
  verdigris: hex(0.72, 0.12, 180),
  sage: hex(0.75, 0.14, 140),
  clay: hex(0.70, 0.14, 350),
  fossil: hex(0.66, 0.08, 50),
  docComment: hex(0.70, 0.020, 55),          // boosted L for contrast
}

export const syntaxColors: Record<Mode, SyntaxColors> = {
  light: lightSyntax,
  dim: dimSyntax,
  dusk: duskSyntax,
  dark: darkSyntax,
}
