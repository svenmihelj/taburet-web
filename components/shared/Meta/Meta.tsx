import React, { FC } from "react";
import Head from "next/head";

export const Meta: FC = () => (
  <Head>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
  </Head>
);
