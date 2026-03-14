import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildTheme, themeConfigs } from '../src/index'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const themesDir = join(root, 'themes')

mkdirSync(themesDir, { recursive: true })

for (const config of themeConfigs) {
  const theme = buildTheme(config)
  const outPath = join(themesDir, `${config.fileName}.json`)
  writeFileSync(outPath, JSON.stringify(theme, null, 2) + '\n')
  console.log(`Generated: ${config.fileName}.json`)
}

console.log(`\nDone! Generated ${themeConfigs.length} themes.`)
