# Changelog

## 1.2.0

- Quality upgrade
- **15 themes** across 4 modes — Light, Dim, Dusk, Dark
- Every mode ships **Default + Linen** (softened) **+ Stone** (muted, reduced-chroma)
- Light, Dusk, and Dark add a **High Contrast** variant; Dim has none — its mid-tone parchment background can't keep the warm syntax palette perceptually separable at high contrast
- **358 editor color keys** per theme (**360** for the High Contrast variants)
- **81 TextMate token rules** and **49 semantic token mappings**
- Build-time **WCAG AA contrast enforcement** — syntax-vs-background at 4.5:1, key UI pairs, and ANSI terminal colors
- **OKLch delta-E collision detection** — minimum 5.0 between syntax tokens
- Build fails if any contrast or collision check fails
- Strict-TypeScript clean with a dedicated typecheck step, plus packaging hygiene improvements

## 1.1.3

- Fix: high-contrast syntax now uses brighter text on dark backgrounds and darker text on light

## 1.1.2

- Fix: proper high contrast with `contrastBorder` and stronger selection highlighting

## 1.1.1

- Fix: high-contrast borders and muted-foreground visibility

## 1.1.0

- Quality audit, variant cull, and marketplace polish
- Reworked the variant lineup after a contrast/quality audit
- Tightened marketplace metadata

## 1.0.0

- 12 theme variants across 4 distinct modes
- **Light** (L=0.92): warm cream — Default, Muted, High Contrast
- **Dim** (L=0.82): mid-tone warm parchment with dark text — Default, Muted, High Contrast
- **Dusk** (L=0.35): warm dark brown, candlelit — Default, Muted, High Contrast
- **Dark** (L=0.18): deep blue-black — Default, Soft, High Contrast
- Brand primary `#d13e36` derived from the Dilmune logo
- OKLch color space for perceptually uniform colors
- Dim and Dusk share portal dim DNA — hue 78, chroma 0.028
- 314 VS Code editor color keys per theme
- 58 TextMate token rules with language-specific overrides
- 35 semantic token mappings with modifier support
- Syntax optimized for Go, TypeScript, TSX/JSX, Python, Rust, Java, C#, C/C++, PHP, SQL, CSS, YAML, JSON, Markdown, Shell, TOML
- Terminal ANSI color palette
- Custom markdown preview styling
- Full editor chrome: sticky scroll, inlay hints, suggest widget, peek view, menus, command center
