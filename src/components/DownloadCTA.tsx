"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

type Platform = "ios" | "android" | "desktop";

interface DownloadCTAProps {
    noteColor?: string;
}

export default function DownloadCTA({ noteColor = "text-passpal-gray-600" }: DownloadCTAProps) {
    const [platform, setPlatform] = useState<Platform>("desktop");

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();

        if (/iphone|ipad|ipod/.test(userAgent)) {
            setPlatform("ios");
        } else if (/android/.test(userAgent)) {
            setPlatform("android");
        } else {
            setPlatform("desktop");
        }
    }, []);

    const renderButtons = () => {
        switch (platform) {
            case "ios":
                return (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <AppStoreButton />
                    </div>
                );

            case "android":
                return (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <GooglePlayButton />
                    </div>
                );

            default: // desktop
                return (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <AppStoreButton />
                        <GooglePlayButton />
                        <BrowserExtensionButton />
                    </div>
                );
        }
    };

    return (
        <div>
            {renderButtons()}
            <p className={`text-sm mt-4 ${noteColor}`}>※ アカウント作成不要、メール登録不要</p>
        </div>
    );
}

function GooglePlayButton() {
    return (
        <a href="#" className="inline-block hover:opacity-80 transition-opacity">
            <Image src="/GooglePlayBadge.png" alt="Google Playからダウンロード" width={200} height={60} sizes="200px" className="h-15 w-auto" />
        </a>
    );
}

function AppStoreButton() {
    return (
        <a href="#" className="inline-block hover:opacity-80 transition-opacity">
            <Image src="/AppStoreBadge.svg" alt="App Storeからダウンロード" width={200} height={60} sizes="200px" className="h-15 w-auto" />
        </a>
    );
}

function BrowserExtensionButton() {
    return (
        <a href="#" className="inline-block hover:opacity-80 transition-opacity">
            <Image src="/ChromeWebStooreBadge.png" alt="ブラウザ拡張機能をインストール" width={200} height={60} sizes="200px" className="h-15 w-auto" />
        </a>
    );
}
