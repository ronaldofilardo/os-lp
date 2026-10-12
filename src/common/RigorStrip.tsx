import { Reveal } from '@/motion/Reveal'
import { SectionHeader } from './SectionHeader'

export function RigorStrip(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-slate-900" id="rigor">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
            <SectionHeader
              eyebrow="// Rigor Técnico"
              title="Rigor técnico que sustenta resultados de negócio"
              description={
                <>
                  Experiência comprovada desde <strong className="text-white">1997</strong>. Método de
                  engenharia inspirado no rigor aeroespacial, garantindo softwares estáveis que não
                  quebram ao crescer — e que sua equipe consegue operar com tranquilidade.
                </>
              }
              theme="dark"
              tone="primary"
              maxWidthClass="max-w-2xl !mb-0"
            />
            <div className="flex flex-col sm:flex-row lg:flex-col gap-space-sm shrink-0">
              <div className="flex items-center gap-4 px-space-md py-space-sm rounded-xl bg-slate-800 border border-slate-700">
                <span className="text-3xl font-bold text-sky-400 tabular-nums">28+</span>
                <span className="text-sm text-slate-300">anos construindo<br />software no Brasil</span>
              </div>
              <a
                href="/metodologia"
                className="skeuo-button-primary inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-xl text-white font-semibold whitespace-nowrap"
              >
                <span>Conheça nossa metodologia técnica</span>
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
