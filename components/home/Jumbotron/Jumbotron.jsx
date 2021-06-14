import { Box, Icon, chakra, Image, Link } from "@chakra-ui/react";

export const Jumbotron = ({ content }) => {
  if (!content) {
    return <div>loading</div>;
  }

  return (
    <Box as="section" pos="relative" overflow="hidden" bg="white">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          maxW={{ lg: "2xl" }}
          w={{ lg: "full" }}
          zIndex={1}
          bg="white"
          border="solid 1px transparent"
        >
          <Icon
            display={{ base: "none", lg: "block" }}
            position="absolute"
            right="-1px"
            top="-1px"
            bottom={0}
            h="full"
            w={48}
            transform="translateX(50%)"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            color="white"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </Icon>
          <Box
            mx="auto"
            maxW={{ base: "7xl" }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              w="full"
              textAlign={{ sm: "center", lg: "left" }}
              justifyContent="center"
              alignItems="center"
            >
              <chakra.h1
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color="gray.900"
              >
                {content.title}
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                fontSize={{ sm: "lg", md: "xl" }}
                maxW={{ sm: "xl" }}
                mx={{ sm: "auto", lg: 0 }}
                color="gray.500"
              >
                {content.description}
              </chakra.p>

              <Box
                mt={{ base: 5, sm: 8 }}
                display={{ sm: "flex" }}
                justifyContent={{ sm: "center", lg: "start" }}
                fontWeight="extrabold"
              >
                {content.link_text && (
                  <Box mt={[3, 0]} ml={[null, 3]}>
                    <Link href={content.link_url}>{content.link_text}</Link>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={{ lg: "absolute" }}
        top={{ lg: 0 }}
        bottom={{ lg: 0 }}
        right={{ lg: 0 }}
        w={{ lg: "50%" }}
      >
        <Image
          h={[56, 72, 96, "full"]}
          w="full"
          fit="cover"
          src={content.bg_image}
          alt=""
          loading="lazy"
        />
      </Box>
    </Box>
  );
};
