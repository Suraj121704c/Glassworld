import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";
import { Footer2 } from "../Footer/Footer2";
import NavBar from "../NavBar/NavBar";

const ArticleList = () => {
  return (
    <>
    <NavBar />
      <Container maxW={"7xl"} p="12">
        <Heading as="h1">Stories by Glass Wear Team</Heading>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flex="1"
            marginRight="3"
            position="relative"
            alignItems="center"
          >
            <Box
              width={{ base: "100%", sm: "85%" }}
              zIndex="2"
              marginLeft={{ base: "0", sm: "5%" }}
              marginTop="5%"
            >
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  borderRadius="lg"
                  src={
                    "https://breakbrunch.com/wp-content/uploads/2019/08/sexy-girl-with-glasses-070719-14.jpg"
                  }
                  alt="some good alt text"
                  objectFit="contain"
                />
              </Link>
            </Box>
            <Box zIndex="1" width="100%" position="absolute" height="100%">
              <Box
                bgGradient={useColorModeValue(
                  "radial(orange.600 1px, transparent 1px)",
                  "radial(orange.300 1px, transparent 1px)"
                )}
                backgroundSize="20px 20px"
                opacity="0.4"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            {/* <BlogTags tags={['Engineering', 'Product']} /> */}
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                About Our First Customer
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            {/* <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} /> */}
          </Box>
        </Box>
        <Heading as="h2" marginTop="5">
          Latest News
        </Heading>
        <hr />
        <Divider marginTop="5" />
        <Wrap spacing="30px" marginTop="5">
          <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={
                      "https://cdn.shopify.com/s/files/1/1045/8368/files/Robert-Downey-Jr-Wearing-Garrett-Leight-Grayson-Blue-Tinted-Sunglasses.jpg?v=1664205793"
                    }
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              </Box>
              {/* <BlogTags tags={['Engineering', 'Product']} marginTop="3" /> */}
              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  Our Brand Ambasder
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Text>
              {/* <BlogAuthor
              name="John Doe"
              date={new Date('2021-04-06T19:01:27Z')}
            /> */}
            </Box>
          </WrapItem>
        </Wrap>
        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
          <Heading as="h2">Our Gratest Achievement</Heading>
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
            pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
            imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
            sapien. Suspendisse placerat vulputate posuere. Curabitur neque
            tortor, mattis nec lacus non, placerat congue elit.
          </Text>
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
            pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
            imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
            sapien. Suspendisse placerat vulputate posuere. Curabitur neque
            tortor, mattis nec lacus non, placerat congue elit.
          </Text>
          <Text as="p" fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            condimentum quam arcu, eu tempus tortor molestie at. Vestibulum
            pretium condimentum dignissim. Vestibulum ultrices vitae nisi sed
            imperdiet. Mauris quis erat consequat, commodo massa quis, feugiat
            sapien. Suspendisse placerat vulputate posuere. Curabitur neque
            tortor, mattis nec lacus non, placerat congue elit.
          </Text>
        </VStack>
      </Container>
      <Footer2 />
    </>
  );
};

export default ArticleList;
