import { SectionHeader } from './SectionHeader'
import { SITE } from '@/config/site'

interface CoveragePoint {
  readonly icon: string
  readonly title: string
  readonly description: string
  readonly tag: string
}

const coveragePoints: readonly CoveragePoint[] = [
  {
    icon: 'public',
    title: 'Operação Nacional Remota',
    description: 'Atendemos clientes em todo o Brasil com desenvolvimento ágil, comunicação direta e entregas continuadas sem barreiras geográficas.',
    tag: 'Todo o Brasil',
  },
  {
    icon: 'location_city',
    title: 'Imersão Presencial In Loco',
    description: 'Para mapeamento de processos críticos, auditoria de legados e alinhamento de diretoria, nosso arquiteto se desloca até a sua empresa.',
    tag: 'Sob Demanda',
  },
  {
    icon: 'verified',
    title: 'Empresa Verificada no Google',
    description: 'Atendimento consultivo registrado e verificado. Credibilidade, histórico técnico desde 1997 e conformidade rigorosa com a LGPD.',
    tag: 'Perfil Oficial',
  },
]

export function CoverageSection(): React.JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-white border-t border-slate-200" id="abrangencia">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Abrangência e Atendimento"
          title="Atendimento Remoto em Todo o Brasil — ou In Loco na Sua Empresa"
          description="Combinamos a agilidade da engenharia remota com a disponibilidade de deslocamento consultivo quando o seu projeto exige alinhamento presencial."
          theme="light"
          tone="secondary"
          maxWidthClass="max-w-3xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md lg:gap-space-lg mb-space-lg">
          {coveragePoints.map((point) => (
            <div
              key={point.title}
              className="skeuo-card flex flex-col p-space-md lg:p-space-lg rounded-2xl border border-slate-200/80 hover:border-sky-300 transition-colors"
            >
              <div className="flex items-center justify-between mb-space-sm">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
                  <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[22px]">
                    {point.icon}
                  </span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {point.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 p-space-md rounded-2xl bg-sky-50/70 border border-sky-100">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-sky-700 text-[24px]">
              handshake
            </span>
            <p className="text-sm font-medium text-slate-800">
              Precisa de um diagnóstico presencial na sede da sua operação?
            </p>
          </div>
          <a
            href={SITE.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skeuo-button-primary inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold text-xs tracking-wide"
          >
            <span>Conversar sobre Visita Técnica</span>
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
