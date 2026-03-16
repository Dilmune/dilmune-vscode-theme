export type Mode = 'light' | 'dim' | 'dusk' | 'dark'
export type Variant = 'default' | 'soft' | 'muted' | 'high-contrast'

export interface ThemeConfig {
  name: string
  fileName: string
  mode: Mode
  variant: Variant
  type: 'light' | 'dark' | 'hc-light' | 'hc-black'
}

export interface BaseColors {
  [key: string]: string
  background: string
  foreground: string
  card: string
  primary: string
  primaryForeground: string
  border: string
  mutedForeground: string
  sidebar: string
  sidebarBorder: string
  success: string
  warning: string
  destructive: string
  info: string
}

export interface SyntaxColors {
  [key: string]: string
  keyword: string
  string: string
  function: string
  type: string
  variable: string
  constant: string
  comment: string
  operator: string
  tag: string
  attribute: string
  cssProperty: string
  regex: string
  decorator: string
  namespace: string
  terracotta: string
  sandstone: string
  amber: string
  verdigris: string
  sage: string
  clay: string
  fossil: string
  docComment: string
}

export interface ThemeOutput {
  name: string
  type: 'light' | 'dark' | 'hc-light' | 'hc-black'
  semanticHighlighting: boolean
  colors: Record<string, string>
  tokenColors: Array<{
    name?: string
    scope: string | string[]
    settings: {
      foreground?: string
      fontStyle?: string
    }
  }>
  semanticTokenColors: Record<string, string | { foreground?: string; fontStyle?: string }>
}
