import { chakra } from "@chakra-ui/react";

export const Arrow = chakra("div", {
  baseStyle: {
    cursor: "pointer",
    pos: "absolute",
    top: "40%",
    w: "auto",
    px: 2,
    py: 16,
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "sm",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "gray.500",
    },
  },
});

export const Dot = chakra("div", {
  baseStyle: {
    cursot: "pointer",
    boxSize: { base: "4px", lg: "8px" },
    borderRadius: "50%",
    display: "inline-block",
    transition: "background-color .6s ease",

    _hover: {
      bg: "gray.800",
    },
  },
});
