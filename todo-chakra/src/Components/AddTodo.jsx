import React from 'react'
import { HStack, Button, Input, useToast } from "@chakra-ui/react"
import { nanoid } from 'nanoid';

const AddTodo = ({ addTodo }) => {
    const [content, setContent] = React.useState('');
    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!content) {
            toast({
                title: 'No Content Given!!',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        const todo = {
            id: nanoid(),
            body: content
        }
        addTodo(todo);
        setContent('');
    }



  return (
    <form onSubmit={handleSubmit} >
        <HStack mt="8">
            <Input variant="filled" placeholder='Add A TODO' value={content} onChange={(e) => setContent(e.target.value)} />
            <Button colorScheme="pink" px="8" type="submit" >Add Todo</Button>
        </HStack>
    </form>
  )
}

export default AddTodo