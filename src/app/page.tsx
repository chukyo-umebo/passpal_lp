"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Bell, BookOpen, Calendar, Check, ChevronDown, Clock, Download, Shield, Smartphone, Sparkles, Users, Wifi, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SCREENSHOTS = {
    appIcon: "/img/passpal-icon.png",
    welcome: "/img/welcome-screen.png",
    timetable: "/img/timetable-screen.png",
    home: "/img/home-screen.png",
    assignments: "/img/assignments-screen.png",
};

const featureTiles = [
    {
        icon: Calendar,
        title: "スマート時間割",
        description: "ビジュアルで分かりやすい時間割。教室、担当教員、シラバスまで一元管理。ウィジェットで次の授業を常に確認。",
        color: "from-[#B19CD9] to-[#8d7bb8]",
        gradient: "from-[#B19CD9]/20 to-[#8d7bb8]/20",
    },
    {
        icon: Bell,
        title: "賢い通知システム(未実装)",
        description: "授業開始前の通知、課題締切リマインダー、休講情報を自動配信。カスタマイズであなたの生活リズムに完全対応。",
        color: "from-[#C4B0E0] to-[#9E8AC0]",
        gradient: "from-[#C4B0E0]/20 to-[#9E8AC0]/20",
    },
    {
        icon: BookOpen,
        title: "講義資料管理(未実装)",
        description: "資料、ノート、参考文献をクラウドで整理。複数デバイスから即アクセス。高速検索で必要な情報に瞬時到達。",
        color: "from-[#D1C0E8] to-[#AF9DD0]",
        gradient: "from-[#D1C0E8]/20 to-[#AF9DD0]/20",
    },
    {
        icon: BarChart3,
        title: "成績トラッキング(未実装)",
        description: "単位取得状況、GPA計算、卒業要件を視覚化。グラフで学習状況を一目で把握し、計画的な履修を実現。",
        color: "from-[#B19CD9] to-[#8d7bb8]",
        gradient: "from-[#B19CD9]/20 to-[#8d7bb8]/20",
    },
    {
        icon: Clock,
        title: "課題・試験管理(未実装)",
        description: "レポート、試験、プレゼンを一括管理。優先度設定と進捗記録で、計画的に課題をクリア。",
        color: "from-[#C4B0E0] to-[#9E8AC0]",
        gradient: "from-[#C4B0E0]/20 to-[#9E8AC0]/20",
    },
    {
        icon: Users,
        title: "グループ学習(未実装)",
        description: "時間割共有、スケジュール調整、共同プロジェクト管理。協力学習を次のレベルへ。",
        color: "from-[#D1C0E8] to-[#AF9DD0]",
        gradient: "from-[#D1C0E8]/20 to-[#AF9DD0]/20",
    },
];

const showcaseScreens = [
    {
        src: SCREENSHOTS.assignments,
        title: "課題管理",
        description: "締切日、優先度、進捗状況を一元管理。\nカレンダー連携で重要タスクを見逃さない",
        border: "border-[#B19CD9]/30",
        shadow: "shadow-[#B19CD9]/50",
        glow: "bg-[#B19CD9]",
    },
    {
        src: SCREENSHOTS.timetable,
        title: "スマート時間割",
        description: "1日・1週間表示を自由に切り替え。\n講義情報を一目で確認できる、\n洗練されたカレンダーUI",
        border: "border-[#8d7bb8]/30",
        shadow: "shadow-[#8d7bb8]/50",
        glow: "bg-[#8d7bb8]",
    },
    {
        src: SCREENSHOTS.home,
        title: "統合ダッシュボード",
        description: "お知らせを\n一画面で確認。ALBOとMaNaBoとの\n連携で情報を逃さない",
        border: "border-[#C4B0E0]/30",
        shadow: "shadow-[#C4B0E0]/50",
        glow: "bg-[#C4B0E0]",
    },
];

const supportingHighlights = [
    {
        icon: Zap,
        title: "直感的UI",
        description: "迷わない操作性",
        colors: "from-[#B19CD9] to-[#8d7bb8]",
        shadow: "shadow-[#B19CD9]/50",
    },
    {
        icon: Wifi,
        title: "オフライン対応",
        description: "いつでもどこでも",
        colors: "from-[#C4B0E0] to-[#9E8AC0]",
        shadow: "shadow-[#C4B0E0]/50",
    },
    {
        icon: Shield,
        title: "安全管理",
        description: "自動バックアップ",
        colors: "from-[#D1C0E8] to-[#AF9DD0]",
        shadow: "shadow-[#D1C0E8]/50",
    },
    {
        icon: Sparkles,
        title: "カスタマイズ",
        description: "自由な設定",
        colors: "from-[#B19CD9] to-[#8d7bb8]",
        shadow: "shadow-[#B19CD9]/50",
    },
];

