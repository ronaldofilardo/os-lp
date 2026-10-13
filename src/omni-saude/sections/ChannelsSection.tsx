import { Reveal } from '@/motion/Reveal'
import {
  CONTATO_CHANNELS,
  CONTATO_CHANNELS_SECTION,
  CONTATO_HOURS,
} from '@/omni-saude/data/contato'

export function ChannelsSection(): React.JSX.Element {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="max-w-2xl mb-space-xl">
          <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold text-slate-900">
            {CONTATO_CHANNELS_SECTION.title}
          </h2>
          <p className="text-body-md text-slate-600 mt-space-xs">{CONTATO_CHANNELS_SECTION.description}</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
          {CONTATO_CHANNELS.map((channel) => (
            <Reveal key={channel.label} className="h-full">
              <a
                href={channel.href}
                className="skeuo-card h-full rounded-2xl p-6 flex items-start gap-space-sm hover:-translate-y-1 transition-transform"
              >
                <span className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                  <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[22px]">{channel.icon}</span>
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-slate-500">
                    {channel.label}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-slate-900">{channel.value}</span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-space-md">
          <p className="flex items-center gap-space-xs text-body-md text-slate-600">
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px] text-emerald-600">schedule</span>
            <span>{CONTATO_HOURS}</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
