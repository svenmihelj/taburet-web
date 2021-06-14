import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import { Jumbotron } from "../components/home/Jumbotron/Jumbotron";
import { FurnitureList } from "../components/furniture/FurnitureList/FurnitureList";
import { Navbar } from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";
import { Meta } from "../components/shared/Meta/Meta";

import { useContent } from "../context/ContentProvider";

const Home = () => {
  const { content } = useContent();
  console.log(content);

  return (
    <>
      <Meta />
      <Navbar />
      <Jumbotron content={content.home} />
      <FurnitureList furnitures={content.furniture} />
    </>
  );
};

export default Home;
