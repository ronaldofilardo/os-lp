import { Reveal } from '@/motion/Reveal'

export interface LocationRow {
  readonly label: string
  readonly value: string
}

interface DataLocationTableProps {
  readonly title: string
  readonly description?: string
  readonly rows: readonly LocationRow[]
}

export function DataLocationTable({
  title,
  description,
  rows,
}: DataLocationTableProps): React.JSX.Element {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-slate-200">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="max-w-2xl mb-space-xl">
          <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold text-slate-900">{title}</h2>
          {description ? (
            <p className="text-body-md text-slate-600 mt-space-xs">{description}</p>
          ) : null}
        </Reveal>
        <Reveal className="max-w-3xl">
          <div className="skeuo-card rounded-2xl overflow-hidden">
            <dl className="m-0">
              {rows.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-space-lg px-6 py-4 ${
                    index < rows.length - 1 ? 'border-b border-slate-100' : ''
                  }`}
                >
                  <dt className="font-label-caps text-label-caps uppercase tracking-wider text-slate-500 min-w-[9rem]">
                    {row.label}
                  </dt>
                  <dd className="m-0 text-body-md font-semibold text-slate-900">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
