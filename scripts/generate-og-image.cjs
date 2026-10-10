/* Gera public/og-image.png (1200x630) — placeholder sólido com a cor de fundo da marca.
   Substituir pelo artefato final com o logo da softhouse quando disponível. */
const zlib = require('node:zlib')
const fs = require('node:fs')
const path = require('node:path')

const WIDTH = 1200
const HEIGHT = 630
// Cor de fundo: surface #0e1321
const BG = [0x0e, 0x13, 0x21, 0xff]
// Faixa decorativa: primary-container #38bdf8
const ACCENT = [0x38, 0xbd, 0xf8, 0xff]

function crc32(buf) {
  let c
  const table = []
  for (let n = 0; n < 256; n++) {
    c = n
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    table[n] = c >>> 0
  }
  let crc = 0xffffffff
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8)
  return (crc ^ 0xffffffff) >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length)
  const typeBuf = Buffer.from(type, 'ascii')
  const crcBuf = Buffer.alloc(4)
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])))
  return Buffer.concat([len, typeBuf, data, crcBuf])
}

// Pixel data com filtro 0 por linha
const rowLen = WIDTH * 4
const raw = Buffer.alloc((rowLen + 1) * HEIGHT)
for (let y = 0; y < HEIGHT; y++) {
  const off = y * (rowLen + 1)
  raw[off] = 0
  for (let x = 0; x < WIDTH; x++) {
    const px = off + 1 + x * 4
    // Faixa de acento horizontal no terço inferior
    if (y >= 520 && y < 536) {
      raw[px] = ACCENT[0]
      raw[px + 1] = ACCENT[1]
      raw[px + 2] = ACCENT[2]
      raw[px + 3] = ACCENT[3]
    } else {
      raw[px] = BG[0]
      raw[px + 1] = BG[1]
      raw[px + 2] = BG[2]
      raw[px + 3] = BG[3]
    }
  }
}

const ihdr = Buffer.alloc(13)
ihdr.writeUInt32BE(WIDTH, 0)
ihdr.writeUInt32BE(HEIGHT, 4)
ihdr[8] = 8 // bit depth
ihdr[9] = 6 // color type RGBA
// compression, filter, interlace = 0

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
])

const out = path.join(__dirname, '..', 'public', 'og-image.png')
fs.writeFileSync(out, png)
console.log(`og-image.png gerado: ${png.length} bytes em ${out}`)