const faqs = [
    {
        question: "PassPalは本当に無料ですか？",
        answer: "はい、完全無料です。すべての機能に制限なくアクセスでき、広告もありません。永久に無料で提供します。",
    },
    // {
    //     question: "データのバックアップは自動で行われますか？",
    //     answer: "",
    // },
    {
        question: "オフラインでも使用できますか？",
        answer: "主要機能はオフラインで利用可能です。時間割、課題の確認などができます。オンライン復帰時に自動同期されます。",
    },
    {
        question: "データのセキュリティは大丈夫ですか？",
        answer: "はい。個人情報やパスワードなどの情報は暗号化してスマホ内に保存され、PassPalのサーバーに送られることは一切ありません。安心してご利用ください。",
    },
];

export default function HomePage() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-[#B19CD9] selection:text-white">
            <nav
                className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
                    isScrolled ? "bg-black/90 backdrop-blur-lg shadow-lg shadow-[#B19CD9]/20" : "bg-transparent"
                }`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <img src={SCREENSHOTS.appIcon} alt="PassPal" className="h-12 w-12 rounded-2xl shadow-lg shadow-[#B19CD9]/50" />
                        <span className="bg-gradient-to-r from-[#B19CD9] to-[#f0ebff] bg-clip-text text-2xl text-transparent">PassPal</span>
                    </div>
                    <div className="hidden items-center gap-8 md:flex">
                        <button onClick={() => scrollToSection("features")} className="text-gray-300 transition-colors hover:text-[#B19CD9]">
                            機能
                        </button>
                        <button onClick={() => scrollToSection("benefits")} className="text-gray-300 transition-colors hover:text-[#B19CD9]">
                            特徴
                        </button>
                        <Button
                            className="bg-gradient-to-r from-[#B19CD9] to-[#8d7bb8] shadow-lg shadow-[#B19CD9]/50 transition-colors hover:from-[#9E8AC0] hover:to-[#7a6a9e] text-white border-none"
                            onClick={() => scrollToSection("download")}
                        >
                            ダウンロード
                        </Button>
                    </div>
                </div>
            </nav>

            <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B19CD9]/10 via-black to-[#8d7bb8]/10" />
                <div className="absolute inset-0">
                    <div className="absolute left-10 top-20 h-96 w-96 animate-pulse rounded-full bg-[#B19CD9] opacity-20 blur-[120px]" />
                    <div
                        className="absolute bottom-20 right-10 h-96 w-96 animate-pulse rounded-full bg-[#8d7bb8] opacity-20 blur-[120px]"
                        style={{ animationDelay: "1s" }}
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl py-32">
                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-center lg:text-left"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="mb-8"
                            >
                                <Badge className="mb-6 flex w-fit items-center justify-center gap-2 border border-[#B19CD9]/50 bg-[#B19CD9]/20 px-6 py-2 text-lg text-[#f0ebff] backdrop-blur-sm">
                                    <Sparkles className="h-4 w-4" />
                                    中京大生のための次世代アプリ
                                </Badge>
                            </motion.div>

                            <motion.h1
                                className="mb-8 text-6xl md:text-7xl lg:text-8xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                            >
                                <span className="mb-4 block">大学生活を</span>
                                <span className="animate-gradient block bg-gradient-to-r from-[#B19CD9] via-[#f0ebff] to-[#B19CD9] bg-[length:200%_auto] bg-clip-text text-transparent">
                                    革命的に
                                </span>
                                <span className="block">変える</span>
                            </motion.h1>

                            <motion.p
                                className="mb-12 text-xl leading-relaxed text-gray-300 md:text-2xl"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                時間割、通知、課題管理。
                                <br />
                                すべてが一つに。
                                <br />
                                <span className="text-[#B19CD9]">PassPalで実現する、スマートな学生生活。</span>
                            </motion.p>

                            <motion.div
                                className="mb-12 flex flex-col justify-center gap-6 sm:flex-row lg:justify-start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                            >
                                <Button
                                    className="bg-gradient-to-r from-[#B19CD9] to-[#8d7bb8] px-8 py-6 text-lg shadow-2xl shadow-[#B19CD9]/50 transition-colors hover:from-[#9E8AC0] hover:to-[#7a6a9e] text-white border-none"
                                    size="lg"
                                    onClick={() => scrollToSection("download")}
                                >
                                    <Download className="mr-2 h-6 w-6" />
                                    今すぐ無料で始める
                                </Button>
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 lg:justify-start"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: 0.8 }}
                            >
                                <div className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-[#B19CD9]" />
                                    <span>完全無料</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-[#B19CD9]" />
                                    <span>iOS &amp; Android</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="h-5 w-5 text-[#B19CD9]" />
                                    <span>オフライン対応</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="relative"
                        >
                            <div className="relative z-10">
                                <img
                                    src={SCREENSHOTS.welcome}
                                    alt="PassPal 簡単セットアップ"
                                    className="mx-auto w-full max-w-sm rounded-3xl border-4 border-[#B19CD9]/30 shadow-2xl shadow-[#B19CD9]/50 transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="absolute -left-10 -bottom-10 -z-10 h-96 w-96 rounded-full bg-[#8d7bb8] opacity-30 blur-3xl" />
                            <div className="absolute -right-10 top-10 -z-10 h-96 w-96 rounded-full bg-[#B19CD9] opacity-30 blur-3xl" />
                        </motion.div>
                    </div>
                </div>

                <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                    <ChevronDown className="h-8 w-8 text-[#B19CD9]" />
                </motion.div>
            </section>

            <section id="features" className="relative bg-gradient-to-b from-black via-[#B19CD9]/10 to-black px-4 py-32 sm:px-6 lg:px-8">
                <div
                    className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage:
                            'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djRoLTR2LTRoNHptMC04djFoLTR2LTRoNHoiLz48L2c+PC9nPjwvc3ZnPg==")',
                    }}
                />
                <div className="relative z-10 mx-auto max-w-7xl">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 text-center">
                        <h2 className="mb-6 text-5xl md:text-6xl lg:text-7xl">
                            <span className="bg-gradient-to-r from-[#B19CD9] to-[#f0ebff] bg-clip-text text-transparent">すべてが、ここに。</span>
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400 md:text-2xl">
                            PassPalは大学生活に必要な機能を完璧に統合。
                            <br />
                            もう複数のアプリを行き来する必要はありません。
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {featureTiles.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <Card
                                    className={`h-full border border-[#B19CD9]/20 bg-gradient-to-br ${feature.gradient} backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-[#B19CD9]/50 hover:shadow-2xl hover:shadow-[#B19CD9]/20`}
                                >
                                    <CardContent className="p-8">
                                        <div
                                            className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg shadow-[#B19CD9]/50 transition-transform duration-500 group-hover:scale-110`}
                                        >
                                            <feature.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="mb-4 text-2xl text-white">{feature.title}</h3>
                                        <p className="text-lg leading-relaxed text-gray-400">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="benefits" className="relative overflow-hidden bg-black px-4 py-32 sm:px-6 lg:px-8">
                <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#B19CD9] opacity-10 blur-[150px]" />
                <div className="absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full bg-[#8d7bb8] opacity-10 blur-[150px]" />

                <div className="relative z-10 mx-auto max-w-7xl">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 text-center">
                        <Badge className="mb-6 inline-flex items-center gap-2 border border-[#B19CD9]/50 bg-[#B19CD9]/20 px-6 py-2 text-lg text-[#f0ebff] backdrop-blur-sm">
                            実際の画面で見る
                        </Badge>
                        <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl">
                            <span className="bg-gradient-to-r from-[#B19CD9] to-[#f0ebff] bg-clip-text text-transparent">美しく、使いやすい</span>
                        </h2>
                        <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400 md:text-2xl">
                            洗練されたデザインと直感的な操作性で、
                            <br />
                            大学生活のあらゆるシーンをサポート
                        </p>
                    </motion.div>

                    <div className="grid items-start gap-12 md:grid-cols-3">
                        {showcaseScreens.map((screen, index) => (
                            <motion.div
                                key={screen.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group"
                            >
                                <div className="relative mb-8">
                                    <img
                                        src={screen.src}
                                        alt={screen.title}
                                        className={`mx-auto w-full max-w-xs rounded-3xl border-4 ${screen.border} ${screen.shadow} shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-opacity-70`}
                                    />
                                    <div
                                        className={`absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full ${screen.glow} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="mb-4 text-2xl text-white">{screen.title}</h3>
                                    <p className="whitespace-pre-line text-lg leading-relaxed text-gray-400">{screen.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-32">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {supportingHighlights.map((item) => (
                                <div key={item.title} className="group flex gap-6">
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.colors} ${item.shadow} transition-transform duration-300 group-hover:scale-110`}
                                    >
                                        <item.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="mb-2 text-xl text-white">{item.title}</h4>
                                        <p className="leading-relaxed text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="download" className="relative overflow-hidden bg-gradient-to-br from-[#B19CD9] via-[#9E8AC0] to-[#8d7bb8] px-4 py-40 sm:px-6 lg:px-8">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djRoLTR2LTRoNHptMC04djRoLTR2LTRoNHoiLz48L2c+PC9nPjwvc3ZnPg==")',
                    }}
                />
                <div className="absolute left-20 top-20 h-96 w-96 rounded-full bg-white opacity-10 blur-[120px]" />
                <div className="absolute right-20 bottom-20 h-96 w-96 rounded-full bg-white opacity-10 blur-[120px]" />

                <div className="relative z-10 mx-auto max-w-5xl text-center">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        <Smartphone className="mx-auto mb-8 h-24 w-24 text-white" />
                        <h2 className="mb-8 text-5xl text-white md:text-6xl lg:text-7xl">
                            未来の大学生活は
                            <br />
                            <span className="bg-gradient-to-r from-white to-[#f0ebff] bg-clip-text text-transparent">今、ここから始まる</span>
                        </h2>
                        <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-purple-100 md:text-2xl">
                            PassPalで実現する、ストレスフリーな学生生活。
                            <br />
                            完全無料で、すべての機能があなたのものに。
                        </p>
                        <div className="mb-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
                            <Button
                                className="h-auto bg-transparent p-0 shadow-none hover:bg-transparent"
                                size="lg"
                                onClick={() => {
                                    window.open("https://apps.apple.com/app/passpal/id6754452343");
                                }}
                            >
                                <img src="/img/AppStoreBadge.svg" alt="App Store" width={170} />
                            </Button>
                            <Button className="m-0 h-auto bg-transparent p-0 shadow-none hover:bg-transparent grayscale" size="lg" disabled>
                                <img src="/img/GooglePlayBadge.png" alt="Google Play" width={200} />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="bg-black px-4 py-32 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 text-center">
                        <Badge className="mb-6 inline-flex items-center gap-2 border border-[#B19CD9]/50 bg-[#B19CD9]/20 px-6 py-2 text-lg text-[#f0ebff] backdrop-blur-sm">
                            よくある質問
                        </Badge>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl">
                            <span className="bg-gradient-to-r from-[#B19CD9] to-[#f0ebff] bg-clip-text text-transparent">FAQ</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="border border-[#B19CD9]/20 bg-gradient-to-br from-[#B19CD9]/10 to-[#8d7bb8]/10 backdrop-blur-sm transition-all duration-300 hover:border-[#B19CD9]/40">
                                    <CardContent className="p-8">
                                        <h4 className="mb-4 text-xl text-white">{faq.question}</h4>
                                        <p className="text-lg leading-relaxed text-gray-400">{faq.answer}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <footer className="bg-gradient-to-b from-black to-[#0f0f12] px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12 grid gap-12 md:grid-cols-4">
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <img src={SCREENSHOTS.appIcon} alt="PassPal" className="h-14 w-14 rounded-2xl shadow-lg shadow-[#B19CD9]/50" />
                                <span className="bg-gradient-to-r from-[#B19CD9] to-[#f0ebff] bg-clip-text text-2xl text-transparent">PassPal</span>
                            </div>
                            <p className="leading-relaxed text-gray-400">
                                大学生活をもっとスマートに。
                                <br />
                                次世代の学習管理アプリ。
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-6 text-lg text-white">フォロー</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <a href="https://x.com/passpal_app" className="transition-colors hover:text-[#B19CD9]">
                                        X
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/chukyo_passpal/" className="transition-colors hover:text-[#B19CD9]">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="https://marshmallow-qa.com/ihb6w4d50uwr9fl" className="transition-colors hover:text-[#B19CD9]">
                                        マシュマロ
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/chukyo-passpal" className="transition-colors hover:text-[#B19CD9]">
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-6 text-lg text-white">ダウンロード</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <a href="https://apps.apple.com/app/passpal/id6754452343" className="transition-colors hover:text-[#B19CD9]">
                                        App Store
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-6 text-lg text-white">法的事項</h4>
                            <ul className="space-y-3 text-gray-400">
                                <li>
                                    <a href="/term" className="transition-colors hover:text-[#B19CD9]">
                                        利用規約
                                    </a>
                                </li>
                                <li>
                                    <a href="/policy" className="transition-colors hover:text-[#B19CD9]">
                                        プライバシーポリシー
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-[#B19CD9]/20 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 PassPal. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
