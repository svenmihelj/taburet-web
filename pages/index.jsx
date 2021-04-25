import React from "react";

import { Navbar } from "../components/shared/Navbar/Navbar";
import { Meta } from "../components/shared/Meta/Meta";

import { Jumbotron } from "../components/home/Jumbotron/Jumbotron";
import { Favorites } from "../components/home/Favorites/Favorites";

const Home = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <Jumbotron />
      <Favorites />
    </>
  );
};

export default Home;
