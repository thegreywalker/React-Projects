import { Flex, Grid, Spacer } from "@chakra-ui/react";
import { Task } from "./Task";

export const AllTasks = (props) => {
  const length = props.tasks.length;
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
      {length === 0
        ? "No Task Added"
        : props.tasks.map((task) => (
            <Task
              key={task.id}
              taskName={task.taskName}
              taskDescription={task.description}
              handleDelete={() => props.handleDelete(task.id)}
            />
          ))}
    </Grid>
  );
};
