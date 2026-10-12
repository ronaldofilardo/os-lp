export function fitFactor(width: number, height: number, designAspect: number): number {
  const aspect = width / Math.max(height, 1)
  return Math.max(1, designAspect / aspect)
}
