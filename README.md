# このページをご覧になっている企業様へ

こんな大して使い道のない成果物にご興味を持ってくださり、誠にありがとうございます。

下記のURLでオンライン環境でお試しいただけます。
URL: https://whisper-wave.com/

アカウント：megumin@gmail.com
パスワード：私の本名（大文字アルファベット、スペース無し）

大変恐縮ですが、セキュリティの都合上、登録は招待制にしております。
また、使用者を関係者のみに限定するために、パスワードは伏せさせていただきます。


# 現バージョンについて

フォローやフォロー解除など、完成していない機能はまだまだたくさんありますが、なるべく10月以内に実装したいと考えています。

マルチデバイスの最適化、マージで大変でした。


### ちなみに今ある投稿は全部AIで生成しました。人間が書いたわけではありません。

# 次のバージョンについて

### より安全性の高いアカウントシステム、SSO、CAPTCHAの実装など

### マルチデバイスにおけるUIの最適化

### マイページ機能の実装

### ダークモードの実装

# 概要
　Amazonのとある電子書籍がきっかけで9月初めに着手。
　前職ではSNS関連のUIをかなり作っていましたので、なるほど、こうやって作ってたんですね！というのを実感するために投稿系Appにしました。しかし現状だと私自身ですら使い込みたいとは思わないので、「生成AIを活用した英語学習者向け投稿サイト」に軌道修正していく予定です。せめて自分だけでも使いたいと思うようなAppにしたいです。

## 使った技術やフレームワーク
　React、Express、MongoDB

## どのくらい関わったか
　本を参考にChatGPTを活用しながら開発していますが、バックエンドからフロントエンド、さらにデプロイまで基本的に私一人で作っています。


# こだわりポイント

## 1、いいねとコレクト、そしてそのアイコンアニメーション
　かなりこだわって作りました。ユーザー体験に関しても、いいねとコレクト関連はOptimistic UIを意識しており、ユーザーが押した瞬間にとりあえずカウント＋1、アニメーション発動。通信に失敗した場合、すぐに元に戻るといった感じで実装しています。

## 2、コメント欄
　こういうちょっと複雑な見た目をしたコメント欄はずっと前から作りたかったので、ようやく夢が叶いました。

## 3、背景
　ヘッドー画像をぼかして詳細ページの背景にしています。

## 4、コンポーネント化
　まだまだ抽象度が足りないコンポーネントもありますが、できる限りコンポーネント化を意識して作っています。

## 5、UIライブラリを使わない
　現場ではUIライブラリが必須であったりすることは承知しておりますが、練習のためになるべく自分で書くようにしています。

## 注意した点
　セキュリティにはかなり注意しております。特にバックエンドのuserControllerという部分は、今の私にできる最大限のセキュリティ対策を施しています。

# 備考
　基本的にはChatGPT（4.0）に協力してもらいながら作っていますが、丸コピペは極力避けており（実は4.0でも丸コピペのできないケースが圧倒的に多い）、わからない部分だけ助けを求めるといった形です。UIデザインのノウハウ、そしてHTMLとCSSの知識はかなり役に立ったと感じました。

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
