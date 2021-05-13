import React from "react";
import { Box, Flex } from "theme-ui";

export const RoomType = () => (
  <Flex sx={{ my: 10, mx: 5, justifyContent: "space-around" }}>
    <Box sx={{ fontSize: 5 }}>Chair</Box>
    <Box sx={{ fontSize: 5 }}>Table</Box>
  </Flex>
);
