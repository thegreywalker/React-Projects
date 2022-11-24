import { Grid } from "@chakra-ui/react";
import { Task } from "./Task";

export const AllTasks = (props) => {
  const updateTask = (updatedTaskName, updatedDescription, id) => {
    props.handleTaskUpdate(updatedTaskName, updatedDescription, id);
  }
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
      {props.length === 0 
        ? "No Task Added"
        : props.tasks.map((task) => (
            <Task
              key={task.id}
              id={task.id}
              taskName={task.taskName}
              taskDescription={task.description}
              handleDelete={() => props.handleDelete(task.id)}
              handleClick={updateTask}
            />
          ))}
    </Grid>
  );
};
