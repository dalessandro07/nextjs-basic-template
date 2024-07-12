const fs = require('fs')
const path = require('path')

const packageJson = require('../../../package.json')
const version = packageJson.version
const content = `export const APP_VERSION = '${version}'\n`

const filePath = path.join(__dirname, '../constants/version.ts')

if (!fs.existsSync(path.dirname(filePath))) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
}

fs.writeFileSync(filePath, content, 'utf8')
console.log(`Versión escrita en: ${filePath}`)
