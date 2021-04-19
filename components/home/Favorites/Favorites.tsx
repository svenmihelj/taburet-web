import React, { FC, useEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  Container,
  Flex,
  Heading,
  Image,
  IconButton,
} from "theme-ui";
import Slider from "react-slick";

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

export const Favorites: FC = () => {
  const favorites = useFavorites(attributes.favorit_furniture);
  const slickRef = useRef<Slider>();

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
            }}
            onClick={() => slickRef?.current?.slickPrev()}
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
            onClick={() => slickRef?.current?.slickNext()}
          >
            <RightIcon />
          </IconButton>
        </Box>
      </Flex>

      {favorites?.length ? (
        <Slider
          ref={slickRef}
          {...{
            className: "center",
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            speed: 500,
          }}
        >
          {favorites.map((item) => (
            <Box key={item.title} sx={{ width: "360px" }}>
              <Image
                sx={{ height: "200px", mx: "auto" }}
                src={item.images[0]}
              />
              <Flex
                sx={{
                  justifyContent: "space-between",
                  width: "200px",
                  mx: "auto",
                }}
              >
                <Text as="p">{item.title}</Text>
                <Text as="p">{item.price}</Text>
              </Flex>
            </Box>
          ))}
        </Slider>
      ) : (
        <Box>Loading</Box>
      )}
    </Box>
  );
};
