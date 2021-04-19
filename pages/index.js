import React from "react";

import { Navbar } from "../components/shared/Navbar/Navbar.tsx";
import { Meta } from "../components/shared/Meta/Meta.tsx";

import { Jumbotron } from "../components/home/Jumbotron/Jumbotron.tsx";
import { Favorites } from "../components/home/Favorites/Favorites.tsx";

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
