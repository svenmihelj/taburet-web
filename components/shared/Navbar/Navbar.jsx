import React from "react";
import {
  chakra,
  Box,
  Flex,
  Heading,
  IconButton,
  HStack,
  Button,
  VStack,
  CloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { LanguagePicker } from "./Navbar.elements";
import { useContent } from "../../../context/ContentProvider";

import CartIcon from "../../../assets/icons/ic-cart.svg";
import MenuIcon from "../../../assets/icons/ic-menu.svg";

const languages = [
  { value: "en", label: "English", icon: "🇬🇧" },
  { value: "hr", label: "Croatian", icon: "🇭🇷" },
  { value: "de", label: "Deutschland", icon: "🇩🇪" },
  { value: "ru", label: "Russina", icon: "🇷🇺" },
];

export const Navbar = () => {
  const { language, changeLanguage } = useContent();
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.h1 fontSize="xl">TABURET</chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              <IconButton
                aria-label="Cart"
                variant="ghost"
                icon={<CartIcon />}
                mr={6}
              />
              <LanguagePicker
                value={language}
                onChange={(e) => changeLanguage(e.target.value)}
              >
                {languages.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.icon}
                  </option>
                ))}
              </LanguagePicker>
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                variant="ghost"
                icon={<MenuIcon />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                bg="white"
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost" rightIcon={<CartIcon />}>
                  Cart
                </Button>
                <LanguagePicker
                  value={language}
                  onChange={(e) => {
                    changeLanguage(e.target.value);
                    mobileNav.onClose();
                  }}
                >
                  {languages.map((item) => (
                    <option value={item.value} key={item.value}>
                      {item.icon} {item.label}
                    </option>
                  ))}
                </LanguagePicker>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
