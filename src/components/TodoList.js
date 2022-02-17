import { useState } from "react";
import { Box, Table, TableBody, Checkbox, TableCell, TableContainer, TableRow, Paper, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"
import AlertDialog from "./common/AlertDialog";
import Loading from "./common/Loading";

const TodoList = (props) => {
    const { todos, setTodos } = props;
    const [openRemoveDialog, setOpenRemoveDialog] = useState(false);
    const [deleteId, setDeleteId] = useState("");

    const handleComplete = (id, isCompleted) => setTodos.toggleTodo(id, isCompleted);
    const handleRemove = (id) => setTodos.removeTodo(id);
    return (
        <>
            {todos.length > 0 ?
                (<TableContainer component={Paper}>
                    <Table>
                        <TableBody>
                            {todos.map((todo, key) => (
                                <TableRow
                                    key={key}
                                    className="custom-table-row"
                                >
                                    <TableCell component="th" scope="row">
                                        <Checkbox onClick={() => handleComplete(todo.id, todo.completed)} checked={todo.completed} />
                                    </TableCell>
                                    <TableCell > <Box component="p" className={todo.completed ? 'completed-todo' : ''}>
                                        {todo.text}
                                    </Box></TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={() => { setOpenRemoveDialog(true); setDeleteId(todo.id) }} >
                                            <DeleteIcon className="custom-delete-icon" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                )
                : <Loading />}
            <AlertDialog open={openRemoveDialog} setOpen={setOpenRemoveDialog} action={() => handleRemove(deleteId)} />
        </>
    )
}

export default TodoList