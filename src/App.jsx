import React from "react";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Container,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import { FaSun } from "react-icons/fa";
import { AddTask } from "./Components/AddTask/AddTask";
import { AllTasks } from "./Components/Tasks/AllTasks";

function App() {
  // State 
  const [taskData, setTaskData] = React.useState([]);

  // Chakra Specific imports
  const { colorMode, toggleColorMode } = useColorMode();


  const getTask = (name, desciption) => {
    setTaskData(oldSnap => [ ...oldSnap, {taskName: name, description: desciption, id: Math.random.toString()} ])
  };

  const handleDelete = (id) => {
    setTaskData(oldSnap => oldSnap.filter(task => task.id !== id))
  }

  return (
    <Container maxW="2xl" marginY="2" size="30">
      <Box display="flex" flexDir="row-reverse">
        <header>
          <FaSun onClick={toggleColorMode} cursor="pointer">
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </FaSun>
        </header>
      </Box>
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        isFitted
        borderBottomColor="green.400"
        borderBottomWidth="3px"
      >
        <TabList>
          {/* All lists are mentioned here */}
          <Tab>Add Task</Tab>
          <Tab>All Tasks</Tab>
        </TabList>

        <TabPanels>
          {/* All Panels are listed here */}
          <TabPanel>
            <AddTask getData={getTask} />
          </TabPanel>
          <TabPanel>
            <AllTasks tasks={taskData} handleDelete={handleDelete} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default App;
