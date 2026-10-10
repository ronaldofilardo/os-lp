import { vi } from 'vitest'

vi.mock('react', async () => {
  const actual = await vi.importActual('react')
  return {
    ...actual,
    useState: vi.fn(),
    useEffect: vi.fn(),
    useMemo: vi.fn((fn) => fn()),
    useCallback: vi.fn((fn) => fn),
  }
})