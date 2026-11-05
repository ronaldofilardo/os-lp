import { SITE } from '@/config/site'

const KNOWN_STATIC_PATHS = new Set([
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/sobre',
  '/contato',
  '/privacidade',
  '/metodologia',
  '/artigos',
  '/conhecimento',
  '/obrigado',
  '/omni-saude',
  '/omni-saude/para-voce',
  '/omni-saude/para-labs',
  '/omni-saude/medicos',
  '/omni-saude/seguranca',
  '/omni-saude/contato',
  '/omni-saude/cadastro',
])

const KNOWN_PREFIXES = ['/api/', '/artigos/', '/conhecimento/', '/_next/']
const ASSET_PATTERN = /\.(png|jpg|jpeg|webp|svg|ico|mp4|pdf|css|js|txt|xml|json)$/i

export function isMarkdownAccepted(acceptHeader: string | null): boolean {
  if (!acceptHeader) return false
  return acceptHeader.includes('text/markdown')
}

export function isKnownPath(pathname: string): boolean {
  if (KNOWN_STATIC_PATHS.has(pathname)) return true
  if (KNOWN_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return true
  return ASSET_PATTERN.test(pathname)
}

export function getHomeMarkdown(): string {
  return `# Omni Sistemas — Sistemas Sob Medida & Automação Inteligente

> Softhouse brasileira especializada em arquitetura de software sob medida, automação de integrações de API (destaque ao gateway Asaas, ERPs e bancos) e modernização segura de sistemas legados.

## Perfil da Entidade
- **Razão Social:** BE SMART LTDA (CNPJ 55.405.487/0001-84)
- **Origem / Fundação:** Projetos iniciados em 1996 (30 anos de atuação contínua no desenvolvimento de software)
- **Liderança Técnica:** Ronaldo Domingues Filardo (Fundador, Arquiteto de Software Corporativo e criador da metodologia STE-DEV)
- **Formação & Autoridade:** Ex-Professor Universitário da PUCPR de Metodologia de Pesquisa Científica e autor de livro acadêmico (Editora Intersaberes)
- **Localização:** Curitiba/PR — Atendimento remoto em todo o Brasil e imersão presencial in loco
- **Contato Oficial:** WhatsApp: (41) 99241-5220 (${SITE.whatsapp.url}) | E-mail: ${SITE.email}

## Serviços Especializados
1. **Desenvolvimento de Plataformas Sob Medida:** Softwares dedicados para empresas que atingiram o teto operacional de ferramentas prontas.
2. **Integrações de APIs & Automação Financeira:** Conexão nativa com gateway Asaas (Pix, boletos, conciliação em tempo real), ERPs e bancos.
3. **Modernização de Sistemas Legados:** Aplicação do Strangler Pattern e testes de caracterização sem paralisação da operação.
4. **Metodologia STE-DEV:** Engenharia preventiva baseada na norma aeroespacial ASD-STE100 (módulos < 100 linhas, zero-any, Clean Architecture).

## Documentação & Links para Agentes de IA
- Manifest de IA: ${SITE.domain}/llms.txt
- Especificação Completa: ${SITE.domain}/llms-full.txt
- Mapa do Site (Sitemap): ${SITE.domain}/sitemap.xml
- Metodologia Técnica: ${SITE.domain}/metodologia
- Artigos de Engenharia: ${SITE.domain}/artigos
- Base de Conhecimento: ${SITE.domain}/conhecimento
- Sobre a Empresa: ${SITE.domain}/about
- Contato: ${SITE.domain}/contact
- Política de Privacidade: ${SITE.domain}/privacy
`
}

export function getNotFoundMarkdown(path: string): string {
  return `# Erro 404 — Recurso Não Encontrado

O endereço \`${path}\` não existe ou mudou de localização no servidor da Omni Sistemas.

## Documentação e Atalhos para Agentes de IA:
- Manifest de IA: ${SITE.domain}/llms.txt
- Especificação completa: ${SITE.domain}/llms-full.txt
- Mapa do site (Sitemap XML): ${SITE.domain}/sitemap.xml
- Metodologia STE-DEV: ${SITE.domain}/metodologia
- Hub de Artigos Técnicos: ${SITE.domain}/artigos
- Base de Conhecimento: ${SITE.domain}/conhecimento
- Sobre a Empresa: ${SITE.domain}/about
- Contato Direto com Arquiteto: ${SITE.domain}/contact
`
}
