import { useState } from "react";
import { Flex, Box, Text, HStack, Image } from "@chakra-ui/react";

import { Arrow, Dot } from "./Carousel.elements";

import ArrowIcon from "../../../assets/icons/ic-arrow.svg";

export const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = images.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center" mt={10}>
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="600px" w="full" {...carouselStyle}>
          {images.map((slide, i) => (
            <Box key={`slide-${i}`} boxSize="full" flex="none">
              <Image
                src={`/${slide}`}
                h="100%"
                mx="auto"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
        <Arrow left="0" onClick={prevSlide}>
          <Box as={ArrowIcon} sx={{ transform: "rotate(180deg)" }} />
        </Arrow>
        <Arrow right="0" onClick={nextSlide}>
          <Box as={ArrowIcon} />
        </Arrow>
        {slidesCount > 1 && (
          <HStack justify="center" pos="absolute" bottom="8px" w="full">
            {Array.from({ length: slidesCount }).map((_, slide) => (
              <Dot
                key={`dots-${slide}`}
                bg={
                  currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"
                }
                onClick={() => setSlide(slide)}
              />
            ))}
          </HStack>
        )}
      </Flex>
    </Flex>
  );
};
