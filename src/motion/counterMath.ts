export function easeOutCubic(progress: number): number {
  return 1 - Math.pow(1 - progress, 3)
}

export function formatCount(value: number, decimals: number): string {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}
