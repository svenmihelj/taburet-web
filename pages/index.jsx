import { useRouter } from "next/router";
import React from "react";

const IndegPage = () => {
  const router = useRouter();

  if (typeof window !== "undefined") {
    router.replace(`/${localStorage.getItem("language") || "en"}`);
  }

  return <div />;
};

export default IndegPage;
