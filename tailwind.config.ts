import type { Config } from 'tailwindcss'
import { tokens } from './src/tokens'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: tokens.colors,
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.03em', fontWeight: '700', fontFamily: 'Inter' }],
        'display-lg-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '700', fontFamily: 'Inter' }],
        'headline-lg': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '600', fontFamily: 'Inter' }],
        'headline-lg-mobile': ['24px', { lineHeight: '32px', letterSpacing: '-0.01em', fontWeight: '600', fontFamily: 'Inter' }],
        'headline-md': ['24px', { lineHeight: '32px', letterSpacing: '-0.015em', fontWeight: '600', fontFamily: 'Inter' }],
        'headline-sm': ['18px', { lineHeight: '26px', letterSpacing: '-0.01em', fontWeight: '600', fontFamily: 'Inter' }],
        'body-lg': ['16px', { lineHeight: '26px', fontWeight: '400', fontFamily: 'Inter' }],
        'body-md': ['14px', { lineHeight: '22px', fontWeight: '400', fontFamily: 'Inter' }],
        'body-sm': ['12px', { lineHeight: '18px', fontWeight: '400', fontFamily: 'Inter' }],
        'code-lg': ['14px', { lineHeight: '22px', letterSpacing: '-0.01em', fontWeight: '500', fontFamily: 'JetBrains Mono' }],
        'code-md': ['13px', { lineHeight: '20px', letterSpacing: '0em', fontWeight: '400', fontFamily: 'JetBrains Mono' }],
        'code-sm': ['11px', { lineHeight: '16px', letterSpacing: '0.02em', fontWeight: '400', fontFamily: 'JetBrains Mono' }],
        'label-caps': ['10px', { lineHeight: '14px', letterSpacing: '0.08em', fontWeight: '600', fontFamily: 'JetBrains Mono' }],
      },
      borderRadius: tokens.rounded,
      spacing: tokens.spacing,
    },
  },
  plugins: [],
} satisfies Config