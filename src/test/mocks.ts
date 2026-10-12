import { act } from '@testing-library/react'
import { vi } from 'vitest'

export class FakeIntersectionObserver implements IntersectionObserver {
  static instances: FakeIntersectionObserver[] = []

  readonly root: Element | Document | null = null
  readonly rootMargin: string = '0px'
  readonly thresholds: readonly number[] = [0]
  isDisconnected = false
  private readonly callback: IntersectionObserverCallback

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback
    FakeIntersectionObserver.instances.push(this)
  }

  observe(): void {}

  unobserve(): void {}

  disconnect(): void {
    this.isDisconnected = true
  }

  takeRecords(): IntersectionObserverEntry[] {
    return []
  }

  trigger(isIntersecting: boolean): void {
    this.callback([{ isIntersecting } as IntersectionObserverEntry], this)
  }
}

export function installIntersectionObserver(): void {
  FakeIntersectionObserver.instances = []
  vi.stubGlobal('IntersectionObserver', FakeIntersectionObserver)
}

export function setIntersecting(isIntersecting: boolean): void {
  act(() => {
    for (const observer of FakeIntersectionObserver.instances) {
      if (!observer.isDisconnected) observer.trigger(isIntersecting)
    }
  })
}

class FakeMediaQueryList extends EventTarget {
  onchange: null = null
  readonly media: string
  matches: boolean

  constructor(media: string, matches: boolean) {
    super()
    this.media = media
    this.matches = matches
  }

  addListener(): void {}

  removeListener(): void {}
}

const matchesByQuery = new Map<string, boolean>()
const listsByQuery = new Map<string, FakeMediaQueryList>()

function resolveList(query: string): FakeMediaQueryList {
  const existing = listsByQuery.get(query)
  if (existing) return existing
  const created = new FakeMediaQueryList(query, matchesByQuery.get(query) ?? false)
  listsByQuery.set(query, created)
  return created
}

export function installMatchMedia(initial: Readonly<Record<string, boolean>> = {}): void {
  matchesByQuery.clear()
  listsByQuery.clear()
  for (const [query, matches] of Object.entries(initial)) matchesByQuery.set(query, matches)
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: (query: string): MediaQueryList => resolveList(query) as unknown as MediaQueryList,
  })
}

export function setMedia(query: string, matches: boolean): void {
  matchesByQuery.set(query, matches)
  const list = listsByQuery.get(query)
  if (!list) return
  act(() => {
    list.matches = matches
    list.dispatchEvent(new Event('change'))
  })
}

export const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'
export const TOUCH_ONLY = '(hover: none)'
