import React from "react";
import { promises as fs } from "fs";
import path from "path";

import { Carousel } from "../../components/single-furniture/Carousel/Carousel";
import { FurnitureInfo } from "../../components/single-furniture/FurnitureInfo/FurnitureInfo";
import { Navbar } from "../../components/shared/Navbar/Navbar";
import { Footer } from "../../components/shared/Footer/Footer";
import { Meta } from "../../components/shared/Meta/Meta";

const FurniturePage = (props) => {
  if (!props?.title) {
    return <div>nista jos...</div>;
  }

  return (
    <>
      <Meta />
      <Navbar />
      <Carousel images={props.images} />
      <FurnitureInfo content={props} />
      <Footer />
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

  const postsDirectory = path.join(
    process.cwd(),
    `content/${lng}/furniture/${id}.json`
  );

  try {
    const content = await fs.readFile(postsDirectory, "utf8");
    const jsonContent = JSON.parse(content);
    return {
      props: jsonContent,
    };
  } catch (e) {
    return null;
  }
}

export default FurniturePage;
