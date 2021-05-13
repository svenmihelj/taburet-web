import React from "react";

import { Navbar } from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";
import { Meta } from "../components/shared/Meta/Meta";

import { Jumbotron } from "../components/home/Jumbotron/Jumbotron";
import { Favorites } from "../components/home/Favorites/Favorites";
import { Advertisement } from "../components/home/Advertisement/Advertisement";
import { RoomType } from "../components/home/RoomType/RoomType";

const Home = () => {
  return (
    <>
      <Meta />
      <Navbar />
      <Jumbotron />
      <Favorites />
      <Advertisement />
      <RoomType />
      <Footer />
    </>
  );
};

export default Home;
