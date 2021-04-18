import React from "react";

import { Navbar } from "../components/shared/Navbar/Navbar.tsx";
import { Meta } from "../components/shared/Meta/Meta.tsx";

import { Jumbotron } from "../components/home/Jumbotron/Jumbotron.tsx";

const Home = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <Jumbotron />
    </>
  );
};

export default Home;
