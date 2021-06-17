import React from "react";
// import { Image } from "@chakra-ui/react";

import { Carousel } from "../components/single-furniture/Carousel/Carousel";
import { FurnitureInfo } from "../components/single-furniture/FurnitureInfo/FurnitureInfo";
import { Navbar } from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";
import { Meta } from "../components/shared/Meta/Meta";

import { useSinglePageContent } from "../hooks/useSinglePageContent";

const FurniturePage = () => {
  const content = useSinglePageContent();

  if (!content) {
    return <div>nista jos...</div>;
  }
  console.log(content);
  return (
    <>
      <Meta />
      <Navbar />
      <Carousel images={content.images} />
      <FurnitureInfo content={content} />

      <Footer />
    </>
  );
};

export default FurniturePage;
