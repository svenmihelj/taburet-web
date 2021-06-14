import { Flex, Box, LinkBox, LinkOverlay } from "@chakra-ui/react";

import { FurnitureItem } from "../FurnitureItem/FurnitureItem";

export const FurnitureList = ({ furnitures }) => {
  if (!furnitures?.length) {
    return <Box>empty list</Box>;
  }

  return (
    <Flex as="section" wrap="wrap" justify="flex-start" px={4}>
      {furnitures.map((item) => (
        <FurnitureItem key={item.id} furniture={item} />
      ))}
    </Flex>
  );
};
