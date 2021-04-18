import React from "react";
import Head from "next/head";

import { attributes } from "../content/home/jumbotron.md";

const Home = () => {
  return (
    <>
      <Head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <section
        style={{
          backgroundImage: `url('${attributes.bg_image}')`,
          backgroundSize: "cover",
          backgroundPosition: "0 -100px",
          height: "560px",
          color: "#222",
          padding: "40px 80px",
        }}
      >
        <h1>{attributes.title}</h1>
        <h3>{attributes.description}</h3>
        <a href="#">{attributes.Button}</a>
      </section>
    </>
  );
};

export default Home;
