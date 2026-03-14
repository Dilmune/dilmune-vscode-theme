import type { BaseColors, Mode } from '../types'
import { adjustLightness, withOpacity } from '../colors/variants'

export function buildEditorColors(colors: BaseColors, mode: Mode): Record<string, string> {
  const isLight = mode === 'light' || mode === 'dim'
  const selectionOpacity = isLight ? 0.15 : 0.20
  const activityBarBg = adjustLightness(colors.sidebar, isLight ? -0.02 : -0.02)
  const statusBarBg = adjustLightness(colors.sidebar, isLight ? -0.02 : -0.02)

  return {
    // Backgrounds
    'editor.background': colors.background,
    'sideBar.background': colors.sidebar,
    'activityBar.background': activityBarBg,
    'panel.background': colors.card,
    'editorWidget.background': colors.card,
    'dropdown.background': colors.card,
    'input.background': colors.background,
    'tab.inactiveBackground': colors.background,
    'tab.activeBackground': colors.card,
    'titleBar.activeBackground': colors.sidebar,
    'titleBar.inactiveBackground': colors.sidebar,
    'statusBar.background': statusBarBg,
    'statusBar.noFolderBackground': statusBarBg,
    'statusBar.debuggingBackground': colors.primary,
    'editorGroupHeader.tabsBackground': colors.background,
    'breadcrumb.background': colors.background,
    'terminal.background': colors.background,
    'editorGutter.background': colors.background,
    'peekViewEditor.background': colors.card,
    'peekViewResult.background': colors.sidebar,
    'quickInput.background': colors.card,
    'notifications.background': colors.card,
    'editorHoverWidget.background': colors.card,
    'debugToolBar.background': colors.card,

    // Foregrounds
    'foreground': colors.foreground,
    'editor.foreground': colors.foreground,
    'sideBar.foreground': adjustLightness(colors.foreground, isLight ? 0.08 : -0.05),
    'activityBar.foreground': colors.foreground,
    'activityBar.inactiveForeground': colors.mutedForeground,
    'editorLineNumber.foreground': colors.mutedForeground,
    'editorLineNumber.activeForeground': colors.foreground,
    'breadcrumb.foreground': colors.mutedForeground,
    'breadcrumb.focusForeground': colors.foreground,
    'breadcrumb.activeSelectionForeground': colors.foreground,
    'tab.inactiveForeground': colors.mutedForeground,
    'tab.activeForeground': colors.foreground,
    'statusBar.foreground': colors.mutedForeground,
    'statusBar.debuggingForeground': colors.primaryForeground,
    'titleBar.activeForeground': colors.foreground,
    'titleBar.inactiveForeground': colors.mutedForeground,
    'terminal.foreground': colors.foreground,
    'peekViewResult.selectionForeground': colors.foreground,
    'notifications.foreground': colors.foreground,
    'input.foreground': colors.foreground,
    'input.placeholderForeground': colors.mutedForeground,
    'dropdown.foreground': colors.foreground,
    'quickInput.foreground': colors.foreground,
    'editorHoverWidget.foreground': colors.foreground,
    'debugToolBar.foreground': colors.foreground,

    // Accents (terracotta)
    'focusBorder': colors.primary,
    'activityBarBadge.background': colors.primary,
    'activityBarBadge.foreground': colors.primaryForeground,
    'button.background': colors.primary,
    'button.foreground': colors.primaryForeground,
    'button.hoverBackground': adjustLightness(colors.primary, isLight ? -0.03 : 0.03),
    'button.secondaryBackground': colors.card,
    'button.secondaryForeground': colors.foreground,
    'tab.activeBorderTop': colors.primary,
    'progressBar.background': colors.primary,
    'textLink.foreground': colors.primary,
    'textLink.activeForeground': adjustLightness(colors.primary, 0.05),
    'editorLink.activeForeground': colors.primary,
    'list.activeSelectionBackground': withOpacity(colors.primary, 0.2),
    'list.activeSelectionForeground': colors.foreground,
    'list.inactiveSelectionBackground': withOpacity(colors.primary, 0.1),
    'list.hoverBackground': withOpacity(colors.primary, 0.06),
    'list.highlightForeground': colors.primary,
    'list.focusOutline': colors.primary,
    'badge.background': colors.primary,
    'badge.foreground': colors.primaryForeground,
    'peekViewTitleLabel.foreground': colors.primary,
    'peekView.border': colors.primary,
    'editorOverviewRuler.findMatchForeground': withOpacity(colors.primary, 0.5),

    // Borders
    'editorGroup.border': colors.border,
    'sideBar.border': colors.sidebarBorder,
    'panel.border': colors.border,
    'editorWidget.border': colors.border,
    'tab.border': '#00000000',
    'titleBar.border': colors.border,
    'statusBar.border': colors.border,
    'notifications.border': colors.border,
    'input.border': colors.border,
    'dropdown.border': colors.border,
    'quickInput.border': colors.border,
    'editorHoverWidget.border': colors.border,

    // Status colors
    'errorForeground': colors.destructive,
    'editorError.foreground': colors.destructive,
    'editorWarning.foreground': colors.warning,
    'editorInfo.foreground': colors.info,
    'list.errorForeground': colors.destructive,
    'list.warningForeground': colors.warning,
    'testing.iconPassed': colors.success,
    'testing.iconFailed': colors.destructive,
    'testing.iconErrored': colors.destructive,
    'testing.iconSkipped': colors.warning,
    'gitDecoration.addedResourceForeground': colors.success,
    'gitDecoration.modifiedResourceForeground': colors.info,
    'gitDecoration.deletedResourceForeground': colors.destructive,
    'gitDecoration.untrackedResourceForeground': adjustLightness(colors.success, isLight ? 0.05 : -0.05),
    'gitDecoration.conflictingResourceForeground': colors.warning,
    'gitDecoration.ignoredResourceForeground': colors.mutedForeground,

    // Selection & highlights
    'editor.selectionBackground': withOpacity(colors.primary, selectionOpacity),
    'editor.inactiveSelectionBackground': withOpacity(colors.primary, selectionOpacity * 0.6),
    'editor.selectionHighlightBackground': withOpacity(colors.primary, 0.08),
    'editor.wordHighlightBackground': withOpacity(colors.primary, 0.10),
    'editor.wordHighlightStrongBackground': withOpacity(colors.primary, 0.15),
    'editor.findMatchBackground': withOpacity(colors.warning, 0.30),
    'editor.findMatchHighlightBackground': withOpacity(colors.warning, 0.15),
    'editorCursor.foreground': colors.primary,
    'editor.lineHighlightBackground': withOpacity(colors.foreground, 0.04),
    'editor.rangeHighlightBackground': withOpacity(colors.primary, 0.06),

    // Diff
    'diffEditor.insertedTextBackground': withOpacity(colors.success, 0.12),
    'diffEditor.removedTextBackground': withOpacity(colors.destructive, 0.12),
    'diffEditor.insertedLineBackground': withOpacity(colors.success, 0.08),
    'diffEditor.removedLineBackground': withOpacity(colors.destructive, 0.08),

    // Merge conflict
    'merge.currentHeaderBackground': withOpacity(colors.success, 0.25),
    'merge.incomingHeaderBackground': withOpacity(colors.info, 0.25),

    // Minimap
    'minimap.findMatchHighlight': withOpacity(colors.warning, 0.5),
    'minimap.selectionHighlight': withOpacity(colors.primary, 0.3),
    'minimap.errorHighlight': colors.destructive,
    'minimap.warningHighlight': colors.warning,

    // Scrollbar
    'scrollbarSlider.background': withOpacity(colors.mutedForeground, 0.2),
    'scrollbarSlider.hoverBackground': withOpacity(colors.mutedForeground, 0.35),
    'scrollbarSlider.activeBackground': withOpacity(colors.mutedForeground, 0.5),

    // Bracket pair colorization
    'editorBracketHighlight.foreground1': colors.primary,
    'editorBracketHighlight.foreground2': colors.info,
    'editorBracketHighlight.foreground3': colors.warning,
    'editorBracketHighlight.foreground4': colors.success,
    'editorBracketHighlight.foreground5': colors.destructive,
    'editorBracketHighlight.foreground6': colors.mutedForeground,
    'editorBracketMatch.background': withOpacity(colors.primary, 0.15),
    'editorBracketMatch.border': withOpacity(colors.primary, 0.5),

    // Indent guides
    'editorIndentGuide.background': withOpacity(colors.border, 0.5),
    'editorIndentGuide.activeBackground': colors.border,

    // Ruler
    'editorRuler.foreground': withOpacity(colors.border, 0.5),

    // Whitespace
    'editorWhitespace.foreground': withOpacity(colors.mutedForeground, 0.25),

    // Terminal ANSI colors
    'terminal.ansiBlack': isLight ? colors.foreground : colors.background,
    'terminal.ansiRed': colors.destructive,
    'terminal.ansiGreen': colors.success,
    'terminal.ansiYellow': colors.warning,
    'terminal.ansiBlue': colors.info,
    'terminal.ansiMagenta': isLight ? '#a35a6a' : '#d48a8a',
    'terminal.ansiCyan': isLight ? '#3a8a7a' : '#6bc2b4',
    'terminal.ansiWhite': isLight ? colors.background : colors.foreground,
    'terminal.ansiBrightBlack': colors.mutedForeground,
    'terminal.ansiBrightRed': adjustLightness(colors.destructive, isLight ? -0.10 : 0.10),
    'terminal.ansiBrightGreen': adjustLightness(colors.success, isLight ? -0.10 : 0.10),
    'terminal.ansiBrightYellow': adjustLightness(colors.warning, isLight ? -0.10 : 0.10),
    'terminal.ansiBrightBlue': adjustLightness(colors.info, isLight ? -0.10 : 0.10),
    'terminal.ansiBrightMagenta': isLight ? '#8a4a5a' : '#e0a0a0',
    'terminal.ansiBrightCyan': isLight ? '#2a7a6a' : '#88d4c8',
    'terminal.ansiBrightWhite': isLight ? colors.foreground : '#ffffff',
  }
}
