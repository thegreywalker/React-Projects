import { useProductsQuery } from "./Services/django-api";
import { Center, Box, Image, Flex, Badge, Text, Spinner } from "@chakra-ui/react";
import { MdStar } from "react-icons/md";

function App() {
  const { data, error, isLoading, isSuccess } = useProductsQuery();

  return (
    <div className="App">
      <Center h="10vh">
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          as="i"
        >
          All Products
        </Text>
      </Center>
      {isLoading && <Center h="100vh"> <Spinner size="xl" color="red.500" /> </Center> }
      {error && <h2>Error ...</h2>}
      {isSuccess && (
        <div>
          {data.map((product) => {
            return (
              <Center h="100vh" key={product.id}>
                <Box p="5" maxW="320px" borderWidth="1px">
                  <Image borderRadius="md" src={product.image1} />
                  <Flex align="baseline" mt={2}>
                    <Badge colorScheme="pink">Plus</Badge>
                    <Text
                      ml={2}
                      textTransform="uppercase"
                      fontSize="sm"
                      fontWeight="bold"
                      color="pink.800"
                    >
                      Verified &bull; Cape Town
                    </Text>
                  </Flex>
                  <Text
                    mt={2}
                    fontSize="xl"
                    fontWeight="semibold"
                    lineHeight="short"
                  >
                    {product.name}
                  </Text>
                  <Text mt={2}>$ {product.price}</Text>
                  <Flex mt={2} align="center">
                    <Box as={MdStar} color="orange.400" />
                    <Text ml={1} fontSize="sm">
                      <b>4.84</b> (190)
                    </Text>
                  </Flex>
                </Box>
              </Center>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
