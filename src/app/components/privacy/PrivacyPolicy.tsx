import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="pt-8 px-6 md:px-16 lg:px-24 text-gray-700">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-center mb-4">
          プライバシーポリシー
        </h1>
        <p className="text-center text-lg">
          プライバシーポリシーをご確認ください。
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">ユーザーから取得する情報</h2>
        <p>本アプリは、ユーザーから以下の情報を取得します。</p>
        <ul className="list-disc list-inside ml-4">
          <li>氏名(ニックネームやペンネームも含む)</li>
          <li>性別</li>
          <li>写真や動画</li>
          <li>
            外部サービスでユーザーが利用するID、その他外部サービスのプライバシー設定によりユーザーが連携先に開示を認めた情報
          </li>
          <li>Cookie(クッキー)を用いて生成された識別情報</li>
          <li>
            本アプリのウェブサイトの滞在時間、入力履歴、購買履歴等の本アプリのウェブサイトにおけるユーザーの行動履歴
          </li>
          <li>本アプリの起動時間、入力履歴、購買履歴等の本アプリの利用履歴</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">
          ユーザーの情報を利用する目的
        </h2>
        <p>
          本アプリは、ユーザーから取得した情報を、以下の目的のために利用します。
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>サービスに関する登録の受付、ユーザーの本人確認、認証のため</li>
          <li>ユーザーのサービスの利用履歴を管理するため</li>
          <li>
            サービスにおけるユーザーの行動履歴を分析し、サービスの維持改善に役立てるため
          </li>
          <li>広告の配信、表示及び効果測定のため</li>
          <li>ユーザーの趣味嗜好にあわせたターゲティング広告を表示するため</li>
          <li>サービスに関するご案内をするため</li>
          <li>ユーザーからのお問い合わせに対応するため</li>
          <li>規約や法令に違反する行為に対応するため</li>
          <li>サービスの変更、提供中止、終了、契約解除をご連絡するため</li>
          <li>規約の変更等を通知するため</li>
          <li>以上の他、サービスの提供、維持、保護及び改善のため</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">
          安全管理のために講じた措置
        </h2>
        <p>
          本アプリが、ユーザーから取得した情報に関して安全管理のために講じた措置につきましては、末尾記載のお問い合わせ先にご連絡をいただきましたら、法令の定めに従い個別にご回答させていただきます。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">第三者提供</h2>
        <p>
          本アプリは、ユーザーから取得する情報のうち、個人データ（個人情報保護法第１６条第３項）に該当するものついては、あらかじめユーザーの同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。但し、次の場合は除きます。
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>個人データの取扱いを外部に委託する場合</li>
          <li>サービスが買収された場合</li>
          <li>
            事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。）
          </li>
          <li>その他、法律によって合法的に第三者提供が許されている場合</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">アクセス解析ツール</h2>
        <p>
          本アプリは、ユーザーのアクセス解析のために、「Googleアナリティクス」を利用しています。Googleアナリティクスは、トラフィックデータの収集のためにCookieを使用しています。トラフィックデータは匿名で収集されており、個人を特定するものではありません。Cookieを無効にすれば、これらの情報の収集を拒否することができます。詳しくはお使いのブラウザの設定をご確認ください。Googleアナリティクスについて、詳しくは以下からご確認ください。
        </p>
        <p>
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp/"
            className="text-blue-500 underline"
          >
            https://marketingplatform.google.com/about/analytics/terms/jp/
          </a>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">
          プライバシーポリシーの変更
        </h2>
        <p>
          本アプリは、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">お問い合わせ</h2>
        <p>
          本ポリシーに関するお問い合わせは、以下の下記の窓口までお問い合わせください。
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScCpMgaDjU8M_GZ8jeZUI5c9DYgRBp2l437UBrvXks66XBwjw/viewform"
          className="text-blue-500 underline"
        >
          お問い合わせフォーム
        </Link>
      </section>

      <footer className="mt-8 text-center">
        <p>© 2024 FitApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
