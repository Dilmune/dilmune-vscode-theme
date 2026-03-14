import type { SyntaxColors } from '../types'

export function buildTokenColors(colors: SyntaxColors): Array<{
  name?: string
  scope: string | string[]
  settings: { foreground?: string; fontStyle?: string }
}> {
  return [
    {
      name: 'Keywords',
      scope: ['keyword', 'storage.type', 'storage.modifier'],
      settings: { foreground: colors.keyword },
    },
    {
      name: 'Control flow',
      scope: ['keyword.control', 'keyword.control.flow'],
      settings: { foreground: colors.keyword },
    },
    {
      name: 'Strings',
      scope: ['string', 'string.quoted', 'string.template'],
      settings: { foreground: colors.string },
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function', 'meta.function-call'],
      settings: { foreground: colors.function },
    },
    {
      name: 'Types and classes',
      scope: ['entity.name.type', 'entity.name.class', 'support.type', 'support.class', 'entity.other.inherited-class'],
      settings: { foreground: colors.type },
    },
    {
      name: 'Variables',
      scope: ['variable', 'variable.parameter', 'variable.other'],
      settings: { foreground: colors.variable },
    },
    {
      name: 'Constants and numbers',
      scope: ['constant.numeric', 'constant.language', 'variable.other.constant', 'constant.other'],
      settings: { foreground: colors.constant },
    },
    {
      name: 'Comments',
      scope: ['comment', 'comment.line', 'comment.block', 'punctuation.definition.comment'],
      settings: { foreground: colors.comment, fontStyle: 'italic' },
    },
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'keyword.operator.assignment',
        'keyword.operator.comparison',
        'keyword.operator.logical',
        'keyword.operator.arithmetic',
        'keyword.operator.ternary',
        'keyword.operator.spread',
        'keyword.operator.rest',
        'keyword.operator.type',
        'keyword.operator.expression',
      ],
      settings: { foreground: colors.operator },
    },
    {
      name: 'HTML/JSX tags',
      scope: ['entity.name.tag', 'support.class.component'],
      settings: { foreground: colors.tag },
    },
    {
      name: 'Attributes',
      scope: ['entity.other.attribute-name'],
      settings: { foreground: colors.attribute },
    },
    {
      name: 'CSS properties',
      scope: ['support.type.property-name.css', 'support.type.property-name.scss'],
      settings: { foreground: colors.cssProperty },
    },
    {
      name: 'CSS values',
      scope: ['support.constant.property-value.css', 'support.constant.color.css'],
      settings: { foreground: colors.constant },
    },
    {
      name: 'CSS units',
      scope: ['keyword.other.unit.css'],
      settings: { foreground: colors.constant },
    },
    {
      name: 'Regex and escape chars',
      scope: ['string.regexp', 'constant.character.escape'],
      settings: { foreground: colors.regex },
    },
    {
      name: 'Decorators',
      scope: ['meta.decorator', 'punctuation.decorator', 'meta.annotation'],
      settings: { foreground: colors.decorator },
    },
    {
      name: 'Namespaces and modules',
      scope: ['entity.name.namespace', 'entity.name.module', 'entity.name.import'],
      settings: { foreground: colors.namespace },
    },
    // Go-specific
    {
      name: 'Go functions',
      scope: ['source.go entity.name.function'],
      settings: { foreground: colors.function },
    },
    {
      name: 'Go types',
      scope: ['source.go storage.type'],
      settings: { foreground: colors.type },
    },
    // TypeScript/TSX-specific
    {
      name: 'TSX component tags',
      scope: ['support.class.component.tsx', 'support.class.component.jsx'],
      settings: { foreground: colors.tag },
    },
    {
      name: 'TypeScript types',
      scope: ['entity.name.type.tsx', 'entity.name.type.ts'],
      settings: { foreground: colors.type },
    },
    // Python-specific
    {
      name: 'Python builtins',
      scope: ['support.function.builtin.python'],
      settings: { foreground: colors.function },
    },
    // Rust-specific
    {
      name: 'Rust lifetimes',
      scope: ['entity.name.lifetime.rust'],
      settings: { foreground: colors.decorator },
    },
    {
      name: 'Rust storage',
      scope: ['storage.type.rust'],
      settings: { foreground: colors.keyword },
    },
    // SQL-specific
    {
      name: 'SQL DML keywords',
      scope: ['keyword.other.DML.sql', 'keyword.other.DDL.sql'],
      settings: { foreground: colors.keyword },
    },
    {
      name: 'SQL table names',
      scope: ['constant.other.table-name.sql'],
      settings: { foreground: colors.type },
    },
    {
      name: 'SQL database names',
      scope: ['constant.other.database-name.sql'],
      settings: { foreground: colors.namespace },
    },
    // JSON
    {
      name: 'JSON keys',
      scope: ['support.type.property-name.json'],
      settings: { foreground: colors.attribute },
    },
    // YAML
    {
      name: 'YAML keys',
      scope: ['entity.name.tag.yaml'],
      settings: { foreground: colors.attribute },
    },
    // Markdown
    {
      name: 'Markdown headings',
      scope: ['heading.1.markdown', 'heading.2.markdown', 'heading.3.markdown', 'markup.heading'],
      settings: { foreground: colors.keyword, fontStyle: 'bold' },
    },
    {
      name: 'Markdown bold',
      scope: ['markup.bold'],
      settings: { fontStyle: 'bold' },
    },
    {
      name: 'Markdown italic',
      scope: ['markup.italic'],
      settings: { fontStyle: 'italic' },
    },
    {
      name: 'Markdown code',
      scope: ['markup.inline.raw', 'markup.fenced_code.block'],
      settings: { foreground: colors.string },
    },
    {
      name: 'Markdown links',
      scope: ['markup.underline.link'],
      settings: { foreground: colors.function },
    },
    // Font style depth
    {
      name: 'This/self/super',
      scope: ['variable.language.this', 'variable.language.self', 'variable.language.super'],
      settings: { foreground: colors.keyword, fontStyle: 'italic' },
    },
    {
      name: 'Type parameters',
      scope: ['entity.name.type.parameter', 'meta.type.parameters'],
      settings: { foreground: colors.type, fontStyle: 'italic' },
    },
    {
      name: 'Import/export',
      scope: ['keyword.control.import', 'keyword.control.export', 'keyword.control.from'],
      settings: { foreground: colors.keyword, fontStyle: 'italic' },
    },
    {
      name: 'Interface declarations',
      scope: ['entity.name.type.interface'],
      settings: { foreground: colors.type, fontStyle: 'italic' },
    },
    // Deprecated
    {
      name: 'Deprecated',
      scope: ['invalid.deprecated'],
      settings: { fontStyle: 'strikethrough' },
    },
  ]
}
