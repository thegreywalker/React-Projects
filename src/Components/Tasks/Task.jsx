import { Badge, Box, Container } from "@chakra-ui/react";

export const Task = ({ taskNo }) => {
  return (
    <Container maxW="2xl" centerContent>
      <Box
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderTopColor="yellow.300"
        borderTopWidth="3px"
        p="4px"
      >
        <Badge mx="2" my="2" px="2" colorScheme="teal" fontSize="lg">
          Task {taskNo}
        </Badge>
        <Box my="4" fontSize="sm" w="100%">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Box>
        <Box
          display="flex"
          alignItems="baseline"
          flexDirection="row-reverse"
          mx="5"
          my="3"
          gap="2"
        >
          <Box
            p="1"
            borderWidth="1px"
            borderRadius="full"
            maxW="lg"
            bg="red.500"
            fontStyle="italic"
            fontWeight="bold"
            fontSize="sm"
            cursor="pointer"
          >
            Delete
          </Box>
          <Box
            p="1"
            borderWidth="1px"
            borderRadius="full"
            maxW="lg"
            bg="blue.300"
            fontStyle="italic"
            fontWeight="bold"
            fontSize="sm"
            cursor="pointer"
          >
            Update
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
