export const sectorColorMap = {
  primary: 'bg-primary/10 text-primary border-primary/30',
  secondary: 'bg-secondary/10 text-secondary border-secondary/30',
  tertiary: 'bg-tertiary-container/20 text-on-surface border-tertiary-container/40',
} as const

export const sectorColorMapLight = {
  primary: 'bg-sky-50 text-sky-700 border-sky-200',
  secondary: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  tertiary: 'bg-slate-100 text-slate-700 border-slate-200',
} as const

export const statusDotMap = {
  production: 'bg-secondary',
  'in-dev': 'bg-tertiary-container animate-pulse',
} as const

export const statusDotMapLight = {
  production: 'bg-emerald-500',
  'in-dev': 'bg-amber-400 animate-pulse',
} as const
