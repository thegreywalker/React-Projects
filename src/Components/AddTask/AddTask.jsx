import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";

export const AddTask = () => {
  const toast = useToast();

  return (
    <Container maxW="2xl">
      <Box
        w="100%"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        borderStartColor="blue.300"
        borderStartWidth="3px"
        p="10"
        pl="5"
        borderEndColor="yellow.400"
        borderEndWidth="3px"
      >
        <FormControl isRequired>
          <FormLabel>Task Name</FormLabel>
          <Box px="3">
            <Input variant="filled" placeholder="Type..." />
          </Box>
        </FormControl>
        <FormControl>
          <FormLabel>Descripton</FormLabel>
          <Box px="3" w="100%" display="flex" gap="6">
            <Input variant="filled" placeholder="Describe Your Task!" />
            <Button
              colorScheme="purple"
              w="20%"
              onClick={() =>
                toast({
                  title: "Chore Added.",
                  description: "We've added the task for you!",
                  status: "success",
                  duration: 2000,
                  isClosable: true,
                })
              }
            >
              Submit
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Container>
  );
};
