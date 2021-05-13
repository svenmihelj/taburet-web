import React from "react";
import { Box, Flex, Heading, Text, Link, Divider } from "theme-ui";

import { attributes } from "../../../content/home/advertisement.md";

export const Advertisement = () => (
  <Flex as="section" mt={10}>
    <Box
      sx={{
        backgroundImage: `url('${attributes.bg_image}')`,
        backgroundSize: "cover",
        height: "600px",
        width: "60%",
      }}
    />
    <Box sx={{ width: "40%", px: 6 }}>
      <Divider />
      <Heading as="h1" my={2}>
        {attributes.title}
      </Heading>
      <Text as="p" mb={1}>
        {attributes.description}
      </Text>
      <Link href={attributes.link_url}>{attributes.link_text}</Link>
    </Box>
  </Flex>
);
