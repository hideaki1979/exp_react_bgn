# React Dashboard Application

## 概要

このプロジェクトは、Vite と React を使用して構築された管理画面のダッシュボードアプリケーションです。
顧客情報の一覧表示、チャートを用いたデータ可視化、カレンダー、お知らせ機能などを備えています。

## 機能

- **ページナビゲーション**: React Router を使用して、各ページ（ホーム、顧客管理、チャート）間をスムーズに遷移します。
- **顧客管理**: 顧客情報を一覧で表示し、管理することができます。
- **データ可視化**: Chart.js や Recharts などのライブラリを使用して、データを視覚的に分かりやすく表示します。
- **レスポンシブデザイン**: Material-UI を利用して、さまざまなデバイスサイズに対応したレイアウトを構築しています。
- **共通レイアウト**: ヘッダーとサイドバーを共通コンポーネントとして配置し、一貫した UI を提供します。

## 技術スタック

使用している主要な技術は以下の通りです。

| 技術         | ロゴ                                                                                 |
| :----------- | :----------------------------------------------------------------------------------- |
| Vite         | <img src="public/vite.svg" alt="Vite" width="120" />                                 |
| React        | <img src="src/assets/react.svg" alt="React" width="120" />                           |
| React Router | React Router                                                                         |
| Material-UI  | <img src="https://mui.com/static/logo.svg" alt="Material-UI" width="120" />          |
| Sass         | <img src="https://sass-lang.com/assets/img/logos/logo.svg" alt="Sass" width="120" /> |
| ESLint       | <img src="https://eslint.org/assets/img/logo.svg" alt="ESLint" width="120" />        |

## 開発環境構築

以下の手順で、ローカル環境でプロジェクトを起動できます。

```bash
# 1. 依存関係をインストール
npm install

# 2. 開発サーバーを起動
npm run dev

# 3. ブラウザで http://localhost:5173 にアクセス
```

## プロジェクト構造

主要なディレクトリとファイルの説明です。

```plaintext
exp_react_01/
├── public/              # ビルド時にそのままコピーされる静的ファイル
├── src/
│   ├── assets/          # 画像などのアセットファイル
│   ├── components/      # 再利用可能なReactコンポーネント
│   ├── layout/          # ヘッダー、サイドバーなどのレイアウトコンポーネント
│   ├── pages/           # 各ページを表すコンポーネント
│   ├── App.jsx          # アプリケーションのルートコンポーネントとルーティング設定
│   └── main.jsx         # アプリケーションのエントリーポイント
├── .eslintrc.cjs        # ESLintの設定ファイル
├── index.html           # エントリーとなるHTMLファイル
├── package.json         # プロジェクトの情報と依存関係
└── vite.config.js       # Viteの設定ファイル
```
