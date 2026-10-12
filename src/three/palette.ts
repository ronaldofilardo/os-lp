import { tokens } from '@/tokens'

export const PALETTE = {
  primary: tokens.colors['primary-container'],
  primarySoft: tokens.colors.primary,
  secondary: tokens.colors.secondary,
  error: tokens.colors.error,
  outline: tokens.colors.outline,
  outlineVariant: tokens.colors['outline-variant'],
  surfaceLow: tokens.colors['surface-container-low'],
  surfaceHigh: tokens.colors['surface-container-high'],
} as const
