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
  const { colorMode, toggleColorMode } = useColorMode();
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
            <AddTask />
          </TabPanel>
          <TabPanel>
            <AllTasks />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}

export default App;
