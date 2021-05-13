import React, { useState } from "react";
import { Box, Flex, Image, Text, IconButton } from "theme-ui";
import { useRouter } from "next/router";

export const FavoriSliderItem = ({ favoriteItem, ...rest }) => {
  const router = useRouter();
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
          top: overlay ? "0px" : "-250px",
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
        onClick={() => router.push(favoriteItem.name)}
      >
        <Text as="p" sx={{ fontSize: 4 }}>
          {favoriteItem.title}
        </Text>
      </Flex>
      <Image
        sx={{ mx: "auto", height: "100%", display: "block" }}
        src={favoriteItem.images[0]}
      />
    </Box>
  );
};
