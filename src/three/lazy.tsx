'use client'

import dynamic from 'next/dynamic'
import { SceneFallback } from './SceneFallback'

export const LazyHeroCore = dynamic(
  () => import('./HeroCoreScene').then((module) => module.HeroCoreScene),
  { ssr: false, loading: () => <SceneFallback /> },
)

export const LazyPillars = dynamic(
  () => import('./PillarsScene').then((module) => module.PillarsScene),
  { ssr: false, loading: () => <SceneFallback /> },
)

export const LazyStrangler = dynamic(
  () => import('./StranglerScene').then((module) => module.StranglerScene),
  { ssr: false, loading: () => <SceneFallback /> },
)

export const LazyHeroBackdrop = dynamic(
  () => import('./HeroBackdropScene').then((module) => module.HeroBackdropScene),
  { ssr: false, loading: () => null },
)
