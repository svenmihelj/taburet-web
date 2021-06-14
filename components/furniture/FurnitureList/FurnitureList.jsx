import { useState, useMemo } from "react";
import { Flex, Box } from "@chakra-ui/react";

import { FurnitureItem } from "../FurnitureItem/FurnitureItem";
import { SortBar } from "../SortBar/SortBar";
import {
  nameCompateDesc,
  nameCompateAsc,
  priceCompareAsc,
  priceCompareDesc,
  dateCompareDesc,
} from "../../../helpers/sort";

export const FurnitureList = ({ furnitures }) => {
  const [sort, setSort] = useState();

  const furnitureList = useMemo(() => {
    if (!furnitures?.length) {
      return null;
    }

    if (sort === "name-asc") {
      return [...furnitures].sort(nameCompateAsc);
    } else if (sort === "name-desc") {
      return [...furnitures].sort(nameCompateDesc);
    } else if (sort === "price-asc") {
      return [...furnitures].sort(priceCompareAsc);
    } else if (sort === "price-desc") {
      return [...furnitures].sort(priceCompareDesc);
    } else if (sort === "date") {
      return [...furnitures].sort(dateCompareDesc);
    }

    return furnitures;
  }, [furnitures, sort]);

  if (!furnitureList) {
    return <Box>empty list</Box>;
  }

  return (
    <>
      <SortBar onSortChange={setSort} px={8} />
      <Flex as="section" wrap="wrap" justify="flex-start" px={4}>
        {furnitureList.map((item) => (
          <FurnitureItem key={item.id} furniture={item} />
        ))}
      </Flex>
    </>
  );
};
