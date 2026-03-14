import { formatHex } from 'culori'
import type { Mode, SyntaxColors } from '../types'

function hex(l: number, c: number, h: number): string {
  return formatHex({ mode: 'oklch', l, c, h })
}

// Dark: vivid on deep blue-black — terracotta leads, everything punchy
const darkSyntax: SyntaxColors = {
  keyword: hex(0.68, 0.24, 30),
  string: hex(0.72, 0.16, 80),
  function: hex(0.70, 0.14, 185),
  type: hex(0.72, 0.16, 40),
  variable: hex(0.82, 0.01, 75),
  constant: hex(0.72, 0.20, 60),
  comment: hex(0.50, 0.01, 260),
  operator: hex(0.65, 0.01, 260),
  tag: hex(0.65, 0.20, 30),
  attribute: hex(0.70, 0.14, 75),
  cssProperty: hex(0.70, 0.14, 185),
  regex: hex(0.68, 0.16, 10),
  decorator: hex(0.60, 0.08, 50),
  namespace: hex(0.62, 0.10, 160),
}

// Light: bold dark-on-cream — terracotta keywords own the page
const lightSyntax: SyntaxColors = {
  keyword: hex(0.48, 0.22, 30),
  string: hex(0.45, 0.16, 75),
  function: hex(0.40, 0.14, 185),
  type: hex(0.48, 0.18, 40),
  variable: hex(0.25, 0.01, 260),
  constant: hex(0.48, 0.20, 55),
  comment: hex(0.55, 0.01, 260),
  operator: hex(0.42, 0.01, 260),
  tag: hex(0.46, 0.20, 30),
  attribute: hex(0.46, 0.16, 75),
  cssProperty: hex(0.40, 0.14, 185),
  regex: hex(0.48, 0.18, 10),
  decorator: hex(0.46, 0.10, 50),
  namespace: hex(0.40, 0.12, 160),
}

// Dim: warm candlelight — terracotta glows against dark brown
const dimSyntax: SyntaxColors = {
  keyword: hex(0.68, 0.24, 30),
  string: hex(0.70, 0.15, 80),
  function: hex(0.65, 0.12, 170),
  type: hex(0.70, 0.16, 45),
  variable: hex(0.78, 0.015, 60),
  constant: hex(0.70, 0.18, 60),
  comment: hex(0.48, 0.015, 50),
  operator: hex(0.58, 0.015, 50),
  tag: hex(0.65, 0.20, 30),
  attribute: hex(0.68, 0.14, 75),
  cssProperty: hex(0.65, 0.12, 170),
  regex: hex(0.65, 0.16, 10),
  decorator: hex(0.58, 0.08, 50),
  namespace: hex(0.58, 0.10, 150),
}

export const syntaxColors: Record<Mode, SyntaxColors> = {
  light: lightSyntax,
  dim: dimSyntax,
  dark: darkSyntax,
}
