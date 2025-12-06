import type { Metadata } from "next";
import { headers } from "next/headers";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-noto-sans-jp",
    display: "swap",
    fallback: ["Hiragino Sans", "Hiragino Kaku Gothic ProN", "sans-serif"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://chukyo-passpal.app/"),
    title: {
        default: "PassPal｜中京大学向け学習ハブアプリ",
        template: "%s｜PassPal",
    },
    description:
        "PassPalは中京大学の学習情報を一括管理できる非公式ハブアプリです。ALBO・MaNaBo・大学ポータルの課題やお知らせ、時間割をまとめて表示し、締切管理や授業の確認をスマートにします。",
    keywords: ["中京大学", "中京", "chukyo", "PassPal", "ぱすぱる", "パスパル", "課題管理", "時間割", "学生", "大学生活", "学習管理", "非公式アプリ", "アプリ"],
    applicationName: "PassPal",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "ja_JP",
        url: "/",
        siteName: "PassPal",
        title: "PassPal｜中京大学の学習情報を一括管理",
        description: "ALBO・MaNaBo・大学ポータルを横断して課題や時間割、お知らせをまとめる中京大学生向けの学習サポートアプリPassPal。",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "PassPalの画面プレビューと機能概要",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@passpal_app",
        title: "PassPal｜中京大学生のための学習ハブアプリ",
        description: "課題・時間割・お知らせをまとめて管理。中京大学生の学習をスマートにするPassPal公式LP。",
        images: ["/opengraph-image"],
    },
    category: "education",
    creator: "PassPal開発チーム",
    publisher: "PassPal開発チーム",
    authors: [{ name: "PassPal開発チーム" }],
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    referrer: "origin-when-cross-origin",
    icons: {
        icon: "/icon.svg",
        shortcut: "/favicon.ico",
        apple: "/icon.svg",
    },
    appleWebApp: {
        title: "PassPal",
        statusBarStyle: "default",
        capable: true,
    },
    formatDetection: {
        telephone: false,
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "PassPal",
    applicationCategory: "EducationalApplication",
    operatingSystem: ["iOS", "Android", "Web"].join(", "),
    url: "https://chukyo-passpal.app/",
    description: "PassPalは中京大学の学習情報を一括管理できる非公式ハブアプリです。課題や時間割、お知らせをまとめて確認できます。",
    inLanguage: "ja-JP",
    keywords: ["中京大学", "PassPal", "課題管理アプリ", "時間割アプリ", "学生生活"],
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "JPY",
    },
    downloadUrl: ["https://apps.apple.com/app/passpal/id6754452343", "https://play.google.com/store/apps/details?id=app.chukyopasspal.passpal"],
    publisher: {
        "@type": "Organization",
        name: "PassPal開発チーム",
        url: "https://chukyo-passpal.app/",
    },
    sameAs: ["https://twitter.com/passpal_app"],
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const headersList = await headers();
    const nonce = headersList.get("x-nonce") || "";

    return (
        <html lang="ja">
            <body className={`${notoSansJp.variable} antialiased`}>
                <script
                    id="passpal-ld-json"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                    nonce={nonce}
                />
                <a href="#main-content" className="skip-link">
                    メインコンテンツにスキップ
                </a>
                {children}
            </body>
        </html>
    );
}
