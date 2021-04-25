import React, { useState } from "react";
import { Box, Flex, Image, Text, IconButton } from "theme-ui";

export const FavoriSliderItem = ({ favoriteItem, ...rest }) => {
  const [overlay, setOverlay] = useState(false);

  return (
    <Box
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
      sx={{
        position: "relative",
        flex: "0 0 40%",
        mr: 2,
        height: "200px",
        cursor: "pointer",
      }}
      {...rest}
    >
      <Flex
        style={{
          top: overlay ? "0px" : "-200px",
        }}
        sx={{
          backgroundColor: "rgba(34, 34, 34, 0.4)",
          width: "100%",
          height: "100%",
          position: "absolute",
          left: "0px",
          transition: "all 0.4s ease-in-out",
          color: "secondary",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text as="p" sx={{ fontSize: 4 }}>
          {favoriteItem.title}
        </Text>
      </Flex>
      <Image
        sx={{ mx: "auto", height: "100%", display: "block" }}
        src={favoriteItem.images[0]}
      />
      {/* <Flex
        sx={{
          justifyContent: "space-between",
          width: "200px",
          mx: "auto",
        }}
      >
        <Text as="p">{favoriteItem.title}</Text>
        <Text as="p">{favoriteItem.price}</Text>
      </Flex> */}
    </Box>
  );
};
