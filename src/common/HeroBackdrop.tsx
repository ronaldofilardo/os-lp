'use client'

import { useEffect, useState } from 'react'
import { LazyHeroBackdrop } from '@/three/lazy'
import { useMediaQuery } from '@/hooks'

const MOBILE_QUERY = '(max-width: 767px)'
const START_DELAY_MS = 400

export function HeroBackdrop(): React.JSX.Element | null {
  const isMobile = useMediaQuery(MOBILE_QUERY)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsReady(true), START_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  if (isMobile || !isReady) return null

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <LazyHeroBackdrop />
      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/45 to-transparent pointer-events-none" />
    </div>
  )
}
