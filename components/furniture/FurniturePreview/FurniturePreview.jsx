import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Heading, Flex, Text, Image } from "theme-ui";

function useFurniture() {
  const [furniture, setFurniture] = useState();
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.furniture) {
      import(`../../../content/furniture/${router.query.furniture}.md`).then(
        (data) => {
          setFurniture({ ...data.attributes, name: router.query.furniture });
        }
      );
    }
  }, [router]);

  return furniture;
}
export const FurniturePreview = () => {
  const attributes = useFurniture();

  if (!attributes) {
    return <Box>Loading....</Box>;
  }

  return (
    <>
      <Text as="p" sx={{ mx: 5, mt: 5 }}>
        {`${attributes.type} > ${attributes.title}`}
      </Text>

      <Flex>
        <Box sx={{ width: "60%" }}>
          {attributes.images.map((image) => (
            <Image key={image} src={image} />
          ))}
        </Box>
        <Box sx={{ width: "40%", px: 4 }}>
          <Heading as="h2">{attributes.title}</Heading>
          <Text as="p">{attributes.description}</Text>
          <Text as="p" sx={{ fontSize: 3 }}>
            <strong>{attributes.price} $</strong>
          </Text>
        </Box>
      </Flex>
      <Flex sx={{ width: "100%", mx: 5, my: 10 }}>
        <Box sx={{ width: "50%" }}>
          <Heading as="h2">Dimensions</Heading>
          <Text as="p" my={1}>
            <strong>Height(cm): --</strong>
          </Text>
          <Text as="p" my={1}>
            <strong>Width(cm): --</strong>
          </Text>
          <Text as="p" my={1}>
            <strong>Depth(cm): --</strong>
          </Text>
          <Text as="p" my={1}>
            <strong>Weight(kg): --</strong>
          </Text>
          <Text as="p" my={1}>
            <strong>Package dimension: --</strong>
          </Text>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Heading as="h2">Details</Heading>
          <Text as="p" my={1}>
            <strong>Assembly: --</strong>
          </Text>
          <Text as="p" my={1}>
            <strong>Material: --</strong>
          </Text>
        </Box>
      </Flex>
    </>
  );
};
