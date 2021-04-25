import React, { useEffect, useCallback, useState } from "react";
import { Box, Flex, Heading, IconButton } from "theme-ui";
import { useEmblaCarousel } from "embla-carousel/react";

import { FavoriSliderItem } from "../FavoriSliderItem/FavoriSliderItem";

import { attributes } from "../../../content/home/favorites.md";
import LeftIcon from "../../../assets/icons/ic-left.svg";
import RightIcon from "../../../assets/icons/ic-right.svg";

function useFavorites(favorites) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    Promise.all(
      favorites.map((item) =>
        import(`../../../content/furniture/${item}.md`).then(
          (data) => data.attributes
        )
      )
    ).then((data) => {
      setItems(data);
    });
  }, []);

  return items;
}

export const Favorites = () => {
  const favorites = useFavorites(attributes.favorit_furniture);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Box as="section" sx={{ my: 4, ml: 5 }}>
      <Flex sx={{ justifyContent: "space-between", pr: 6 }}>
        <Heading as="h2" my={2} variant="favorites.heading">
          {attributes.title}
        </Heading>
        <Box>
          <IconButton
            aria-label="previus button"
            sx={{
              cursor: "pointer",
              outline: "none",
              display: "inline-block",
              mr: 2,
            }}
            onClick={scrollPrev}
          >
            <Box as={LeftIcon} />
          </IconButton>
          <IconButton
            aria-label="next button"
            sx={{
              cursor: "pointer",
              outline: "none",
              display: "inline-block",
            }}
            onClick={scrollNext}
          >
            <RightIcon />
          </IconButton>
        </Box>
      </Flex>

      {favorites?.length ? (
        <Box sx={{ overflow: "hidden" }} ref={emblaRef}>
          <Flex>
            {favorites.map((item) => (
              <FavoriSliderItem favoriteItem={item} key={item.title} />
            ))}
          </Flex>
        </Box>
      ) : (
        <Box>Loading</Box>
      )}
    </Box>
  );
};
