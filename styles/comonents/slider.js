export const Slider = {
  parts: ["container", "thumb", "track", "filledTrack"],
  baseStyle: {
    filledTrack: {
      bg: "gray.500",
    },
    thumb: {
      borderColor: "gray.500",
      outline: "gray.800",
      boxShadow: "none",

      _active: {
        borderColor: "gray.800",
        boxShadow: "none",
        outline: "none",
      },

      _focus: {
        boxShadow: "none",
        outline: "none",
      },
    },
  },
};
