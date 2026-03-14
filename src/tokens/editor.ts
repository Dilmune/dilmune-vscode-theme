import type { BaseColors, Mode } from '../types'
import { adjustLightness, withOpacity } from '../colors/variants'

export function buildEditorColors(colors: BaseColors, mode: Mode): Record<string, string> {
  const isLight = mode === 'light'
  const selectionOpacity = isLight ? 0.15 : 0.20
  const activityBarBg = adjustLightness(colors.sidebar, isLight ? -0.02 : -0.02)
  const statusBarBg = adjustLightness(colors.sidebar, isLight ? -0.02 : -0.02)
  const elevated = colors.card
  const breadcrumbFg = adjustLightness(colors.mutedForeground, isLight ? -0.03 : 0.06)

  return {
    // ── Backgrounds ──────────────────────────────────────────────
    'editor.background': colors.background,
    'sideBar.background': colors.sidebar,
    'activityBar.background': activityBarBg,
    'panel.background': elevated,
    'editorWidget.background': elevated,
    'dropdown.background': elevated,
    'input.background': colors.background,
    'tab.inactiveBackground': colors.background,
    'tab.activeBackground': elevated,
    'titleBar.activeBackground': colors.sidebar,
    'titleBar.inactiveBackground': colors.sidebar,
    'statusBar.background': statusBarBg,
    'statusBar.noFolderBackground': statusBarBg,
    'statusBar.debuggingBackground': colors.primary,
    'editorGroupHeader.tabsBackground': colors.background,
    'breadcrumb.background': colors.background,
    'terminal.background': colors.background,
    'editorGutter.background': colors.background,
    'peekViewEditor.background': elevated,
    'peekViewResult.background': colors.sidebar,
    'quickInput.background': elevated,
    'notifications.background': elevated,
    'editorHoverWidget.background': elevated,
    'debugToolBar.background': elevated,

    // ── Foregrounds ──────────────────────────────────────────────
    'foreground': colors.foreground,
    'editor.foreground': colors.foreground,
    'sideBar.foreground': adjustLightness(colors.foreground, isLight ? 0.08 : -0.05),
    'activityBar.foreground': colors.foreground,
    'activityBar.inactiveForeground': colors.mutedForeground,
    'editorLineNumber.foreground': adjustLightness(colors.mutedForeground, isLight ? 0 : 0.03),
    'editorLineNumber.activeForeground': colors.foreground,
    'breadcrumb.foreground': breadcrumbFg,
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

    // ── Accents (terracotta) ─────────────────────────────────────
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

    // ── Borders ──────────────────────────────────────────────────
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

    // ── Status colors ────────────────────────────────────────────
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

    // ── Selection & highlights ───────────────────────────────────
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

    // ── Sticky scroll ────────────────────────────────────────────
    'editorStickyScroll.background': colors.background,
    'editorStickyScrollHover.background': withOpacity(colors.foreground, 0.04),

    // ── Inlay hints ──────────────────────────────────────────────
    'editorInlayHint.background': withOpacity(colors.mutedForeground, 0.10),
    'editorInlayHint.foreground': colors.mutedForeground,
    'editorInlayHint.typeForeground': adjustLightness(colors.mutedForeground, isLight ? -0.05 : 0.05),
    'editorInlayHint.parameterForeground': adjustLightness(colors.mutedForeground, isLight ? -0.05 : 0.05),

    // ── Code lens ────────────────────────────────────────────────
    'editorCodeLens.foreground': colors.mutedForeground,

    // ── Ghost text (AI suggestions) ──────────────────────────────
    'editorGhostText.foreground': withOpacity(colors.mutedForeground, 0.6),

    // ── Editor gutter ────────────────────────────────────────────
    'editorGutter.addedBackground': colors.success,
    'editorGutter.modifiedBackground': colors.info,
    'editorGutter.deletedBackground': colors.destructive,
    'editorGutter.foldingControlForeground': colors.mutedForeground,

    // ── Suggest widget (autocomplete) ────────────────────────────
    'editorSuggestWidget.background': elevated,
    'editorSuggestWidget.border': colors.border,
    'editorSuggestWidget.foreground': colors.foreground,
    'editorSuggestWidget.highlightForeground': colors.primary,
    'editorSuggestWidget.selectedBackground': withOpacity(colors.primary, 0.15),
    'editorSuggestWidget.selectedForeground': colors.foreground,
    'editorSuggestWidget.focusHighlightForeground': colors.primary,

    // ── Peek view details ────────────────────────────────────────
    'peekViewEditor.matchHighlightBackground': withOpacity(colors.warning, 0.25),
    'peekViewResult.matchHighlightBackground': withOpacity(colors.warning, 0.20),
    'peekViewResult.lineForeground': colors.mutedForeground,
    'peekViewResult.fileForeground': colors.foreground,

    // ── Input validation ─────────────────────────────────────────
    'inputValidation.errorBackground': withOpacity(colors.destructive, 0.15),
    'inputValidation.errorBorder': colors.destructive,
    'inputValidation.warningBackground': withOpacity(colors.warning, 0.15),
    'inputValidation.warningBorder': colors.warning,
    'inputValidation.infoBackground': withOpacity(colors.info, 0.15),
    'inputValidation.infoBorder': colors.info,

    // ── Editor overview ruler (right gutter) ─────────────────────
    'editorOverviewRuler.errorForeground': colors.destructive,
    'editorOverviewRuler.warningForeground': colors.warning,
    'editorOverviewRuler.infoForeground': colors.info,
    'editorOverviewRuler.bracketMatchForeground': withOpacity(colors.primary, 0.6),
    'editorOverviewRuler.modifiedForeground': colors.info,
    'editorOverviewRuler.addedForeground': colors.success,
    'editorOverviewRuler.deletedForeground': colors.destructive,

    // ── Keybinding label ─────────────────────────────────────────
    'keybindingLabel.background': withOpacity(colors.foreground, 0.06),
    'keybindingLabel.foreground': colors.foreground,
    'keybindingLabel.border': withOpacity(colors.foreground, 0.12),
    'keybindingLabel.bottomBorder': withOpacity(colors.foreground, 0.18),

    // ── Tab modified indicator ────────────────────────────────────
    'tab.lastPinnedBorder': colors.border,

    // ── Panel title ──────────────────────────────────────────────
    'panelTitle.activeBorder': colors.primary,
    'panelTitle.activeForeground': colors.foreground,
    'panelTitle.inactiveForeground': colors.mutedForeground,

    // ── Tree indent guides ───────────────────────────────────────
    'tree.indentGuidesStroke': withOpacity(colors.border, 0.7),
    'tree.tableColumnsBorder': withOpacity(colors.border, 0.5),

    // ── Welcome page ─────────────────────────────────────────────
    'welcomePage.tileBackground': elevated,
    'welcomePage.tileBorder': colors.border,
    'welcomePage.progress.foreground': colors.primary,

    // ── Settings editor ──────────────────────────────────────────
    'settings.headerForeground': colors.foreground,
    'settings.modifiedItemIndicator': colors.primary,
    'settings.focusedRowBackground': withOpacity(colors.primary, 0.06),
    'settings.rowHoverBackground': withOpacity(colors.foreground, 0.03),

    // ── Notebook (Jupyter) ───────────────────────────────────────
    'notebook.cellBorderColor': colors.border,
    'notebook.focusedCellBorder': colors.primary,

    // ── Extension button ─────────────────────────────────────────
    'extensionButton.prominentBackground': colors.primary,
    'extensionButton.prominentForeground': colors.primaryForeground,
    'extensionButton.prominentHoverBackground': adjustLightness(colors.primary, isLight ? -0.03 : 0.03),

    // ── Toolbar ──────────────────────────────────────────────────
    'toolbar.hoverBackground': withOpacity(colors.foreground, 0.08),

    // ── Menu ─────────────────────────────────────────────────────
    'menu.background': elevated,
    'menu.foreground': colors.foreground,
    'menu.selectionBackground': withOpacity(colors.primary, 0.15),
    'menu.selectionForeground': colors.foreground,
    'menu.separatorBackground': colors.border,
    'menu.border': colors.border,

    // ── Command center ───────────────────────────────────────────
    'commandCenter.foreground': colors.mutedForeground,
    'commandCenter.background': colors.background,
    'commandCenter.border': colors.border,
    'commandCenter.activeBackground': withOpacity(colors.primary, 0.08),
    'commandCenter.activeForeground': colors.foreground,

    // ── Banner ───────────────────────────────────────────────────
    'banner.background': withOpacity(colors.primary, 0.15),
    'banner.foreground': colors.foreground,

    // ── Lightbulb ────────────────────────────────────────────────
    'editorLightBulb.foreground': colors.warning,
    'editorLightBulbAutoFix.foreground': colors.primary,

    // ── Diff ─────────────────────────────────────────────────────
    'diffEditor.insertedTextBackground': withOpacity(colors.success, 0.12),
    'diffEditor.removedTextBackground': withOpacity(colors.destructive, 0.12),
    'diffEditor.insertedLineBackground': withOpacity(colors.success, 0.08),
    'diffEditor.removedLineBackground': withOpacity(colors.destructive, 0.08),

    // ── Merge conflict ───────────────────────────────────────────
    'merge.currentHeaderBackground': withOpacity(colors.success, 0.25),
    'merge.incomingHeaderBackground': withOpacity(colors.info, 0.25),

    // ── Minimap ──────────────────────────────────────────────────
    'minimap.findMatchHighlight': withOpacity(colors.warning, 0.5),
    'minimap.selectionHighlight': withOpacity(colors.primary, 0.3),
    'minimap.errorHighlight': colors.destructive,
    'minimap.warningHighlight': colors.warning,

    // ── Scrollbar ────────────────────────────────────────────────
    'scrollbarSlider.background': withOpacity(colors.mutedForeground, 0.2),
    'scrollbarSlider.hoverBackground': withOpacity(colors.mutedForeground, 0.35),
    'scrollbarSlider.activeBackground': withOpacity(colors.mutedForeground, 0.5),

    // ── Bracket pair colorization ────────────────────────────────
    'editorBracketHighlight.foreground1': colors.primary,
    'editorBracketHighlight.foreground2': colors.info,
    'editorBracketHighlight.foreground3': colors.warning,
    'editorBracketHighlight.foreground4': colors.success,
    'editorBracketHighlight.foreground5': colors.destructive,
    'editorBracketHighlight.foreground6': colors.mutedForeground,
    'editorBracketMatch.background': withOpacity(colors.primary, 0.15),
    'editorBracketMatch.border': withOpacity(colors.primary, 0.5),

    // ── Indent guides ────────────────────────────────────────────
    'editorIndentGuide.background': withOpacity(colors.border, 0.5),
    'editorIndentGuide.activeBackground': colors.border,

    // ── Ruler ────────────────────────────────────────────────────
    'editorRuler.foreground': withOpacity(colors.border, 0.5),

    // ── Whitespace ───────────────────────────────────────────────
    'editorWhitespace.foreground': withOpacity(colors.mutedForeground, 0.25),

    // ── Terminal ANSI colors ─────────────────────────────────────
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
