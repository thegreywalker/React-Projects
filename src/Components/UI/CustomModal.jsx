import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export const CustomModal = ({
  onOpen,
  isOpen,
  onClose,
  taskName,
  taskDescription,
  id,
  handleClick
}) => {
  // State
  const [updatedTaskName, setUpdatedTaskName] = React.useState(taskName);
  const [updatedDescription, setUpdatedDescription] =
    React.useState(taskDescription);
  // Refs
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const nameRef = React.useRef();
  const descriptionRef = React.useRef();

  const handleModal = () => {
    handleClick(updatedTaskName, updatedDescription, id)
    onClose()
  }

  return (
    <Button onClick={onOpen}>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Task Name</FormLabel>
              <Input
                ref={nameRef}
                placeholder="Your Content..."
                value={updatedTaskName}
                onChange={() => setUpdatedTaskName(nameRef.current.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Your Description goes here ..."
                ref={descriptionRef}
                value={updatedDescription}
                onChange={() => setUpdatedDescription(descriptionRef.current.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              onClick={handleModal}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Button>
  );
};
