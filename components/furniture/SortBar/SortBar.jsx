import { useState } from "react";
import { Box, Select } from "@chakra-ui/react";

export const SortBar = ({ onSortChange }) => {
  const [sort, setSort] = useState("default");

  const handleSort = (e) => {
    onSortChange(e.target.value);
    setSort(e.target.value);
  };

  return (
    <Box w="full">
      <Select w="xs" placeholder="Sort by" value={sort} onChange={handleSort}>
        {/* <option value="default">Our pick</option> */}
        <option value="date">New</option>
        <option value="name-desc">Name: A-Z</option>
        <option value="name-asc">Name: Z-A</option>
        <option value="price-desc">Price: low to high</option>
        <option value="price-asc">Price: high to low</option>
      </Select>
    </Box>
  );
};
