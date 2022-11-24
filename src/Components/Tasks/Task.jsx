import { Badge, Box, Container, useDisclosure } from "@chakra-ui/react";
import { CustomModal } from "../UI/CustomModal";

export const Task = ({
  taskName,
  taskDescription,
  handleDelete,
  id,
  handleClick,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClicks = (updatedTaskName, updatedDescription, id) => {
    handleClick(updatedTaskName, updatedDescription, id);
  };

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
          {taskName}
        </Badge>
        <Box my="4" fontSize="sm" w="100%">
          {taskDescription}
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
            onClick={handleDelete}
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
            onClick={onOpen}
          >
            Update
          </Box>
        </Box>
      </Box>
      {isOpen && (
        <CustomModal
          isOpen={isOpen}
          onClose={onClose}
          taskName={taskName}
          taskDescription={taskDescription}
          handleClick={handleClicks}
          id={id}
        />
      )}
    </Container>
  );
};
