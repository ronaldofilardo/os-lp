import type { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer } from '@/common'
import { SITE } from '@/config/site'
import { JsonLd } from '@/common/JsonLd'
import { buildWebPageSchema, buildBreadcrumbSchema } from '@/lib/schemas'

const TITLE = `Sobre a Omni Sistemas — 30 Anos de Engenharia de Software`
const DESCRIPTION =
  'Conheça a história da Omni Sistemas: fundada a partir de projetos iniciados em 1996 por Ronaldo Domingues Filardo, combinando rigor acadêmico, norma ASD-STE100 e sistemas de alta escala.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/about' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.domain}/about`,
    type: 'website',
  },
}

export default function AboutPage(): React.JSX.Element {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen flex flex-col font-sans antialiased">
      <JsonLd
        data={buildWebPageSchema({
          title: TITLE,
          description: DESCRIPTION,
          path: '/about',
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Página Inicial', path: '/' },
          { name: 'Sobre a Empresa', path: '/about' },
        ])}
      />
      <Header theme="light" />

      <main className="flex-1 max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-28 pb-16">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-sky-600 transition-colors">Início</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Sobre</span>
        </nav>

        <header className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-semibold mb-4">
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px]">verified</span>
            <span>Desde 1996 • Três Décadas de Engenharia Contínua</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
            Sobre a Omni Sistemas
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Uma softhouse boutique de engenharia de software preventiva, especializada em plataformas sob medida,
            automação profunda de APIs e modernização segura de legados corporativos.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <section className="lg:col-span-8 flex flex-col gap-8 text-slate-700 leading-relaxed text-base">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">1. Origem e Fundação em 1996</h2>
              <p className="mb-4">
                A gênese da Omni Sistemas ocorreu em 1996, quando seu fundador, Ronaldo Domingues Filardo, desenvolveu o software pioneiro ANTHROPO em VBA para Microsoft Excel, acumulando mais de 50.000 avaliações clínicas e físicas processadas. Esse projeto inicial estabeleceu um princípio inegociável mantido por 30 anos: o código de missão crítica deve operar com modelos matemáticos determinísticos e validações formais.
              </p>
              <p>
                Ao longo de três décadas ininterruptas de evolução tecnológica, a softhouse atravessou todos os grandes ciclos de transformação da computação comercial — desde planilhas programáveis nos anos 90, transição para a web corporativa nos anos 2000, arquiteturas distribuídas e blockchain, até a atualidade com agentes de inteligência artificial.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">2. Liderança Técnica e Rigor Científico</h2>
              <p className="mb-4">
                A liderança da empresa é exercida diretamente por <strong>Ronaldo Domingues Filardo</strong>, Arquiteto Sênior de Software Corporativo. Diferente de consultorias empíricas, a fundamentação técnica da Omni Sistemas advém de uma sólida carreira acadêmica:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Ex-Professor Universitário da PUCPR:</strong> Atuação por anos lecionando Metodologia de Pesquisa Científica em cursos de graduação e especialização.</li>
                <li><strong>Autor de Livro Didático Acadêmico:</strong> Obra <em>&ldquo;Metodologia de Pesquisa Científica: fundamentos, princípios e processos&rdquo;</em>, publicada nacionalmente pela Editora Intersaberes.</li>
                <li><strong>Pesquisador de Doutoramento em Portugal:</strong> Investigação em ambiente universitário europeu sobre validação de invariantes e processos formais de estruturação do conhecimento.</li>
              </ul>
              <p>
                Essa matriz científica é a origem da <strong>metodologia STE-DEV</strong>, framework proprietário que transpõe a norma aeroespacial ASD-STE100 para o código-fonte, impondo módulos de até 100 linhas, tipagem forte sem <code>any</code> e isolamento estrito entre persistência e visualização.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0A192F] mb-4">3. Plataformas em Produção e Diferenciais</h2>
              <p className="mb-4">
                A Omni Sistemas mantém softwares complexos em produção ativa em setores regulados, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Omni Saúde:</strong> Plataforma de emissão e gestão de laudos laboratoriais e médicos com conformidade estrita à LGPD.</li>
                <li><strong>QWork:</strong> Sistema operacional de gestão de tarefas e equipes operacionais.</li>
                <li><strong>LWOS:</strong> Plataforma corporativa de gestão de patrimônio e investimentos.</li>
                <li><strong>Integrações Asaas &amp; Bancárias:</strong> Automação completa do ciclo de cobrança via Pix, boleto e conciliação em tempo real.</li>
              </ul>
            </div>
          </section>

          <aside className="lg:col-span-4 flex flex-col gap-6">
            <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-sky-400">
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[20px]">business</span>
                Ficha Cadastral Canônica
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-slate-400 text-xs">Razão Social</dt>
                  <dd className="font-medium text-slate-100">BE SMART LTDA</dd>
                </div>
                <div>
                  <dt className="text-slate-400 text-xs">CNPJ</dt>
                  <dd className="font-medium text-slate-100">55.405.487/0001-84</dd>
                </div>
                <div>
                  <dt className="text-slate-400 text-xs">Fundação</dt>
                  <dd className="font-medium text-slate-100">1996 (30 anos de mercado)</dd>
                </div>
                <div>
                  <dt className="text-slate-400 text-xs">Sede</dt>
                  <dd className="font-medium text-slate-100">Curitiba, Paraná, Brasil</dd>
                </div>
                <div>
                  <dt className="text-slate-400 text-xs">Atendimento</dt>
                  <dd className="font-medium text-slate-100">Nacional Remoto + In Loco</dd>
                </div>
              </dl>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl">
              <h3 className="text-base font-bold text-emerald-950 mb-2">Atendimento Direto</h3>
              <p className="text-xs text-slate-700 leading-relaxed mb-4">
                Sem vendedores ou camadas burocráticas: seu projeto é desenhado diretamente com quem projeta e implementa a arquitetura.
              </p>
              <Link
                href="/contact"
                className="skeuo-button-emerald w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold text-sm shadow-sm"
              >
                <span>Falar com o Arquiteto</span>
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <Footer theme="light" />
    </div>
  )
}

