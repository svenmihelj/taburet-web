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

export const Footer = ({ content }) => {
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

        <NextLink
          href={{ pathname: "/[lng]/about", query: { lng: language } }}
          passHref
        >
          <Link
            fontSize="xl"
            my={4}
            ml={{ base: 8, lg: 24 }}
            sx={{ display: "block" }}
          >
            {content.about_text}
          </Link>
        </NextLink>
        <NextLink
          href={{ pathname: "/[lng]/delivery-info", query: { lng: language } }}
          passHref
        >
          <Link
            fontSize="xl"
            mb={4}
            ml={{ base: 8, lg: 24 }}
            sx={{ display: "block" }}
          >
            {content.delivery_text}
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
          {content.contact_title}
        </Heading>
        <FormControl id="name" mb={4}>
          <FormLabel>{content.name_label}</FormLabel>
          <Input type="text" name="name" />
        </FormControl>
        <FormControl id="email" mb={4}>
          <FormLabel>{content.email_label}</FormLabel>
          <Input type="email" name="email" />
        </FormControl>
        <FormControl id="message" mb={4}>
          <FormLabel>{content.message_label}</FormLabel>
          <Textarea name="message" />
        </FormControl>
        <Button type="submit">{content.submit_label}</Button>
      </Box>
    </Flex>
  );
};
