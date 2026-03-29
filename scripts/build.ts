import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildTheme, themeConfigs } from '../src/index'
import { validateTheme, printReport, markdownReport, type ValidationReport } from '../src/validation'
import { syntaxColors } from '../src/colors/syntax'
import { baseColors } from '../src/colors/base'
import { applyBaseVariant, applySyntaxVariant } from '../src/colors/variants'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const themesDir = join(root, 'themes')
const isReport = process.argv.includes('--report')

mkdirSync(themesDir, { recursive: true })

const reports: ValidationReport[] = []
let hasFailures = false

for (const config of themeConfigs) {
  const theme = buildTheme(config)
  const outPath = join(themesDir, `${config.fileName}.json`)
  writeFileSync(outPath, JSON.stringify(theme, null, 2) + '\n')
  console.log(`\nGenerated: ${config.fileName}.json`)

  // Validate: get the resolved syntax colors and background for this config
  const base = applyBaseVariant(baseColors[config.mode], config.variant)
  const syntax = applySyntaxVariant(syntaxColors[config.mode], config.variant)

  const report = validateTheme(config.name, syntax, base.background)
  reports.push(report)
  printReport(report)

  if (!report.contrastPass || !report.collisionPass) {
    hasFailures = true
  }
}

console.log(`\nDone! Generated ${themeConfigs.length} themes.`)

if (isReport) {
  const reportPath = join(root, 'contrast-report.md')
  writeFileSync(reportPath, markdownReport(reports))
  console.log(`\nFull report written to: contrast-report.md`)
}

if (hasFailures) {
  console.log('\n\x1b[31mValidation failures detected. See above for details.\x1b[0m')
  process.exit(1)
}
