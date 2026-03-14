import type { SyntaxColors } from '../types'
import { adjustLightness, adjustChroma } from '../colors/variants'

export function buildSemanticTokenColors(
  colors: SyntaxColors
): Record<string, string | { foreground: string; fontStyle?: string }> {
  return {
    function: colors.function,
    'function.declaration': adjustChroma(colors.function, 1.05),
    method: colors.function,
    variable: colors.variable,
    'variable.readonly': colors.constant,
    parameter: adjustLightness(colors.variable, -0.03),
    property: colors.variable,
    type: colors.type,
    class: colors.type,
    interface: adjustChroma(colors.type, 0.9),
    enum: colors.type,
    enumMember: colors.constant,
    namespace: colors.namespace,
    decorator: colors.decorator,
    comment: { foreground: colors.comment, fontStyle: 'italic' },
    string: colors.string,
    number: colors.constant,
    keyword: colors.keyword,
    operator: colors.operator,
    '*.deprecated': { fontStyle: 'strikethrough' },
    'variable.defaultLibrary': { foreground: colors.keyword, fontStyle: 'italic' },
    selfKeyword: { foreground: colors.keyword, fontStyle: 'italic' },
  }
}
