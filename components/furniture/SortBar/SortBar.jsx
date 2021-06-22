import { useState, useRef } from "react";
import {
  Flex,
  Button,
  Badge,
  Box,
  useDisclosure,
  Select,
} from "@chakra-ui/react";

import { FilterDrawerForm } from "../FilterDrawerForm/FilterDrawerForm";

import FilterIcon from "../../../assets/icons/ic-filter.svg";

export const SortBar = ({ onSortChange, filter, handleSubmit, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sort, setSort] = useState("default");
  const btnRef = useRef();

  const handleSort = (e) => {
    onSortChange(e.target.value);
    setSort(e.target.value);
  };

  return (
    <Flex w="full" py={8} justify="space-between" {...rest}>
      <Box>
        <Button
          ref={btnRef}
          onClick={onOpen}
          leftIcon={<FilterIcon />}
          variant="ghost"
        >
          Filter
        </Button>
        {filter?.type?.length ? (
          <Badge mr={4}>Type: {filter.type.join(", ")}</Badge>
        ) : null}
        {filter?.price ? <Badge mr={4}>Price: {filter.price}€</Badge> : null}
        {filter?.material?.length ? (
          <Badge mr={4}>Material: {filter.material.join(", ")}</Badge>
        ) : null}
        {filter?.mechanism?.length ? (
          <Badge mr={4}>Mechanism: {filter.mechanism.join(", ")}</Badge>
        ) : null}
      </Box>
      <Select
        placeholder="Sort by"
        value={sort}
        onChange={handleSort}
        w="200px"
      >
        <option value="date">New</option>
        <option value="name-desc">Name: A-Z</option>
        <option value="name-asc">Name: Z-A</option>
        <option value="price-desc">Price: low to high</option>
        <option value="price-asc">Price: high to low</option>
      </Select>
      <FilterDrawerForm
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        handleSubmit={handleSubmit}
      />
    </Flex>
  );
};
