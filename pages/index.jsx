import React from "react";
import NextLink from "next/link";
import { Heading, Link } from "@chakra-ui/react";

import { Navbar } from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";
import { Meta } from "../components/shared/Meta/Meta";

import { useContent } from "../context/ContentProvider";

const Home = () => {
  const { content } = useContent();

  return (
    <>
      <Meta />
      <Navbar />
      <Heading>{content?.home?.title}</Heading>
      {content?.furniture?.map((item) => (
        <NextLink href={item.id} key={item.id}>
          <Link>
            {item.title} <br />
          </Link>
        </NextLink>
      ))}
      <Footer />
    </>
  );
};

export default Home;
