import React from "react";
import { promises as fs } from "fs";
import path from "path";

import { Jumbotron } from "../../components/home/Jumbotron/Jumbotron";
import { FurnitureList } from "../../components/furniture/FurnitureList/FurnitureList";
import { Navbar } from "../../components/shared/Navbar/Navbar";
import { Footer } from "../../components/shared/Footer/Footer";
import { Meta } from "../../components/shared/Meta/Meta";

import { reduceFilterOptions } from "../../helpers/filterOptions";

const Home = ({ home, furniture, filterOptions }) => {
  return (
    <>
      <Meta />
      <Navbar />
      <Jumbotron content={home} />
      {/* <FurnitureList furniture={furniture} /> */}
      <Footer />
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
  const namesHr = await fs.readdir(`${postsDirectory}/furniture`);

  try {
    const homeContent = await fs.readFile(
      `${postsDirectory}/home.json`,
      "utf8"
    );
    const jsonHomeContent = JSON.parse(homeContent);

    const content = await Promise.all(
      namesHr.map(async (path) => {
        const items = await fs.readFile(
          `${postsDirectory}/furniture/${path}`,
          "utf8"
        );

        return {
          ...JSON.parse(items),
          id: path.replace(".json", ""),
        };
      })
    );

    const filterOptions = reduceFilterOptions(content);

    return {
      props: { home: jsonHomeContent, furniture: content, filterOptions },
    };
  } catch (e) {
    return null;
  }
}

export default Home;
