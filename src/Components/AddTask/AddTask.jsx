import React from "react";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  useToast,
} from "@chakra-ui/react";

export const AddTask = (props) => {
  // State
  const [taskName, setTaskName] = React.useState("");
  const [desciption, setDescription] = React.useState("");
  // Refs
  const nameRef = React.useRef("");
  const descriptionRef = React.useRef("");
  const toast = useToast();

  const handleSubmit = () => {
    toast({
      title: "Chore Added.",
      description: "We've added the task for you!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });

    props.getData(nameRef.current.value, descriptionRef.current.value);
    nameRef.current.value = "";
  };

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
              <Input
                variant="filled"
                placeholder="Type..."
                ref={nameRef}
                value={taskName}
                onChange={() => {
                  setTaskName(nameRef.current.value);
                }}
              />
            </Box>
          </FormControl>
          <FormControl>
            <FormLabel>Descripton</FormLabel>
            <Box px="3" w="100%" display="flex" gap="6">
              <Input
                variant="filled"
                placeholder="Describe Your Task!"
                ref={descriptionRef}
                value={desciption}
                onChange={() => {
                  setDescription(descriptionRef.current.value);
                }}
              />
              <Button
                colorScheme="purple"
                w="20%"
                onClick={handleSubmit}
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </FormControl>
      </Box>
    </Container>
  );
};
