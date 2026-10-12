import { Counter } from '@/motion/Counter'
import { Reveal } from '@/motion/Reveal'

const STATS = [
  { target: 30, prefix: '', suffix: ' anos', label: 'de trajetória em software' },
  { target: 100, prefix: '< ', suffix: '', label: 'linhas por arquivo' },
  { target: 0, prefix: '', suffix: ' any', label: 'no TypeScript' },
  { target: 5, prefix: '', suffix: ' dias', label: 'para entregar a auditoria' },
] as const

export function StatsStrip(): React.JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl" aria-label="Números da metodologia">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delayMs={index * 100}>
              <div className="p-space-lg rounded-lg bg-surface-container-low border border-outline-variant/40 text-center">
                <div className="text-headline-lg md:text-display-lg text-primary tabular-nums">
                  <Counter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="font-code-sm text-code-sm text-on-surface-variant mt-1">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
