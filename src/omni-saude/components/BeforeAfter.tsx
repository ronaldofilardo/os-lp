import { Reveal } from '@/motion/Reveal'

interface CompareSide {
  readonly label: string
  readonly description: string
}

interface BeforeAfterProps {
  readonly title?: string
  readonly before: CompareSide
  readonly after: CompareSide
}

const SIDE_CLASS = {
  before: {
    bar: 'bg-rose-300',
    label: 'text-rose-600',
  },
  after: {
    bar: 'bg-emerald-400',
    label: 'text-emerald-600',
  },
} as const

function Side({ side, variant }: { readonly side: CompareSide; readonly variant: 'before' | 'after' }): React.JSX.Element {
  const style = SIDE_CLASS[variant]
  return (
    <article className="skeuo-card h-full rounded-2xl overflow-hidden">
      <div className={`h-1.5 ${style.bar}`} aria-hidden="true" />
      <div className="p-6 md:p-8 flex flex-col gap-space-sm">
        <span className={`font-headline-md text-headline-md font-semibold ${style.label}`}>{side.label}</span>
        <p className="text-body-md text-slate-600 leading-relaxed">{side.description}</p>
      </div>
    </article>
  )
}

export function BeforeAfter({ title, before, after }: BeforeAfterProps): React.JSX.Element {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        {title ? (
          <Reveal className="max-w-2xl mb-space-xl">
            <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold text-slate-900">{title}</h2>
          </Reveal>
        ) : null}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <Reveal className="h-full">
            <Side side={before} variant="before" />
          </Reveal>
          <Reveal delayMs={120} className="h-full">
            <Side side={after} variant="after" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
