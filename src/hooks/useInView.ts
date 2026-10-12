import { useEffect, useRef, useState, type RefObject } from 'react'

interface UseInViewOptions {
  readonly once?: boolean
  readonly rootMargin?: string
  readonly threshold?: number
}

export function useInView<T extends Element>(
  options: UseInViewOptions = {},
): readonly [RefObject<T | null>, boolean] {
  const { once = false, rootMargin = '0px', threshold = 0.12 } = options
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting && once) observer.disconnect()
      },
      { rootMargin, threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [once, rootMargin, threshold])

  return [ref, isInView]
}
