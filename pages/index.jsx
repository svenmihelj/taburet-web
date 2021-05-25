import React from "react";

import { Navbar } from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";
import { Meta } from "../components/shared/Meta/Meta";

import { Jumbotron } from "../components/home/Jumbotron/Jumbotron";

const Home = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <Jumbotron />
      <Footer />
    </>
  );
};

export default Home;
