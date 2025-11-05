import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { headers } from 'next/headers'
import { auth } from '@/shared/lib/auth'

const publicRoute = ['/', '/login', '/signup']

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session && !publicRoute.includes(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (session && publicRoute.includes(request.nextUrl.pathname)) {
    const lastPath = request.cookies.get('lastPath')?.value || 'dashboard'
    return NextResponse.redirect(new URL(lastPath, request.url))
  }

  if (session) {
    const response = NextResponse.next()
    response.cookies.set('lastPath', request.nextUrl.pathname)
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|avatars|.well-know).*)',
  ],
}
