import type { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer } from '@/common'
import { SITE } from '@/config/site'
import { JsonLd } from '@/common/JsonLd'
import { buildWebPageSchema, buildBreadcrumbSchema } from '@/lib/schemas'

const TITLE = `Política de Privacidade & LGPD — Omni Sistemas`
const DESCRIPTION =
  'Conheça a Política de Privacidade e o compromisso de conformidade estrita com a LGPD da Omni Sistemas (BE SMART LTDA).'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.domain}/privacy`,
    type: 'website',
  },
}

export default function PrivacyPage(): React.JSX.Element {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen flex flex-col font-sans antialiased">
      <JsonLd
        data={buildWebPageSchema({
          title: TITLE,
          description: DESCRIPTION,
          path: '/privacy',
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Página Inicial', path: '/' },
          { name: 'Política de Privacidade', path: '/privacy' },
        ])}
      />
      <Header theme="light" />

      <main className="flex-1 max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pt-28 pb-16">
        <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-sky-600 transition-colors">Início</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Privacidade</span>
        </nav>

        <header className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-semibold mb-4">
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px]">shield_lock</span>
            <span>Conformidade Nativa com a Lei Federal nº 13.709/2018 (LGPD)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
            Política de Privacidade e Governança de Dados
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Última atualização: Novembro de 2026. Esta política estabelece o compromisso inegociável da Omni Sistemas
            com a privacidade, o sigilo operacional e a proteção integral dos dados de nossos clientes e parceiros.
          </p>
        </header>

        <article className="max-w-4xl bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm text-slate-700 leading-relaxed space-y-8 text-base">
          <section>
            <h2 className="text-xl font-bold text-[#0A192F] mb-3">1. Controlador dos Dados</h2>
            <p>
              Os dados pessoais tratados neste sítio eletrônico e em nossos canais de atendimento consultivo são controlados pela empresa <strong>BE SMART LTDA</strong> (nome fantasia <strong>Omni Sistemas</strong>), inscrita no CNPJ/MF sob o nº <strong>55.405.487/0001-84</strong>, com sede em Curitiba, Estado do Paraná, Brasil, e e-mail de contato <a href={`mailto:${SITE.email}`} className="text-sky-700 underline">{SITE.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A192F] mb-3">2. Princípios de Engenharia e Coleta Mínima</h2>
            <p className="mb-3">
              A Omni Sistemas adota o princípio de <em>Privacy by Design</em> e <em>Privacy by Default</em>. Coletamos estritamente os dados necessários para o atendimento consultivo e a elaboração de diagnósticos de software:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de Contato Comercial:</strong> Nome completo, e-mail corporativo, número de telefone/WhatsApp e nome da empresa, fornecidos voluntariamente através de formulários ou mensagens diretas.</li>
              <li><strong>Dados Técnicos Operacionais:</strong> Informações sobre gargalos de sistemas, volumes transacionais e requisitos de integração fornecidos para análise de viabilidade arquitetural.</li>
              <li><strong>Registros de Acesso:</strong> Dados técnicos estritamente necessários para segurança da infraestrutura (endereço IP, carimbo de data/hora), armazenados em conformidade com o Marco Civil da Internet (Lei nº 12.965/2014).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A192F] mb-3">3. Finalidade e Base Legal do Tratamento</h2>
            <p className="mb-3">
              Todo tratamento de dados fundamenta-se nas bases legais previstas no art. 7º da LGPD:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Procedimentos Preliminares de Contrato (Art. 7º, V):</strong> Atendimento a solicitações de orçamento, diagnóstico de viabilidade técnica e reuniões de alinhamento.</li>
              <li><strong>Cumprimento de Obrigação Legal (Art. 7º, II):</strong> Guarda de registros de conexão conforme exigido por lei.</li>
              <li><strong>Legítimo Interesse (Art. 7º, IX):</strong> Aperfeiçoamento da segurança cibernética e prevenção a fraudes em nossa infraestrutura.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A192F] mb-3">4. Não Compartilhamento e Sigilo Absoluto</h2>
            <p>
              A Omni Sistemas <strong>jamais comercializa, aluga ou cede dados pessoais</strong> a terceiros, corretores de dados ou plataformas de publicidade comportamental. Os dados podem ser processados exclusivamente por provedores de infraestrutura estritamente auditados e vinculados a termos contratuais de confidencialidade (como provedores de computação em nuvem com criptografia de ponta a ponta e gateway transacional Asaas para operações financeiras autorizadas).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A192F] mb-3">5. Segurança da Informação e Zero-Trust</h2>
            <p>
              Aplicamos rigorosos controles técnicos de proteção:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Criptografia de tráfego com TLS 1.3 (HTTPS mandatório com HSTS ativo);</li>
              <li>Criptografia de repouso em bancos de dados relacionais e backups (AES-256);</li>
              <li>Arquitetura Zero-Trust com isolamento rígido entre camadas de persistência e interfaces públicas;</li>
              <li>Acesso restrito e autenticado por chaves seguras aos registros de leads e diagnósticos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A192F] mb-3">6. Direitos do Titular de Dados</h2>
            <p className="mb-3">
              Em estrito cumprimento ao art. 18 da LGPD, o titular possui o direito de solicitar a qualquer momento:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Confirmação da existência de tratamento e acesso aos dados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
              <li>Revogação do consentimento concedido anteriormente.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0A192F] mb-3">7. Encarregado de Proteção de Dados (DPO)</h2>
            <p>
              Para exercer qualquer direito relativo à privacidade ou esclarecer dúvidas sobre o tratamento de dados, o titular pode entrar em contato diretamente com o nosso Encarregado através do e-mail: <a href="mailto:privacidade@omni-sistemas.com" className="text-sky-700 underline font-medium">privacidade@omni-sistemas.com</a> (ou pelo e-mail geral <a href={`mailto:${SITE.email}`} className="text-sky-700 underline">{SITE.email}</a>).
            </p>
          </section>
        </article>
      </main>

      <Footer theme="light" />
    </div>
  )
}
