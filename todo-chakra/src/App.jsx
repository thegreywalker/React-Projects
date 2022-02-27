import React from "react";
import { Heading, VStack, IconButton } from "@chakra-ui/react";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import { FaSun } from "react-icons/fa";

const initialTodos = [
  {
    id: 1,
    body: "Start React Projects",
  },

  {
    id: 2,
    body: "Complete Chakra UI tutorial",
  },
];

function App() {
  const [todos, setTodos] = React.useState(initialTodos);

  const deleteTodos = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  const addTodo = (newTodo) => {
    setTodos(todo => {
      return [...todo, newTodo]
    })
  }

  return (
    <VStack p={4}>
      <IconButton
        icon={<FaSun />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodos={deleteTodos} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
}

export default App;
