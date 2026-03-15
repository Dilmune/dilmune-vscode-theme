import { baseColors } from './colors/base'
import { syntaxColors } from './colors/syntax'
import { applyBaseVariant, applySyntaxVariant } from './colors/variants'
import { buildEditorColors } from './tokens/editor'
import { buildTokenColors } from './tokens/syntax'
import { buildSemanticTokenColors } from './tokens/semantic'
import type { ThemeConfig, ThemeOutput } from './types'

const themeConfigs: ThemeConfig[] = [
  // Light (3)
  { name: 'Dilmune Light', fileName: 'dilmune-light', mode: 'light', variant: 'default', type: 'light' },
  { name: 'Dilmune Light Muted', fileName: 'dilmune-light-muted', mode: 'light', variant: 'muted', type: 'light' },
  { name: 'Dilmune Light High Contrast', fileName: 'dilmune-light-high-contrast', mode: 'light', variant: 'high-contrast', type: 'hc-light' },
  // Dim (3) — mid-tone warm parchment
  { name: 'Dilmune Dim', fileName: 'dilmune-dim', mode: 'dim', variant: 'default', type: 'light' },
  { name: 'Dilmune Dim Muted', fileName: 'dilmune-dim-muted', mode: 'dim', variant: 'muted', type: 'light' },
  { name: 'Dilmune Dim High Contrast', fileName: 'dilmune-dim-high-contrast', mode: 'dim', variant: 'high-contrast', type: 'hc-light' },
  // Dusk (3) — warm dark brown
  { name: 'Dilmune Dusk', fileName: 'dilmune-dusk', mode: 'dusk', variant: 'default', type: 'dark' },
  { name: 'Dilmune Dusk Muted', fileName: 'dilmune-dusk-muted', mode: 'dusk', variant: 'muted', type: 'dark' },
  { name: 'Dilmune Dusk High Contrast', fileName: 'dilmune-dusk-high-contrast', mode: 'dusk', variant: 'high-contrast', type: 'hc-black' },
  // Dark (3)
  { name: 'Dilmune Dark', fileName: 'dilmune-dark', mode: 'dark', variant: 'default', type: 'dark' },
  { name: 'Dilmune Dark Soft', fileName: 'dilmune-dark-soft', mode: 'dark', variant: 'soft', type: 'dark' },
  { name: 'Dilmune Dark High Contrast', fileName: 'dilmune-dark-high-contrast', mode: 'dark', variant: 'high-contrast', type: 'hc-black' },
]

export function buildTheme(config: ThemeConfig): ThemeOutput {
  const base = applyBaseVariant(baseColors[config.mode], config.variant)
  const syntax = applySyntaxVariant(syntaxColors[config.mode], config.variant)

  return {
    name: config.name,
    type: config.type,
    semanticHighlighting: true,
    colors: buildEditorColors(base, config.mode),
    tokenColors: buildTokenColors(syntax),
    semanticTokenColors: buildSemanticTokenColors(syntax),
  }
}

export { themeConfigs }
