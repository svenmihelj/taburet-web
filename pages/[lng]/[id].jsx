import React from "react";
import { promises as fs } from "fs";
import path from "path";

import { Carousel } from "../../components/single-furniture/Carousel/Carousel";
import { FurnitureInfo } from "../../components/single-furniture/FurnitureInfo/FurnitureInfo";
import { Navbar } from "../../components/shared/Navbar/Navbar";
import { Footer } from "../../components/shared/Footer/Footer";
import { Meta } from "../../components/shared/Meta/Meta";

import { useSinglePageContent } from "../../hooks/useSinglePageContent";

const FurniturePage = (props) => {
  console.log("PROPS", props);

  // const content = useSinglePageContent();

  // if (!content) {
  //   return <div>nista jos...</div>;
  // }

  return (
    <>
      <Meta />
      <Navbar />
      {/* <Carousel images={content.images} />
      <FurnitureInfo content={content} /> */}
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  return {
    // Only `/posts/1` and `/posts/2` are generated at build time
    paths: [],
    // Enable statically generating additional pages
    // For example: `/posts/3`
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { lng, id } = params;

  const postsDirectory = path.join(
    process.cwd(),
    `content/${lng}/furniture/${id}.md`
  );

  if (fs.exists(path)) {
    const content = await fs.readFile(postsDirectory, "utf8");
    console.log(JSON.stringify(content));
  }
  // console.log(`/content/${lng}/furniture/${id}.md`);

  // const content = await import(`../../content/${lng}/furniture/${id}.md`);
  // console.log(content);

  return {
    props: {},
  };
}

export default FurniturePage;
