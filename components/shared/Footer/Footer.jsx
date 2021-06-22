import {
  Box,
  Flex,
  Link,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";
import NextLink from "next/link";

export const Footer = () => (
  <Flex
    as="footer"
    justify="center"
    direction={{ base: "column", lg: "row" }}
    p={16}
    bg="gray.50"
    mt={32}
  >
    <Box w={{ base: "100%", lg: "50%" }} mb={16}>
      <Heading size="2xl" mb={8}>
        TABURET
      </Heading>
      <NextLink href="/about" passHref>
        <Link fontSize="xl" mb={4} sx={{ display: "block" }}>
          About
        </Link>
      </NextLink>
      <NextLink href="/delivery-info" passHref>
        <Link fontSize="xl" mb={4} sx={{ display: "block" }}>
          Delivery
        </Link>
      </NextLink>
    </Box>
    <Box
      as="form"
      name="contact"
      method="POST"
      data-netlify="true"
      w={{ base: "100%", lg: "50%" }}
    >
      <Heading as="h2" mb={8}>
        Contact us
      </Heading>
      <FormControl id="name" mb={4}>
        <FormLabel>Your Name</FormLabel>
        <Input type="text" name="name" />
      </FormControl>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input type="email" name="email" />
      </FormControl>
      <FormControl id="message" mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea name="message" />
      </FormControl>
      <Button type="submit">Send</Button>
    </Box>
  </Flex>
);
