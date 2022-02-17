import { Box } from '@mui/material'
import React from 'react'
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import useTodo from '../hooks/useTodo';

const Home = () => {
    const [todos, setTodos] = useTodo();
    return (
        <Box className='container'>
            <Box component="h1" className='title'>ToDo List</Box>
            <TodoInput setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
        </Box>
    )
}

export default Home