import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        optimizeCss: true,
    },
    async redirects() {
        return [
            {
                source: "/:path*",
                destination: "https://www.umebo.app/",
                permanent: true,
            },
        ];
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=31536000; includeSubDomains; preload",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "SAMEORIGIN",
                    },
                    {
                        key: "Cross-Origin-Opener-Policy",
                        value: "same-origin",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
