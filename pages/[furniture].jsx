import React from "react";

import { Navbar } from "../components/shared/Navbar/Navbar";
import { Footer } from "../components/shared/Footer/Footer";
import { Meta } from "../components/shared/Meta/Meta";

// import { FurniturePreview } from "../components/furniture/FurniturePreview/FurniturePreview";

const FurniturePage = () => {
  return (
    <>
      <Meta />
      <Navbar />
      {/* <FurniturePreview /> */}
      <Footer />
    </>
  );
};

export default FurniturePage;
