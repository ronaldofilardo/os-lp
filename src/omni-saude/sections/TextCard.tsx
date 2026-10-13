interface TextCardProps {
  readonly title: string
  readonly description: string
}

export function TextCard({ title, description }: TextCardProps): React.JSX.Element {
  return (
    <article className="skeuo-card h-full rounded-2xl p-6 flex flex-col gap-space-sm">
      <h3 className="font-headline-sm text-headline-sm text-slate-900">{title}</h3>
      <p className="text-body-md text-slate-600 leading-relaxed">{description}</p>
    </article>
  )
}
