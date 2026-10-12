import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const publicDir = path.resolve('public')
const inputLogo = path.join(publicDir, 'logo-Omni-Sistema-peq.webp')

async function makeFavicon() {
  const sizes = [16, 32, 48]
  const pngBuffers = []

  for (const s of sizes) {
    const buf = await sharp(inputLogo)
      .resize(s, s, { fit: 'cover' })
      .png()
      .toBuffer()
    pngBuffers.push({ size: s, buf })
  }

  // Generate valid ICO with PNG payload
  const count = pngBuffers.length
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(count, 4)

  const entries = []
  let offset = 6 + count * 16

  for (const { size, buf } of pngBuffers) {
    const entry = Buffer.alloc(16)
    entry.writeUInt8(size >= 256 ? 0 : size, 0)
    entry.writeUInt8(size >= 256 ? 0 : size, 1)
    entry.writeUInt8(0, 2) // color palette
    entry.writeUInt8(0, 3) // reserved
    entry.writeUInt16LE(1, 4) // color planes
    entry.writeUInt16LE(32, 6) // bits per pixel
    entry.writeUInt32LE(buf.length, 8)
    entry.writeUInt32LE(offset, 12)
    entries.push(entry)
    offset += buf.length
  }

  const icoBuffer = Buffer.concat([
    header,
    ...entries,
    ...pngBuffers.map((p) => p.buf),
  ])

  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer)
  console.log('favicon.ico successfully generated with Omni Sistemas real logo!')

  // Also apple-touch-icon.png 180x180
  await sharp(inputLogo)
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'))
  console.log('apple-touch-icon.png successfully generated!')
}

makeFavicon().catch(console.error)
