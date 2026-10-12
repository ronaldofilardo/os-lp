import type { NextConfig } from 'next'

const PRIVATE_172_RANGE = Array.from({ length: 16 }, (_, index) => `172.${16 + index}.*.*`)

const extraOrigins = (process.env.ALLOWED_DEV_ORIGINS ?? '')
  .split(',')
  .map((origin) => origin.trim())
  .filter((origin) => origin.length > 0)

export const DEV_ORIGINS: readonly string[] = [
  '192.168.*.*',
  '10.*.*.*',
  ...PRIVATE_172_RANGE,
  '*.local',
  ...extraOrigins,
]

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Só vale em `next dev`: permite abrir o servidor local pelo IP da rede (ex.: celular).
  allowedDevOrigins: [...DEV_ORIGINS],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
