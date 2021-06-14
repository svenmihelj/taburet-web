import React from "react";
import { Heading } from "@chakra-ui/react";

import { Navbar } from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";
import { Meta } from "../components/shared/Meta/Meta";

import { useSinglePageContent } from "../hooks/useSinglePageContent";

const FurniturePage = () => {
  const content = useSinglePageContent();

  if (!content) {
    return <div>nista jos...</div>;
  }

  return (
    <>
      <Meta />
      <Navbar />
      <Heading>{content.title}</Heading>
      <Footer />
    </>
  );
};

export default FurniturePage;
