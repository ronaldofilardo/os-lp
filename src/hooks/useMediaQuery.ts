import { useCallback, useSyncExternalStore } from 'react'

export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void): (() => void) => {
      const media = window.matchMedia(query)
      media.addEventListener('change', onChange)
      return () => media.removeEventListener('change', onChange)
    },
    [query],
  )
  const readClientValue = (): boolean => window.matchMedia(query).matches
  const readServerValue = (): boolean => false

  return useSyncExternalStore(subscribe, readClientValue, readServerValue)
}
