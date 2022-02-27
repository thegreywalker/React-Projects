import React from 'react'
import { HStack, Button, Input } from "@chakra-ui/react"
import { nanoid } from 'nanoid';

const AddTodo = ({ addTodo }) => {
    const [content, setContent] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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