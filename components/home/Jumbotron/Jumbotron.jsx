import React from "react";
import { Box, Heading, Text, Link, Container } from "theme-ui";

import { attributes } from "../../../content/home.md";

export const Jumbotron = () => (
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
        opacity: "0.3",
      }}
    />
    <Container sx={{ position: "relative", py: 1, mx: 5 }}>
      <Heading as="h1" variant="jumbotron.heading" my={2}>
        {attributes.title}
      </Heading>
      <Text as="p" mb={1} variant="jumbotron.subheading">
        {attributes.description}
      </Text>
      <Link sx={{ fontSize: 4, color: "secondary" }} href={attributes.link_url}>
        {attributes.link_text}
      </Link>
    </Container>
  </Box>
);