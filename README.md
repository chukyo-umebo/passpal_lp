# PassPal LP

学生向け総合ユーティリティアプリ「PassPal」のランディングページプロジェクトです。

## プロジェクト概要

PassPalは、学生の学業生活をサポートするために設計された包括的なアプリです。このリポジトリは、その機能を紹介し、アプリのダウンロードを促進するためのランディングページのソースコードを含んでいます。

### アプリの主な機能

- **スマート時間割**: ビジュアルで分かりやすい時間割管理。
- **賢い通知システム**: 授業開始前や課題締切のリマインダー（予定）。
- **講義資料管理**: 資料やノートのクラウド管理（予定）。
- **成績トラッキング**: GPA計算や単位取得状況の可視化（予定）。
- **課題・試験管理**: スケジュールの一元管理（予定）。

## 技術スタック

- **フレームワーク**: [Next.js 15](https://nextjs.org/) (App Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**:
  - [Tailwind CSS v4](https://tailwindcss.com/)
  - [Shadcn/ui](https://ui.shadcn.com/)（Radix UIベース）
  - [Framer Motion](https://www.framer.com/motion/)（アニメーション）
- **バックエンド**: Firebase (Auth, App)
- **フォーム**: React Hook Form + Zod

## 開発の始め方

### 前提条件

- Node.jsがインストールされていること。

### インストール

依存関係をインストールします。

```bash
npm install
```

### 開発サーバーの起動

開発サーバーを立ち上げます（Turbopackを使用）。

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) にアクセスして確認できます。

## 利用可能なスクリプト

- `npm run dev`: 開発サーバーを起動します。
- `npm run build`: 本番用にアプリケーションをビルドします。
- `npm run start`: ビルドされたアプリケーションを起動します。
- `npm run lint`: ESLintを実行してコード品質をチェックします。

## ディレクトリ構造

- `src/app`: アプリケーションのページ、レイアウト、グローバルスタイル。
- `src/components`:
  - `ui/`: 再利用可能なUIコンポーネント（ボタン、入力フォームなど）。
  - その他：各セクション（ヒーロー、機能紹介など）のコンポーネント。
- `src/hooks`: カスタムフック。
- `src/lib`: ユーティリティ関数。
- `public`: 静的ファイル（画像など）。
