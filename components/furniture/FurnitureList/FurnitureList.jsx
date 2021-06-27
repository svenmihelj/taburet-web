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
import { filterFurniture } from "../../../helpers/filter";

export const FurnitureList = ({ furniture }) => {
  const [sort, setSort] = useState();
  const [filter, setFilter] = useState();

  const furnitureList = useMemo(() => {
    if (!furniture?.length) {
      return null;
    }

    const filteredFurniture = filterFurniture(furniture, filter);

    if (sort === "name-asc") {
      return filteredFurniture.sort(nameCompateAsc);
    } else if (sort === "name-desc") {
      return filteredFurniture.sort(nameCompateDesc);
    } else if (sort === "price-asc") {
      return filteredFurniture.sort(priceCompareAsc);
    } else if (sort === "price-desc") {
      return filteredFurniture.sort(priceCompareDesc);
    } else if (sort === "date") {
      return filteredFurniture.sort(dateCompareDesc);
    }

    return filteredFurniture;
  }, [furniture, sort, filter]);

  if (!furnitureList) {
    return <Box>empty list</Box>;
  }

  return (
    <>
      <SortBar
        onSortChange={setSort}
        handleSubmit={setFilter}
        filter={filter}
        px={8}
      />
      <Flex
        as="section"
        wrap="wrap"
        justify="flex-start"
        px={{ base: 0, lg: 4 }}
      >
        {furnitureList.map((item) => (
          <FurnitureItem key={item.id} furniture={item} />
        ))}
      </Flex>
    </>
  );
};
