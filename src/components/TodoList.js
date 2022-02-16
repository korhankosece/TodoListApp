import { Box, Table, TableBody, Checkbox, TableCell, TableContainer, TableRow, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"

const TodoList = (props) => {
    const { todos, setTodos } = props;

    const handleComplete = (id, isCompleted) => setTodos.toggleTodo(id, isCompleted);
    const handleRemove = (id) => setTodos.removeTodo(id);
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    {todos.length > 0 && todos.map((todo, key) => (
                        <TableRow
                            key={key}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Checkbox onClick={() => handleComplete(todo.id, todo.completed)} checked={todo.completed} />
                            </TableCell>
                            <TableCell > <Box component="p" style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}>
                                {todo.text}
                            </Box></TableCell>
                            <TableCell align="right"><DeleteIcon onClick={() => handleRemove(todo.id)} color="error" cursor="pointer" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TodoList