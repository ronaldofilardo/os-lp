import type { Config } from 'tailwindcss'
import { tokens } from './src/tokens'

export default {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.03em', fontWeight: '700', fontFamily: 'var(--font-inter)' }],
        'display-lg-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700', fontFamily: 'var(--font-inter)' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '600', fontFamily: 'var(--font-inter)' }],
        'headline-lg-mobile': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600', fontFamily: 'var(--font-inter)' }],
        'headline-md': ['24px', { lineHeight: '32px', letterSpacing: '-0.015em', fontWeight: '600', fontFamily: 'var(--font-inter)' }],
        'headline-sm': ['18px', { lineHeight: '26px', letterSpacing: '-0.01em', fontWeight: '600', fontFamily: 'var(--font-inter)' }],
        'body-lg': ['16px', { lineHeight: '26px', fontWeight: '400', fontFamily: 'var(--font-inter)' }],
        'body-md': ['14px', { lineHeight: '22px', fontWeight: '400', fontFamily: 'var(--font-inter)' }],
        'body-sm': ['12px', { lineHeight: '18px', fontWeight: '400', fontFamily: 'var(--font-inter)' }],
        'code-lg': ['14px', { lineHeight: '22px', letterSpacing: '-0.01em', fontWeight: '500', fontFamily: 'var(--font-jetbrains-mono)' }],
        'code-md': ['13px', { lineHeight: '20px', letterSpacing: '0em', fontWeight: '400', fontFamily: 'var(--font-jetbrains-mono)' }],
        'code-sm': ['11px', { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '400', fontFamily: 'var(--font-jetbrains-mono)' }],
        'label-caps': ['10px', { lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '600', fontFamily: 'var(--font-jetbrains-mono)' }],
        'icon-sm': ['12px', { lineHeight: '12px' }],
        'icon-md': ['16px', { lineHeight: '16px' }],
        'icon-lg': ['20px', { lineHeight: '20px' }],
        'icon-xl': ['32px', { lineHeight: '32px' }],
      },
      borderRadius: tokens.rounded,
      spacing: tokens.spacing,
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
} satisfies Config
