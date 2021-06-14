import { useState, useMemo } from "react";
import { Flex, Box } from "@chakra-ui/react";

import { FurnitureItem } from "../FurnitureItem/FurnitureItem";
import { SortBar } from "../SortBar/SortBar";
import {
  nameCompateDesc,
  nameCompateAsc,
  priceCompareAsc,
  priceCompareDesc,
} from "../../../helpers/sort";

export const FurnitureList = ({ furnitures }) => {
  const [sort, setSort] = useState();

  const furnitureList = useMemo(() => {
    if (!furnitures?.length) {
      return null;
    }

    console.log(furnitures);

    if (sort === "name-asc") {
      return furnitures.sort(nameCompateAsc);
    } else if (sort === "name-desc") {
      return furnitures.sort(nameCompateDesc);
    } else if (sort === "price-asc") {
      return furnitures.sort(priceCompareAsc);
    } else if (sort === "price-desc") {
      return furnitures.sort(priceCompareDesc);
    }

    return furnitures;
  }, [furnitures, sort]);

  if (!furnitureList) {
    return <Box>empty list</Box>;
  }

  return (
    <>
      <SortBar onSortChange={setSort} />
      <Flex as="section" wrap="wrap" justify="flex-start" px={4}>
        {furnitureList.map((item) => (
          <FurnitureItem key={item.id} furniture={item} />
        ))}
      </Flex>
    </>
  );
};
