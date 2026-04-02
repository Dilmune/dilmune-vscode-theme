import { baseColors } from './colors/base'
import { syntaxColors } from './colors/syntax'
import { applyBaseVariant, applySyntaxVariant } from './colors/variants'
import { buildEditorColors } from './tokens/editor'
import { buildTokenColors } from './tokens/syntax'
import { buildSemanticTokenColors } from './tokens/semantic'
import type { ThemeConfig, ThemeOutput } from './types'

const themeConfigs: ThemeConfig[] = [
  // Light (2)
  { name: 'Dilmune Light', fileName: 'dilmune-light', mode: 'light', variant: 'default', type: 'light' },
  { name: 'Dilmune Light High Contrast', fileName: 'dilmune-light-high-contrast', mode: 'light', variant: 'high-contrast', type: 'hc-light' },
  // Dim (1) — mid-tone warm parchment
  { name: 'Dilmune Dim', fileName: 'dilmune-dim', mode: 'dim', variant: 'default', type: 'light' },
  // Dusk (2) — warm dark brown
  { name: 'Dilmune Dusk', fileName: 'dilmune-dusk', mode: 'dusk', variant: 'default', type: 'dark' },
  { name: 'Dilmune Dusk High Contrast', fileName: 'dilmune-dusk-high-contrast', mode: 'dusk', variant: 'high-contrast', type: 'hc-black' },
  // Dark (2)
  { name: 'Dilmune Dark', fileName: 'dilmune-dark', mode: 'dark', variant: 'default', type: 'dark' },
  { name: 'Dilmune Dark High Contrast', fileName: 'dilmune-dark-high-contrast', mode: 'dark', variant: 'high-contrast', type: 'hc-black' },
]

export function buildTheme(config: ThemeConfig): ThemeOutput {
  const base = applyBaseVariant(baseColors[config.mode], config.variant)
  const isDark = config.mode === 'dark' || config.mode === 'dusk'
  const syntax = applySyntaxVariant(syntaxColors[config.mode], config.variant, isDark)

  return {
    name: config.name,
    type: config.type,
    semanticHighlighting: true,
    colors: buildEditorColors(base, config.mode, syntax, config.variant),
    tokenColors: buildTokenColors(syntax),
    semanticTokenColors: buildSemanticTokenColors(syntax, isDark),
  }
}

export { themeConfigs }
