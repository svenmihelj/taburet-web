import React, { FC } from "react";
import { Flex, Box, Heading, BoxProps } from "theme-ui";

import LikeIcon from "../../../assets/icons/ic-heart.svg";

export const Navbar: FC<BoxProps> = () => (
  <Flex
    sx={{
      py: 2,
      px: 3,
      fontSize: 5,
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Heading as="h3">Taburet</Heading>
    <Box
      as={LikeIcon}
      sx={{
        ":hover": {
          cursor: "pointer",
        },
      }}
    />
  </Flex>
);
