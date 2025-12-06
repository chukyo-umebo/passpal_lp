import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://chukyo-passpal.app";

    return {
        rules: {
            userAgent: "*",
            disallow: "/extensions/auth",
            allow: "/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
