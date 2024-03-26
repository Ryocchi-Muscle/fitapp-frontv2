// app/mission.page.tsx
import React from "react";
import Link from "next/link";
import Footer from "@/app/components/layout/Footer";

export default function MissionPage() {
  return (
    <div>
      <h1>動画検索</h1>
      <p>ここに日々のミッションに関する内容を表示します。</p>
      <Link href="/">ホームに戻る</Link>
      <Footer />
    </div>
  );
}
