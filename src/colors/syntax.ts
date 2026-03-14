import { formatHex } from 'culori'
import type { Mode, SyntaxColors } from '../types'

function hex(l: number, c: number, h: number): string {
  return formatHex({ mode: 'oklch', l, c, h })
}

const darkSyntax: SyntaxColors = {
  keyword: '#d47a4a',
  string: '#d4a85c',
  function: '#6bc2b4',
  type: '#d4917a',
  variable: '#c8c4be',
  constant: '#e0955a',
  comment: '#6b6e76',
  operator: '#9a9da5',
  tag: '#c6785a',
  attribute: '#c4a06c',
  cssProperty: '#6bc2b4',
  regex: '#d48a8a',
  decorator: '#9a8a7a',
  namespace: '#8aaa9a',
}

const lightSyntax: SyntaxColors = {
  keyword: hex(0.50, 0.19, 35),
  string: hex(0.48, 0.16, 75),
  function: hex(0.42, 0.12, 185),
  type: hex(0.50, 0.16, 35),
  variable: hex(0.25, 0.01, 260),
  constant: hex(0.52, 0.18, 55),
  comment: hex(0.55, 0.01, 260),
  operator: hex(0.45, 0.01, 260),
  tag: hex(0.48, 0.17, 35),
  attribute: hex(0.48, 0.14, 75),
  cssProperty: hex(0.42, 0.12, 185),
  regex: hex(0.50, 0.16, 10),
  decorator: hex(0.48, 0.08, 50),
  namespace: hex(0.42, 0.10, 160),
}

const dimSyntax: SyntaxColors = {
  keyword: hex(0.48, 0.19, 30),
  string: hex(0.46, 0.16, 75),
  function: hex(0.40, 0.12, 185),
  type: hex(0.48, 0.16, 30),
  variable: hex(0.28, 0.015, 50),
  constant: hex(0.50, 0.18, 55),
  comment: hex(0.50, 0.015, 50),
  operator: hex(0.42, 0.015, 50),
  tag: hex(0.46, 0.17, 30),
  attribute: hex(0.46, 0.14, 75),
  cssProperty: hex(0.40, 0.12, 185),
  regex: hex(0.48, 0.16, 10),
  decorator: hex(0.46, 0.08, 50),
  namespace: hex(0.40, 0.10, 160),
}

export const syntaxColors: Record<Mode, SyntaxColors> = {
  light: lightSyntax,
  dim: dimSyntax,
  dark: darkSyntax,
}
