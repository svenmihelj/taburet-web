import { useState, useRef } from "react";
import {
  Flex,
  Button,
  useDisclosure,
  // Drawer,
  // DrawerBody,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
} from "@chakra-ui/react";

import { SortSelect } from "./SortBar.elements";
import { FilterDrawerForm } from "../FilterDrawerForm/FilterDrawerForm";

import FilterIcon from "../../../assets/icons/ic-filter.svg";

export const SortBar = ({ onSortChange, ...rest }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [sort, setSort] = useState("default");
  const btnRef = useRef();

  const handleSort = (e) => {
    onSortChange(e.target.value);
    setSort(e.target.value);
  };

  return (
    <Flex w="full" py={8} justify="space-between" {...rest}>
      <Button
        ref={btnRef}
        onClick={onOpen}
        leftIcon={<FilterIcon />}
        variant="ghost"
      >
        Filter
      </Button>
      <SortSelect placeholder="Sort by" value={sort} onChange={handleSort}>
        <option value="date">New</option>
        <option value="name-desc">Name: A-Z</option>
        <option value="name-asc">Name: Z-A</option>
        <option value="price-desc">Price: low to high</option>
        <option value="price-asc">Price: high to low</option>
      </SortSelect>
      <FilterDrawerForm
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      />
      {/* <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Filter</DrawerHeader>

          <DrawerBody>
            <FilterForm />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Clear all
            </Button>
            <Button colorScheme="blue">View</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}
    </Flex>
  );
};
