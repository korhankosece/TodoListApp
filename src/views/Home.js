import { Box } from '@mui/material'
import React from 'react'
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import useTodo from '../hooks/useTodo';

const Home = () => {
    const [todos, setTodos] = useTodo();

    return (
        <Box style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", height: "100vh" }}>
            <Box component="h1" >ToDo List</Box>
            <TodoInput setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </Box>
    )
}

export default Home