import { NextResponse, type NextRequest } from 'next/server'
import {
  isMarkdownAccepted,
  getHomeMarkdown,
  getNotFoundMarkdown,
  isKnownPath,
} from '@/lib/agentNegotiation'

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl
  const accept = request.headers.get('accept')

  if (isMarkdownAccepted(accept)) {
    if (pathname === '/') {
      return new NextResponse(getHomeMarkdown(), {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
        },
      })
    }

    if (!isKnownPath(pathname)) {
      return new NextResponse(getNotFoundMarkdown(pathname), {
        status: 404,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'Cache-Control': 'no-store',
        },
      })
    }
  }

  const response = NextResponse.next()
  response.headers.set('Vary', 'Accept')
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)'],
}
