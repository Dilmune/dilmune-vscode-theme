# Dilmune Theme

Warm, earthy color themes for VS Code. Terracotta, sage, and verdigris on backgrounds that run from cream parchment to candlelit dusk to blue-black night.

Every color is generated in OKLch and checked for WCAG AA contrast at build time. The build fails if any text drops below the contrast bar or any two syntax colors land too close together, so readability is enforced rather than eyeballed.

Named after the ancient Dilmune civilization.

## Screenshots

### Dilmune Dusk (flagship)
![Dilmune Dusk](screenshots/dusk.png)

### Dilmune Light
![Dilmune Light](screenshots/light.png)

### Dilmune Dark
![Dilmune Dark](screenshots/dark.png)

### Dilmune Dim
![Dilmune Dim](screenshots/dim.png)

## Themes

Four modes, one for each kind of light:

| Mode | Type | Background |
|------|------|------------|
| **Dusk** | Dark | Warm candlelit brown. The flagship. |
| **Light** | Light | Warm cream parchment. |
| **Dark** | Dark | Deep blue-black with vivid syntax. |
| **Dim** | Light | Mid-tone parchment, between light and dark. |

Each mode ships in three flavors, plus a high-contrast build where the contrast math allows it:

- **Default**: the tuned baseline.
- **Linen**: lifted background, slightly softened.
- **Stone**: lower chroma, a calmer surface.
- **High Contrast**: stronger separation and borders. Available for Light, Dusk, and Dark.

Dim has no high-contrast build. Its mid-tone background cannot push the syntax colors far enough apart to clear the contrast bar, and shipping one anyway would mean lowering the standard. Fifteen themes in total.

## Install

1. Open Extensions (`Cmd+Shift+X` or `Ctrl+Shift+X`).
2. Search for "Dilmune Theme".
3. Install it, then press `Cmd+K Cmd+T` to pick a variant.

To install a build by hand, download the `.vsix` from [Releases](https://github.com/Dilmune/dilmune-vscode-theme/releases) and run:

```bash
code --install-extension dilmune-theme-1.2.1.vsix
```

## Recommended Setup

```json
{
  "editor.fontFamily": "'JetBrains Mono', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.smoothScrolling": true,
  "editor.minimap.enabled": false,
  "editor.stickyScroll.enabled": true
}
```

[JetBrains Mono](https://www.jetbrains.com/lp/mono/) is the recommended font. [Fira Code](https://github.com/tonsky/FiraCode) and [Cascadia Code](https://github.com/microsoft/cascadia-code) also work well.

## Language Support

Tuned and tested by hand for Go, TypeScript, TSX/JSX, Python, Rust, Java, C#, C and C++, PHP, SQL, CSS, JSON, YAML, and Markdown. Every other language VS Code supports works through its default grammars.

## Color Philosophy

Every color is defined in OKLch, a color space where equal numeric steps look like equal visual steps. That turns three things from manual guesswork into mechanical guarantees:

- Contrast is enforced at build time, at a WCAG AA minimum.
- No two syntax colors collide. The build measures perceptual distance and fails if any pair sits too close.
- Variants are generated, not hand-painted, so they stay consistent across all fifteen themes.

The palette: terracotta for keywords, sage for strings, verdigris for functions, clay-rose for types, amber for constants, fossil for decorators, dune for operators. All of it drawn from warm earth tones, named for the ancient Dilmune civilization.

## License

[MIT](LICENSE)
