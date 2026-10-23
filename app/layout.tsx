import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { SITE } from '@/config/site'
import { JsonLd } from '@/common/JsonLd'
import {
  buildOrganizationSchema,
  buildProfessionalServiceSchema,
  buildWebSiteSchema,
} from '@/lib/schemas'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name }],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/logo-Omni-Sistema-peq.png', type: 'image/png' },
      { url: '/logo-Omni-Sistema-peq.webp', type: 'image/webp' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/logo-Omni-Sistema-peq.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.shortDescription,
    url: SITE.domain,
    siteName: SITE.name,
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Sistemas Sob Medida & Automação Inteligente`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.shortDescription,
    images: [SITE.ogImage],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#f8fafc',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <html lang={SITE.lang} className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <noscript>
          <style>{'.reveal{opacity:1;transform:none}'}</style>
        </noscript>
        <link rel="icon" type="image/png" href="/logo-Omni-Sistema-peq.png" />
        <link rel="icon" type="image/webp" href="/logo-Omni-Sistema-peq.webp" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/logo-Omni-Sistema-peq.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="describedby" href="/llms.txt" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen subpixel-antialiased">
        <JsonLd data={buildOrganizationSchema()} />
        <JsonLd data={buildWebSiteSchema()} />
        <JsonLd data={buildProfessionalServiceSchema()} />
        {children}
      </body>
    </html>
  )
}
