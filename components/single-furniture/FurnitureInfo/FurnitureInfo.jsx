import { Box, Heading, Text, Flex, Stack } from "@chakra-ui/react";

export const FurnitureInfo = ({ content }) => (
  <>
    <Box p={{ base: 8, lg: 16 }}>
      <Heading as="h3" size="lg">
        {content.title}
      </Heading>

      <Text my={4} fontSize="14px">
        {content.description}
      </Text>

      <Heading as="h4" size="xl">
        {content.price} €
      </Heading>
    </Box>

    <Stack
      bg="gray.50"
      py={8}
      px={{ base: 8, lg: 16 }}
      direction={{ base: "column", lg: "row" }}
    >
      <Box w={{ base: "100%", lg: "50%" }}>
        <Flex mb={4}>
          <Heading as="h5" size="sm" w="50%">
            Dimensions
          </Heading>
        </Flex>
        <Flex mb={4}>
          <Text w="40%">Height (cm)</Text>
          <Text w="60%" as="i">
            {content.height}
          </Text>
        </Flex>
        <Flex mb={4}>
          <Text w="40%">Length (cm)</Text>
          <Text w="60%" as="i">
            {content.lenght}
          </Text>
        </Flex>
        <Flex mb={4}>
          <Text w="40%">Width (cm)</Text>
          <Text w="60%" as="i">
            {content.width}
          </Text>
        </Flex>
      </Box>
      <Box w={{ base: "100%", lg: "50%" }}>
        <Flex mb={4}>
          <Heading as="h5" size="sm" w="50%">
            Details
          </Heading>
        </Flex>
        <Flex mb={4}>
          <Text w="40%">Material</Text>
          <Text w="60%" as="i">
            {content.material}
          </Text>
        </Flex>
        <Flex mb={4}>
          <Text w="40%">Mechanism</Text>
          <Text w="60%" as="i">
            {content.mechanism}
          </Text>
        </Flex>
        <Flex mb={4}>
          <Text w="50%"></Text>
        </Flex>
      </Box>
    </Stack>
  </>
);
