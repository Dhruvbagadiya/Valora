import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const toolsEndpoints = [
        "/tools/base64-encoder-decoder",
        "/tools/uuid-generator",
        "/tools/url-encoder-decoder",
        "/tools/date-time-utilities",
    ]

    if (toolsEndpoints.includes(pathname)) {
        return NextResponse.next()
    } else {
        return NextResponse.redirect(new URL("/tools/base64-encoder-decoder", request.nextUrl))
    }
}

export const config = {
    matcher: [
        "/tools",
        "/tools/:path*"
    ],
};