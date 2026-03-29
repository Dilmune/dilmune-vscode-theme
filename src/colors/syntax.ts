import { formatHex } from 'culori'
import type { Mode, SyntaxColors } from '../types'

function hex(l: number, c: number, h: number): string {
  return formatHex({ mode: 'oklch', l, c, h })
}

// Hue map (consistent across all modes — from palette):
//   terracotta: H28  — keywords, brand accent
//   tag:        H25  — tags, warm red-orange (distinct from keyword H28 via L gap)
//   clay-rose:  H340 — types, warm fired clay
//   sage:       H140 — strings, warm green
//   verdigris:  H180 — functions, aged copper teal
//   amber:      H70  — constants, warm gold
//   clay/regex: H0   — regex, true red (shifted from H350, max distance from type H340)
//   fossil/dec: H40  — decorators, muted earth (shifted from H50)
//   dune:       H60  — operators, warm neutral
//   attribute:  H100 — attributes (shifted from H80)
//   namespace:  H230 — namespaces, cool blue (shifted from H160)

const darkSyntax: SyntaxColors = {
  keyword: hex(0.75, 0.22, 28),
  string: hex(0.78, 0.15, 140),
  function: hex(0.76, 0.14, 180),
  type: hex(0.78, 0.12, 340),              // H340 clay-rose
  variable: hex(0.86, 0.01, 75),
  constant: hex(0.76, 0.18, 70),
  comment: hex(0.60, 0.015, 55),           // boosted L for 4.5:1 on dark bg L=0.18
  operator: hex(0.70, 0.012, 60),
  tag: hex(0.84, 0.20, 25),               // H28→H25, L=0.84 well above keyword L=0.75
  attribute: hex(0.82, 0.12, 100),         // H80→H100, L=0.82 for separation from constant
  cssProperty: hex(0.76, 0.14, 180),
  regex: hex(0.68, 0.14, 0),              // H350→H0, well away from type H340
  decorator: hex(0.65, 0.08, 40),          // H50→H40
  namespace: hex(0.68, 0.10, 230),         // H160→H230
  terracotta: hex(0.75, 0.22, 28),
  sandstone: hex(0.78, 0.12, 340),         // matches type
  amber: hex(0.76, 0.18, 70),
  verdigris: hex(0.76, 0.14, 180),
  sage: hex(0.78, 0.15, 140),
  clay: hex(0.68, 0.14, 0),               // matches regex
  fossil: hex(0.65, 0.08, 40),            // matches decorator
  docComment: hex(0.66, 0.06, 120),         // warm olive, L gap from comment (0.60)
}

const lightSyntax: SyntaxColors = {
  keyword: hex(0.48, 0.22, 28),
  string: hex(0.42, 0.14, 140),
  function: hex(0.40, 0.14, 180),
  type: hex(0.48, 0.12, 340),              // H340 clay-rose
  variable: hex(0.25, 0.01, 260),
  constant: hex(0.46, 0.18, 75),
  comment: hex(0.50, 0.015, 55),           // darkened L for 4.5:1 on light bg
  operator: hex(0.42, 0.01, 60),
  tag: hex(0.38, 0.20, 25),               // H28→H25, L=0.38 well below keyword L=0.48
  attribute: hex(0.38, 0.14, 100),         // H80→H100, L=0.38 for separation from constant L=0.46
  cssProperty: hex(0.40, 0.14, 180),
  regex: hex(0.40, 0.14, 0),              // H350→H0, L=0.40 for separation from type L=0.48
  decorator: hex(0.36, 0.10, 40),          // H50→H40
  namespace: hex(0.40, 0.12, 230),         // H160→H230
  terracotta: hex(0.48, 0.22, 28),
  sandstone: hex(0.48, 0.12, 340),         // matches type
  amber: hex(0.46, 0.18, 75),
  verdigris: hex(0.40, 0.14, 180),
  sage: hex(0.42, 0.14, 140),
  clay: hex(0.40, 0.14, 0),               // matches regex
  fossil: hex(0.36, 0.10, 40),            // matches decorator
  docComment: hex(0.42, 0.06, 120),         // warm olive, L gap from comment (0.50)
}

