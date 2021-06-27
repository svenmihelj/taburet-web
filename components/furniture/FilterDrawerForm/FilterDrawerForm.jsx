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

import { useTranslations } from "../../../context/TranslationProvider";

export const FilterDrawerForm = ({ handleSubmit, ...rest }) => {
  const {
    translations: {
      filter: { filterOptions, content },
    },
  } = useTranslations();
  const [typeValue, setTypeValue] = useState([]);
  const [priceValue, setPriceValue] = useState(0);
  const [mechanismValue, setMechanismValue] = useState([]);
  const [materialValue, setMaterialValue] = useState([]);

  const resetFilterState = () => {
    setTypeValue([]);
    setPriceValue(filterOptions.price.max);
    setMechanismValue([]);
    setMaterialValue([]);
  };

  return (
    <Drawer {...rest}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          {content.filter_title}
        </DrawerHeader>

        <DrawerBody>
          <Heading as="h4" size="sm" my={4}>
            {content.filter_product_type_title}
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
            {content.filter_price_title}
          </Heading>
          <Flex justify="space-between">
            <Text>
              {content.filter_price_min_label}: {filterOptions.price.min}€
            </Text>
            <Text>
              {content.filter_price_max_label}: {priceValue}€
            </Text>
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
            {content.filter_mechanism_type_title}
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
            {content.filter_material_type_title}
          </Heading>
          <CheckboxGroup value={materialValue} onChange={setMaterialValue}>
            <Stack direction="column">
              {filterOptions.material.map((item) => (
                <Checkbox value={item} key={item}>
                  {item}
                </Checkbox>
              ))}
            </Stack>
          </CheckboxGroup>
        </DrawerBody>

        <DrawerFooter>
          <Button
            variant="outline"
            mr={3}
            onClick={() => {
              handleSubmit();
              rest.onClose();
              resetFilterState();
            }}
          >
            {content.filter_btn_clear}
          </Button>
          <Button
            onClick={() => {
              handleSubmit({
                type: typeValue,
                price: priceValue,
                mechanism: mechanismValue,
                material: materialValue,
              });
              rest.onClose();
              resetFilterState();
            }}
          >
            {content.filter_btn_submit}
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
