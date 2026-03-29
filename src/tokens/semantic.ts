import type { SyntaxColors } from '../types'
import { adjustLightness, adjustChroma } from '../colors/variants'

export function buildSemanticTokenColors(
  colors: SyntaxColors,
  isDark = false
): Record<string, string | { foreground?: string; fontStyle?: string }> {
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
    selfKeyword: { foreground: colors.keyword, fontStyle: 'italic' },

    'function.async': colors.verdigris,
    'method.async': colors.verdigris,

    'method.static': { foreground: colors.verdigris, fontStyle: 'underline' },
    'property.static': { foreground: colors.variable, fontStyle: 'underline' },

    'variable.declaration': adjustLightness(colors.variable, isDark ? 0.03 : -0.03),
    'parameter.declaration': adjustLightness(colors.variable, isDark ? 0.02 : -0.02),

    'function.defaultLibrary': { foreground: colors.verdigris, fontStyle: 'italic' },
    'class.defaultLibrary': { foreground: colors.sandstone, fontStyle: 'italic' },
    'method.defaultLibrary': { foreground: colors.verdigris, fontStyle: 'italic' },
    'variable.defaultLibrary': { foreground: colors.terracotta, fontStyle: 'italic' },

    'class.abstract': { foreground: colors.sandstone, fontStyle: 'italic' },
    'method.abstract': { foreground: colors.verdigris, fontStyle: 'italic' },

    'property.readonly': colors.amber,

    '*.documentation': { foreground: colors.comment, fontStyle: 'italic' },

    // Struct (Go, Rust, C)
    struct: colors.type,

    // Trait/Protocol (Rust)
    'interface.trait': { foreground: colors.type, fontStyle: 'italic' },

    // Macro (Rust)
    macro: { foreground: colors.terracotta, fontStyle: 'bold' },

    // Lifetime (Rust)
    lifetime: colors.decorator,

    // Annotation (Java, Python)
    annotation: colors.decorator,

    // Label (goto, loop labels)
    label: colors.terracotta,

    // Type parameter (generics)
    typeParameter: { foreground: colors.type, fontStyle: 'italic' },

    // Regexp
    regexp: colors.clay,
  }
}
