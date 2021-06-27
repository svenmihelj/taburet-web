import React from "react";
import { promises as fs } from "fs";
import path from "path";

import { Carousel } from "../../components/single-furniture/Carousel/Carousel";
import { FurnitureInfo } from "../../components/single-furniture/FurnitureInfo/FurnitureInfo";
import { Navbar } from "../../components/shared/Navbar/Navbar";
import { Footer } from "../../components/shared/Footer/Footer";
import { Meta } from "../../components/shared/Meta/Meta";

const FurniturePage = ({ content, footer }) => {
  if (!content?.title) {
    return <div>nista jos...</div>;
  }

  return (
    <>
      <Meta />
      <Navbar />
      <Carousel images={content.images} />
      <FurnitureInfo content={content} />
      <Footer content={footer} />
    </>
  );
};

export async function getStaticPaths() {
  const hrDir = path.join(process.cwd(), `content/hr/furniture`);
  const enDir = path.join(process.cwd(), `content/en/furniture`);
  const deDir = path.join(process.cwd(), `content/de/furniture`);
  const ruDir = path.join(process.cwd(), `content/ru/furniture`);

  const namesHr = await fs.readdir(hrDir);
  const namesEn = await fs.readdir(enDir);
  const namesDe = await fs.readdir(deDir);
  const namesRu = await fs.readdir(ruDir);

  return {
    paths: [
      ...namesHr.map((item) => ({
        params: { lng: "hr", id: item.split(".json")[0] },
      })),
      ...namesEn.map((item) => ({
        params: { lng: "en", id: item.split(".json")[0] },
      })),
      ...namesDe.map((item) => ({
        params: { lng: "de", id: item.split(".json")[0] },
      })),
      ...namesRu.map((item) => ({
        params: { lng: "ru", id: item.split(".json")[0] },
      })),
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { lng, id } = params;

  const postsDirectory = path.join(process.cwd(), `content/${lng}`);

  try {
    const content = await fs.readFile(
      `${postsDirectory}/furniture/${id}.json`,
      "utf8"
    );
    const jsonContent = JSON.parse(content);

    const footerContent = await fs.readFile(
      `${postsDirectory}/footer.json`,
      "utf8"
    );
    const jsonFooterContent = JSON.parse(footerContent);

    return {
      props: { content: jsonContent, footer: jsonFooterContent },
    };
  } catch (e) {
    return null;
  }
}

export default FurniturePage;