// Dim: dark-on-parchment (bg L=0.82) — portal dim feel
const dimSyntax: SyntaxColors = {
  keyword: hex(0.38, 0.22, 28),            // L=0.38 for contrast on dim bg
  string: hex(0.34, 0.14, 140),            // L=0.34
  function: hex(0.28, 0.14, 180),          // L=0.28, well below string for muted safety
  type: hex(0.38, 0.12, 340),              // H340 clay-rose, L=0.38
  variable: hex(0.22, 0.01, 260),          // L=0.22
  constant: hex(0.44, 0.18, 75),           // L=0.44, well above keyword for muted safety
  comment: hex(0.42, 0.015, 55),           // L=0.42 for contrast on dim bg
  operator: hex(0.36, 0.012, 60),          // L=0.36, well below comment
  tag: hex(0.20, 0.20, 25),               // H28→H25, L=0.20 (actual ~0.27 after clipping) for regex separation
  attribute: hex(0.22, 0.14, 100),         // H80→H100, L=0.22
  cssProperty: hex(0.28, 0.14, 180),       // matches function
  regex: hex(0.34, 0.14, 0),              // H350→H0, L=0.34 for separation from type L=0.40 and tag L=0.28
  decorator: hex(0.20, 0.10, 40),          // H50→H40, L=0.20 for muted-safe separation from attribute L=0.26
  namespace: hex(0.28, 0.12, 230),         // H160→H230, L=0.28
  terracotta: hex(0.38, 0.22, 28),
  sandstone: hex(0.38, 0.12, 340),         // matches type
  amber: hex(0.44, 0.18, 75),             // matches constant
  verdigris: hex(0.28, 0.14, 180),         // matches function
  sage: hex(0.34, 0.14, 140),             // matches string
  clay: hex(0.34, 0.14, 0),               // matches regex
  fossil: hex(0.20, 0.10, 40),            // matches decorator
  docComment: hex(0.36, 0.06, 120),         // warm olive, L gap from comment (0.42)
}

// Dusk: light-on-chocolate (bg L=0.35) — comments/operators MUST be visible
const duskSyntax: SyntaxColors = {
  keyword: hex(0.84, 0.22, 28),              // L=0.84 for AA on dusk bg (inc. HC variant)
  string: hex(0.76, 0.14, 140),
  function: hex(0.74, 0.12, 180),
  type: hex(0.76, 0.12, 340),               // H340 clay-rose
  variable: hex(0.84, 0.015, 60),
  constant: hex(0.76, 0.16, 70),
  comment: hex(0.78, 0.018, 55),             // L=0.78 for separation from operator
  operator: hex(0.72, 0.015, 60),            // L=0.72 for AA contrast on dusk bg (gap=0.06 from comment)
  tag: hex(0.88, 0.14, 25),                 // warm tag, visible but not washed out
  attribute: hex(0.82, 0.12, 100),           // H80→H100
  cssProperty: hex(0.74, 0.12, 180),
  regex: hex(0.76, 0.16, 10),               // H10, boosted C+L for type↔regex separation + HC contrast
  decorator: hex(0.74, 0.08, 40),            // H50→H40, L=0.74 for AA contrast on dusk bg
  namespace: hex(0.74, 0.10, 230),           // H150→H230, L=0.74 for AA contrast
  terracotta: hex(0.84, 0.22, 28),           // matches keyword
  sandstone: hex(0.76, 0.12, 340),           // matches type
  amber: hex(0.76, 0.16, 70),
  verdigris: hex(0.74, 0.12, 180),           // matches function
  sage: hex(0.76, 0.14, 140),
  clay: hex(0.76, 0.16, 10),                // matches regex
  fossil: hex(0.74, 0.08, 40),              // matches decorator
  docComment: hex(0.74, 0.06, 120),         // warm olive, L gap from comment (0.78)
}

export const syntaxColors: Record<Mode, SyntaxColors> = {
  light: lightSyntax,
  dim: dimSyntax,
  dusk: duskSyntax,
  dark: darkSyntax,
}
