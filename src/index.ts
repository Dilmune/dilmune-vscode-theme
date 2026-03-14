import { baseColors } from './colors/base'
import { syntaxColors } from './colors/syntax'
import { applyBaseVariant, applySyntaxVariant } from './colors/variants'
import { buildEditorColors } from './tokens/editor'
import { buildTokenColors } from './tokens/syntax'
import { buildSemanticTokenColors } from './tokens/semantic'
import type { ThemeConfig, ThemeOutput } from './types'

const themeConfigs: ThemeConfig[] = [
  { name: 'Dilmune Light', fileName: 'dilmune-light', mode: 'light', variant: 'default', type: 'light' },
  { name: 'Dilmune Light Muted', fileName: 'dilmune-light-muted', mode: 'light', variant: 'muted', type: 'light' },
  { name: 'Dilmune Light High Contrast', fileName: 'dilmune-light-high-contrast', mode: 'light', variant: 'high-contrast', type: 'hc-light' },
  { name: 'Dilmune Dim', fileName: 'dilmune-dim', mode: 'dim', variant: 'default', type: 'light' },
  { name: 'Dilmune Dim Muted', fileName: 'dilmune-dim-muted', mode: 'dim', variant: 'muted', type: 'light' },
  { name: 'Dilmune Dim High Contrast', fileName: 'dilmune-dim-high-contrast', mode: 'dim', variant: 'high-contrast', type: 'hc-light' },
  { name: 'Dilmune Dark', fileName: 'dilmune-dark', mode: 'dark', variant: 'default', type: 'dark' },
  { name: 'Dilmune Dark Soft', fileName: 'dilmune-dark-soft', mode: 'dark', variant: 'soft', type: 'dark' },
  { name: 'Dilmune Dark Muted', fileName: 'dilmune-dark-muted', mode: 'dark', variant: 'muted', type: 'dark' },
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
