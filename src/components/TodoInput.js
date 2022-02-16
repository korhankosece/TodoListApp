import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const Todo = (props) => {
    const { setTodos } = props;

    const [text, setText] = useState("");
    const [error, setError] = useState({
        isEmpty: false,
        isMaxValue: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            if (text.length > 250) {
                setError(prev => { return { ...prev, isMaxValue: true } });
            } else {
                setError({
                    isEmpty: false,
                    isMaxValue: false
                });
                const _text = text.trim();
                setTodos.addTodo(_text);
                setText("");
            }
        } else {
            setError(prev => { return { ...prev, isEmpty: true } });
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
                type="text"
                value={text}
                autoFocus={true}
                onChange={(e) => setText(e.target.value)}
                label="New Task"
                variant="outlined"
                error={error.isEmpty || error.isMaxValue || false}
                helperText={error.isEmpty ? "This field is required." :
                    error.isMaxValue ? "Only 250 characters allowed." : null}
            />
            <Button type="submit" variant="contained">Add</Button>
        </Box>
    )
};

export default Todo;
