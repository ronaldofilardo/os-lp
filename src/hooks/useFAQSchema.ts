import { useEffect } from 'react'
import type { FAQItem } from '@/types'

export function useFAQSchema(faqItems: readonly FAQItem[]): void {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-schema'
    script.textContent = JSON.stringify(schema, null, 2)
    document.head.appendChild(script)

    return () => {
      const existing = document.getElementById('faq-schema')
      existing?.remove()
    }
  }, [faqItems])
}
