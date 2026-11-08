import { Reveal } from '@/motion/Reveal'

const COMMERCIAL_KEY_TAKEAWAYS: readonly string[] = [
  'Sistemas Web Sob Medida: plataformas corporativas desenhadas especificamente para o fluxo da sua operação, superando as limitações de softwares de prateleira.',
  'Automação e Integrações de API: conexão direta com gateways financeiros (como Asaas para Pix, boleto e cartão), bancos e ERPs, eliminando conciliações manuais.',
  'Modernização de Legados com Risco Zero: transição progressiva com Strangler Pattern e testes de caracterização sem paralisar a operação ou o faturamento.',
  'Engenharia Sênior e LGPD: atendimento direto com arquiteto com 30 anos de mercado, sem intermediários, e proteção de dados concebida desde o primeiro dia.',
] as const

export function KeyTakeawaysSection(): React.JSX.Element {
  return (
    <aside
      aria-labelledby="home-key-takeaways-heading"
      className="w-full bg-[#f1f5f9] border-b border-slate-200 py-6"
    >
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal>
          <div className="p-5 md:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-slate-100">
              <span
                aria-hidden="true"
                translate="no"
                className="material-symbols-outlined text-sky-700 text-[22px]"
              >
                summarize
              </span>
              <h2
                id="home-key-takeaways-heading"
                className="text-base md:text-lg font-bold text-slate-900 tracking-tight"
              >
                Principais Pontos — Resumo Executivo
              </h2>
              <span className="text-xs font-semibold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200 uppercase tracking-wide ml-auto">
                Key Takeaways
              </span>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5 list-none m-0 p-0 text-sm text-slate-700">
              {COMMERCIAL_KEY_TAKEAWAYS.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    translate="no"
                    className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0 mt-0.5"
                  >
                    check_circle
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </aside>
  )
}

