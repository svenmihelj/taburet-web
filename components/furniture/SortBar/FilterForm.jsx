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
} from "@chakra-ui/react";

import { useContent } from "../../../context/ContentProvider";

export const FilterForm = () => {
  const {
    content: { filterOptions },
  } = useContent();
  const [priceValue, setPriceValue] = useState(filterOptions.price.min);

  return (
    <>
      <Heading as="h4" size="sm" my={4}>
        Product type
      </Heading>
      <Stack spacing={10} direction="row">
        {filterOptions.types.map((item) => (
          <Checkbox value={item} key={item}>
            {item}
          </Checkbox>
        ))}
      </Stack>

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
      <Stack spacing={10} direction="row">
        {filterOptions.mechanism.map((item) => (
          <Checkbox value={item} key={item}>
            {item}
          </Checkbox>
        ))}
      </Stack>
    </>
  );
};
