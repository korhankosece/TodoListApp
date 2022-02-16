import { useState } from "react";
import { Box, Table, TableBody, Checkbox, TableCell, TableContainer, TableRow, Paper, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import AlertDialog from "./common/AlertDialog";

const TodoList = (props) => {
    const { todos, setTodos } = props;
    const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    const handleComplete = (id, isCompleted) => setTodos.toggleTodo(id, isCompleted);
    const handleRemove = (id) => setTodos.removeTodo(id);
    return (
        <Box style={{ width: "25rem" }}>
            {todos.length > 0 ?
                (<TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {todos.map((todo, key) => (
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
                                    <TableCell align="right"><DeleteIcon onClick={() => { setOpenRemoveDialog(true); setDeleteId(todo.id) }} color="error" cursor="pointer" /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                )
                : <CircularProgress />}
            <AlertDialog open={openRemoveDialog} setOpen={setOpenRemoveDialog} action={() => handleRemove(deleteId)} />
        </Box>
    )
}

export default TodoList