function variantSolid(props) {
  const { colorScheme: c } = props;

  return {
    color: "white",
    bg: "gray.700",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "gray.700",

    _hover: {
      bg: "gray.500",
      borderColor: "gray.500",
    },
  };
}

function variantOutline(props) {
  const { colorScheme: c } = props;

  return {
    bg: "transparent",
    color: "gray.700",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "gray.700",

    _hover: {
      color: "white",
      bg: "gray.500",
      borderColor: "gray.500",
    },
  };
}

function variantGhost(props) {
  const { colorScheme: c } = props;

  return {
    bg: "transparent",
    color: "gray.700",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",

    _hover: {
      color: "gray.500",
      bg: "transparent",
    },

    _active: {
      bg: "transparent",
    },
  };
}

export const Button = {
  baseStyle: {
    borderRadius: "sm",
  },
  variants: {
    solid: variantSolid,
    outline: variantOutline,
    ghost: variantGhost,
  },
  defaultProps: {
    variant: "solid",
  },
};
