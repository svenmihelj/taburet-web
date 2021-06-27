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
import { useTranslations } from "../../../context/TranslationProvider";

export const SortBar = ({ onSortChange, filter, handleSubmit, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    translations: {
      filter: { content },
    },
  } = useTranslations();
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
          {content.filter_title}
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
        placeholder={content.sort_new}
        value={sort}
        onChange={handleSort}
        w="200px"
      >
        <option value="date">{content.sort_new}</option>
        <option value="name-desc">{content.sort_name_asc}</option>
        <option value="name-asc">{content.sort_name_desc}</option>
        <option value="price-desc">{content.sort_price_asc}</option>
        <option value="price-asc">{content.sort_price_desc}</option>
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
