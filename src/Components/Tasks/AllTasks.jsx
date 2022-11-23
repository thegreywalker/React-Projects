import { Flex, Grid, Spacer } from "@chakra-ui/react";
import { Task } from "./Task";

export const AllTasks = () => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={2}>
            <Task taskNo='1' />
            <Task taskNo='2' />
            <Task taskNo='3' />
            <Task taskNo='4' />
            <Task taskNo='5' />
            <Task taskNo='6' />
        </Grid>
    )
};