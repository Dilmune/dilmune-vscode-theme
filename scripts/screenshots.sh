#!/bin/bash
# Screenshot script for Dilmune Theme
# Switches themes automatically — you just press Space/Enter after each one renders

SETTINGS="$HOME/Library/Application Support/Code/User/settings.json"
SCREENSHOTS="$HOME/Documents/GitHub/dilmune-vscode-theme/screenshots"
CODE="/Applications/Visual Studio Code.app/Contents/Resources/app/bin/code"

themes=(
  "Dilmune Dim:dim"
  "Dilmune Dim Warm:dim-warm"
  "Dilmune Dim Deep:dim-deep"
  "Dilmune Dark:dark"
  "Dilmune Dark Soft:dark-soft"
  "Dilmune Light:light"
)

mkdir -p "$SCREENSHOTS"

# Open sample.tsx
"$CODE" "$HOME/Documents/GitHub/dilmune-vscode-theme/samples/sample.tsx"
sleep 2

echo ""
echo "=== Dilmune Theme Screenshot Tool ==="
echo ""
echo "Make sure VS Code is visible with sample.tsx open."
echo "The script will switch themes. After each switch:"
echo "  1. Wait for VS Code to update (~2 seconds)"
echo "  2. Click the VS Code window when prompted"
echo ""

for entry in "${themes[@]}"; do
  IFS=':' read -r theme_name file_name <<< "$entry"

  # Switch theme
  python3 -c "
import json
with open('$SETTINGS', 'r') as f:
    s = json.load(f)
s['workbench.colorTheme'] = '$theme_name'
with open('$SETTINGS', 'w') as f:
    json.dump(s, f, indent=4)
"

  echo "Theme switched to: $theme_name"
  sleep 3
  echo "  Click the VS Code window to capture it..."
  screencapture -o -W "$SCREENSHOTS/$file_name.png"
  echo "  Saved: $file_name.png"
  echo ""
done

# Restore flagship theme
python3 -c "
import json
with open('$SETTINGS', 'r') as f:
    s = json.load(f)
s['workbench.colorTheme'] = 'Dilmune Dim'
with open('$SETTINGS', 'w') as f:
    json.dump(s, f, indent=4)
"

echo "Done! Screenshots saved to: $SCREENSHOTS/"
echo ""
ls -la "$SCREENSHOTS/"
