import { chakra } from "@chakra-ui/react";

export const LanguagePicker = chakra("select", {
  baseStyle: {
    outline: "none",
    boxShadow: "none",
    fontWeight: "bold",

    fontSize: { md: "2xl", sm: "md" },
  },
});
