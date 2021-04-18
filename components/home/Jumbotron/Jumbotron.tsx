import React, { FC } from "react";
import { Box, Heading, Text } from "theme-ui";

import { attributes } from "../../../content/home/jumbotron.md";

export const Jumbotron: FC = () => (
  <Box
    as="section"
    sx={{
      backgroundImage: `url('${attributes.bg_image}')`,
      backgroundSize: "cover",
      backgroundPosition: "0 -100px",
      height: "560px",
      position: "relative",
      color: "background",
    }}
  >
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        bg: "primary",
        opacity: "0.2",
      }}
    />
    <Box sx={{ position: "absolute", px: 7, py: 1 }}>
      <Heading as="h1">{attributes.title}</Heading>
      <Text as="p">{attributes.description}</Text>
      <a href="#">{attributes.Button}</a>
    </Box>
  </Box>
);
