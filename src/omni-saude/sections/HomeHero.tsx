import { PageHero } from '@/omni-saude/components/PageHero'
import { HOME_HERO } from '@/omni-saude/data/home'

function HeroBadge(): React.JSX.Element {
  return (
    <span className="absolute -top-4 -left-4 skeuo-chip rounded-2xl px-4 py-3 flex items-center gap-space-xs shadow-lg">
      <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[20px] text-emerald-600">shield_lock</span>
      <span className="flex flex-col leading-tight">
        <span className="font-label-caps text-label-caps uppercase tracking-wider text-slate-900">
          {HOME_HERO.badge.label}
        </span>
        <span className="text-body-sm text-slate-600">{HOME_HERO.badge.text}</span>
      </span>
    </span>
  )
}

export function HomeHero(): React.JSX.Element {
  return (
    <PageHero
      eyebrow={HOME_HERO.eyebrow}
      title={HOME_HERO.titleLead}
      titleHighlight={HOME_HERO.titleHighlight}
      description={HOME_HERO.description}
      checks={HOME_HERO.checks}
      primaryCta={HOME_HERO.primaryCta}
      secondaryCta={HOME_HERO.secondaryCta}
    >
      <div className="relative mx-auto max-w-md">
        <HeroBadge />
        <img
          src={HOME_HERO.image.src}
          alt={HOME_HERO.image.alt}
          width={HOME_HERO.image.width}
          height={HOME_HERO.image.height}
          decoding="async"
          className="w-full h-auto rounded-3xl border border-slate-200 shadow-xl"
        />
        <p className="text-body-sm text-slate-500 text-center mt-space-sm">{HOME_HERO.socialProof}</p>
      </div>
    </PageHero>
  )
}
