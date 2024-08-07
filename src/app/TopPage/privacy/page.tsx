import React from "react";
import Link from "next/link";
import PrivacyPolicy from "@/app/components/privacy/PrivacyPolicy";


const LoginPrivacyPolicyPage = () => {
  return (
    <div>
      <PrivacyPolicy />
      <div className="mb-10">
        <Link href="/" className="block mb-4">
          トップページに戻る
        </Link>
      </div>
    </div>
  );
};

export default LoginPrivacyPolicyPage;
