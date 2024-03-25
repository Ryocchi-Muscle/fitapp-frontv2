// app/mission.page.tsx
import React from "react";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <h1> トレーニング解説</h1>
        <p>ここに日々のミッションに関する内容を表示します。</p>
        <Link href="/">ホームに戻る</Link>
      </div>
      <Footer />
    </div>
  );
}