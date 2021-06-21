import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Heading,
} from "@chakra-ui/react";

export const Footer = () => (
  <Box as="footer" justify="center" py={8} bg="gray.50" mt={32}>
    <Box
      as="form"
      name="contact"
      method="POST"
      data-netlify="true"
      w="400px"
      mx="auto"
    >
      <Heading as="h2" mb={8}>
        Contact us
      </Heading>
      <FormControl id="name" mb={4}>
        <FormLabel>Your Name</FormLabel>
        <Input bg="white" type="text" name="name" />
      </FormControl>
      <FormControl id="email" mb={4}>
        <FormLabel>Email address</FormLabel>
        <Input bg="white" type="email" name="email" />
      </FormControl>
      <FormControl id="message" mb={4}>
        <FormLabel>Message</FormLabel>
        <Textarea bg="white" name="message" />
      </FormControl>
      <Button type="submit">Send</Button>
    </Box>
  </Box>
);
