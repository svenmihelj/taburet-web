import {
  chakra,
  Flex,
  Box,
  LinkBox,
  LinkOverlay,
  Image,
} from "@chakra-ui/react";

export const FurnitureItem = ({ furniture, ...rest }) => (
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
        <LinkOverlay href={furniture.id}>
          <Image
            w="full"
            h={80}
            fit="cover"
            src={furniture.images[0]}
            alt="avatar"
          />
        </LinkOverlay>
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
        <Flex alignItems="center" justifyContent="space-between" py={4} px={6}>
          <chakra.span fontWeight="bold">{furniture.price} €</chakra.span>
          <chakra.button
            bg="gray.800"
            fontSize="xs"
            fontWeight="bold"
            color="white"
            px={2}
            py={1}
            rounded="lg"
            textTransform="uppercase"
            _hover={{
              bg: "gray.600",
            }}
            _focus={{
              bg: "gray.600",
              outline: "none",
            }}
          >
            Add to cart
          </chakra.button>
        </Flex>
      </Box>
    </Box>
  </Flex>
);
