import React from "react";
import { Flex, Box, Heading } from "theme-ui";

import CartIcon from "../../../assets/icons/ic-cart.svg";

export const Navbar = () => (
  <Flex
    sx={{
      py: 2,
      px: 5,
      fontSize: 5,
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Heading as="h3" color="primary" sx={{ fontSize: 5 }}>
      TABURET
    </Heading>
    <Box
      as={CartIcon}
      sx={{
        ":hover": {
          cursor: "pointer",
        },
      }}
    />
  </Flex>
);
