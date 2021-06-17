export const Checkbox = {
  parts: ["container", "control", "label", "icon"],
  baseStyle: {
    control: {
      boxShadow: "none!important",

      _checked: {
        bg: "gray.500",
        borderColor: "gray.500",
      },
    },
  },
};
