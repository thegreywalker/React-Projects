import React from "react";
import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import { FaSun, FaMoon } from "react-icons/fa";


function App() {
  const [todos, setTodos] = React.useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

    const { colorMode, toggleColorMode } = useColorMode();

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

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
        icon={ colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
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
