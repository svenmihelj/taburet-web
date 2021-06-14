import { useState } from "react";
import {
  Heading,
  Stack,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Flex,
  Text,
  CheckboxGroup,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { useContent } from "../../../context/ContentProvider";

export const FilterDrawerForm = (props) => {
  const {
    content: { filterOptions },
  } = useContent();
  const [typeValue, setTypeValue] = useState([]);
  const [priceValue, setPriceValue] = useState(filterOptions.price.min);
  const [mechanismValue, setMechanismValue] = useState([]);
  const [materialValue, setMaterialValue] = useState([]);

  return (
    <Drawer {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">Filter</DrawerHeader>

        <DrawerBody>
          <Heading as="h4" size="sm" my={4}>
            Product type
          </Heading>
          <CheckboxGroup value={typeValue} onChange={setTypeValue}>
            <Stack direction="column">
              {filterOptions.types.map((item) => (
                <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          <Heading as="h4" size="sm" my={4}>
            Price
          </Heading>
          <Flex justify="space-between">
            <Text>Min: {priceValue}€</Text>
            <Text>Max: {filterOptions.price.max}€</Text>
          </Flex>
          <Slider
            aria-label="slider-ex-1"
            value={priceValue}
            onChange={setPriceValue}
            min={filterOptions.price.min}
            max={filterOptions.price.max}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Heading as="h4" size="sm" my={4}>
            Mechanism type
          </Heading>
          <CheckboxGroup value={mechanismValue} onChange={setMechanismValue}>
            <Stack direction="column">
              {filterOptions.mechanism.map((item) => (
                <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
          <Heading as="h4" size="sm" my={4}>
            Material type
          </Heading>
          <CheckboxGroup value={materialValue} onChange={setMaterialValue}>
            <Stack direction="column">
              {filterOptions.material.map((item) => (
                <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>{" "}
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={props.onClose}>
            Clear all
          </Button>
          <Button colorScheme="blue">View</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
