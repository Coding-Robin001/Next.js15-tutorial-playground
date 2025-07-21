// // middleware.ts
// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'

// export function middleware(request: NextRequest) {
//     const url = request.nextUrl
//     const pathname = url.pathname

//     // 1. Log every request path
//     console.log('Request to:', pathname)

//     // 2. Language detection and redirect if needed
//     const acceptLang = request.headers.get('accept-language')
//     const preferredLang = acceptLang?.startsWith('fr') ? 'fr' : 'en'

//     if (!pathname.startsWith(`/${preferredLang}`)) {
//         url.pathname = `/${preferredLang}${pathname}`
//         return NextResponse.redirect(url)
//     }

//     // 3. Auth protection
//     const token = request.cookies.get('token')?.value
//     const protectedPaths = [`/${preferredLang}/dashboard`, `/${preferredLang}/profile`]
//     const isProtected = protectedPaths.some((path) => pathname.startsWith(path))

//     if (isProtected && !token) {
//         const loginUrl = new URL(`/${preferredLang}/login`, request.url)
//         loginUrl.searchParams.set('redirect', pathname)
//         return NextResponse.redirect(loginUrl)
//     }

//     return NextResponse.next()
// }

// export const config = {
//     matcher: [
//         '/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)',
//     ],
// }
