import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'nonce-${nonce}' https://apis.google.com https://www.gstatic.com https://static.cloudflareinsights.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://*.googleusercontent.com;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://chukyo-passpal.firebaseapp.com https://www.googleapis.com https://cloudflareinsights.com;
    frame-src 'self' https://*.firebaseapp.com https://chukyo-passpal.firebaseapp.com;
    frame-ancestors 'self' chrome-extension:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
    require-trusted-types-for 'script';
  `;

    const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, " ").trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-nonce", nonce);
    requestHeaders.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    response.headers.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);

    return response;
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        "/((?!api|_next/static|_next/image|favicon.ico).*)",
    ],
};
