# Dilmune Theme

A warm, terracotta-accented theme family for Visual Studio Code. 10 carefully crafted variants spanning light, dim, and dark modes — designed for long coding sessions with clear visual hierarchy.

## Theme Variants

### Light

| Theme | Description |
|-------|-------------|
| **Dilmune Light** | Warm cream background with high readability — great for daytime coding |
| **Dilmune Light Muted** | Softer contrast for a gentler, paper-like feel |
| **Dilmune Light High Contrast** | Maximum contrast on light background for accessibility |

### Dim

| Theme | Description |
|-------|-------------|
| **Dilmune Dim** | Warm mid-tone background — balanced between light and dark |
| **Dilmune Dim Muted** | Subdued palette for reduced visual intensity |
| **Dilmune Dim High Contrast** | Sharp contrast on a mid-tone surface |

### Dark

| Theme | Description |
|-------|-------------|
| **Dilmune Dark** | Deep warm background with terracotta accents — the flagship theme |
| **Dilmune Dark Soft** | Slightly lighter dark background with gentler colors |
| **Dilmune Dark Muted** | Desaturated dark palette for minimal distraction |
| **Dilmune Dark High Contrast** | Maximum contrast on dark background for accessibility |

## Screenshots

![Dilmune Dark](screenshots/dark.png)
![Dilmune Dark Soft](screenshots/dark-soft.png)
![Dilmune Light](screenshots/light.png)
![Dilmune Dim](screenshots/dim.png)

## Installation

### From the Marketplace

1. Open VS Code
2. Go to **Extensions** (`Cmd+Shift+X` / `Ctrl+Shift+X`)
3. Search for **"Dilmune Theme"**
4. Click **Install**

### Manual Install (VSIX)

```bash
code --install-extension dilmune-theme-1.0.0.vsix
```

## How to Switch Themes

- **macOS:** `Cmd+K Cmd+T`
- **Windows / Linux:** `Ctrl+K Ctrl+T`

Then select any **Dilmune** variant from the list.

## Recommended Settings

For the best experience, add these to your `settings.json`:

```json
{
  "editor.fontFamily": "JetBrains Mono, Fira Code, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.bracketPairColorization.enabled": true
}
```

## Language Support

Syntax highlighting has been optimized for:

Go, TypeScript, JavaScript, React (JSX/TSX), Python, Rust, Java, C#, C/C++, PHP, SQL, CSS, JSON, YAML, and Markdown.

All languages supported by VS Code will work — the above have been individually tuned and tested.

## Credits

Inspired by the [Dilmune Cloud](https://dilmune.com) design system. Color palette derived from terracotta, warm stone, and desert sand tones.

## License

[MIT](LICENSE)
