import {
  chakra,
  Flex,
  Box,
  LinkBox,
  LinkOverlay,
  Image,
  IconButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useLanguage } from "../../../context/LanguageProvider";

import CartIcon from "../../../assets/icons/ic-cart.svg";

export const FurnitureItem = ({ furniture, ...rest }) => {
  const { language } = useLanguage();

  return (
    <Flex
      as="article"
      bg="white"
      p={8}
      w={{ md: "50%", sm: "100%", lg: "33%" }}
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      <Box bg="white" shadow="lg" rounded="lg" overflow="hidden" mx="auto">
        <LinkBox w="100%">
          <NextLink href={`${language}/${furniture.id}`} passHref>
            <LinkOverlay>
              <Image
                w="full"
                h={80}
                fit="cover"
                src={`/${furniture.images[0]}`}
                alt="avatar"
              />
            </LinkOverlay>
          </NextLink>
        </LinkBox>

        <Box textAlign="center">
          <chakra.h3
            py={4}
            textAlign="center"
            fontWeight="bold"
            textTransform="uppercase"
            color="gray.800"
            fontSize="lg"
          >
            {furniture.title}
          </chakra.h3>
          <Flex
            alignItems="center"
            justifyContent="space-between"
            py={4}
            px={6}
          >
            <chakra.span fontWeight="bold">{furniture.price} €</chakra.span>
            <IconButton
              size="sm"
              icon={<Box as={CartIcon} w="16px" h="16px" />}
              aria-label="add to cart"
              disabled
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};
