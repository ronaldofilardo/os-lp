interface KeyTakeawaysProps {
  readonly points: readonly string[]
}

export function KeyTakeaways({ points }: KeyTakeawaysProps): React.JSX.Element {
  return (
    <aside
      aria-labelledby="key-takeaways-heading"
      className="not-prose my-space-lg p-space-lg rounded-xl bg-surface-container border border-primary/20 shadow-lg"
    >
      <div className="flex items-center gap-space-xs mb-space-sm border-b border-outline-variant/30 pb-space-sm">
        <span className="material-symbols-outlined text-primary text-icon-lg">summarize</span>
        <h2
          id="key-takeaways-heading"
          className="font-headline-sm text-headline-sm text-on-surface font-semibold"
        >
          Principais Pontos
        </h2>
        <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/30 uppercase tracking-wider ml-auto">
          Key Takeaways
        </span>
      </div>
      <ul className="flex flex-col gap-space-xs list-disc pl-space-md font-body-md text-body-md text-on-surface-variant marker:text-primary">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </aside>
  )
}
