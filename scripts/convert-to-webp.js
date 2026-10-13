import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const publicDir = path.join(__dirname, '..', 'public')

const targets = [
  'logo-Omni-Sistema-peq.jpg',
  'logo-Saude-peq.jpg',
  'logo-RPRT.jpg',
  'logo-QWork.png',
  'logo-lwos.png',
  'LOGO-ACESSO.png',
  'logo.png',
  'omni-saude/hero_app_mockup.jpg',
  'omni-saude/doctor_patient_care.jpg',
]

async function convertAll() {
  console.log('Convertendo imagens para WebP otimizado...')
  let totalSaved = 0

  for (const file of targets) {
    const srcPath = path.join(publicDir, file)
    if (!fs.existsSync(srcPath)) {
      console.warn(`Arquivo não encontrado: ${file}`)
      continue
    }

    const ext = path.extname(file)
    const baseName = path.basename(file, ext)
    const outName = `${baseName}.webp`
    const outPath = path.join(path.dirname(srcPath), outName)

    const origStats = fs.statSync(srcPath)
    await sharp(srcPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outPath)

    const newStats = fs.statSync(outPath)
    const saved = origStats.size - newStats.size
    totalSaved += saved

    console.log(
      `✓ ${file} (${Math.round(origStats.size / 1024)} KB) -> ${outName} (${Math.round(newStats.size / 1024)} KB) [-${Math.round((saved / origStats.size) * 100)}%]`
    )
  }

  console.log(`\nEconomia total de banda: ${Math.round(totalSaved / 1024)} KB`)
}

convertAll().catch(console.error)
