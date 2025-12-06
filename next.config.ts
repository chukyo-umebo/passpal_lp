import type { NextConfig } from "next";

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://apis.google.com https://www.gstatic.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://*.googleusercontent.com;
    font-src 'self' https://fonts.gstatic.com;
    connect-src 'self' https://identitytoolkit.googleapis.com https://securetoken.googleapis.com https://chukyo-passpal.firebaseapp.com https://www.googleapis.com;
    frame-src 'self' https://*.firebaseapp.com https://chukyo-passpal.firebaseapp.com;
    frame-ancestors 'self' chrome-extension:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
    experimental: {
        optimizeCss: true,
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: cspHeader.replace(/\n/g, ""),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
