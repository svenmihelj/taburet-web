import React from "react";
import { promises as fs } from "fs";
import path from "path";

import { Navbar } from "../../components/shared/Navbar/Navbar";
import { Footer } from "../../components/shared/Footer/Footer";
import { Meta } from "../../components/shared/Meta/Meta";

const Delivery = ({ footer }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <Footer content={footer} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { lng: "hr" } },
      { params: { lng: "en" } },
      { params: { lng: "de" } },
      { params: { lng: "ru" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { lng } = params;

  const postsDirectory = path.join(process.cwd(), `content/${lng}`);

  try {
    const footerContent = await fs.readFile(
      `${postsDirectory}/footer.json`,
      "utf8"
    );
    const jsonFooterContent = JSON.parse(footerContent);

    return {
      props: {
        footer: jsonFooterContent,
      },
    };
  } catch (e) {
    return null;
  }
}

export default Delivery;
