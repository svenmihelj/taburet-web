import React from "react";
import { useRouter } from "next/router";

import { useLanguage } from "../context/LanguageProvider";

const IndegPage = () => {
  const { language } = useLanguage();
  const router = useRouter();

  if (typeof window !== "undefined") {
    router.replace(`/${language}/`);
  }

  return <div />;
};

export default IndegPage;
