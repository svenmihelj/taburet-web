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
  Image,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { useLanguage } from "../../../context/LanguageProvider";

export const Footer = () => {
  const { language } = useLanguage();

  return (
    <Flex
      as="footer"
      justify="center"
      direction={{ base: "column-reverse", lg: "row" }}
      p={{ base: 4, lg: 16 }}
      mt={32}
    >
      <Box w={{ base: "100%", lg: "50%" }} mt={{ base: 16, lg: 0 }}>
        <Image
          h={{ base: "80px", lg: "120px" }}
          mb={8}
          src={
            language === "hr" ? "/images/logo-hr.png" : "/images/logo-int.png"
          }
        />

        <NextLink href="/about" passHref>
          <Link
            fontSize="xl"
            my={4}
            ml={{ base: 8, lg: 24 }}
            sx={{ display: "block" }}
          >
            About
          </Link>
        </NextLink>
        <NextLink href="/delivery-info" passHref>
          <Link
            fontSize="xl"
            mb={4}
            ml={{ base: 8, lg: 24 }}
            sx={{ display: "block" }}
          >
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
};
