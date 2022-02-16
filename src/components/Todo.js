import { useState } from "react";
import useTodo from "../hooks/useTodo";

const Todo = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos.addTodo(text);
        setText("");
    };
    const handleComplete = (id, isCompleted) => setTodos.toggleTodo(id, isCompleted);
    const handleRemove = (id) => setTodos.removeTodo(id);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></input>
            {todos.length > 0 && todos.map((todo, key) => (
                <div
                    key={key}
                    style={{
                        display: "flex",
                        width: "20rem",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "2rem",
                        border: "1px solid #000",
                        margin: "1rem 0"
                    }}
                >
                    <p style={{ textDecorationLine: todo.completed ? "line-through" : "none" }}>
                        {todo.text}
                    </p>
                    <button form="" onClick={() => handleComplete(todo.id, todo.completed)}>
                        Complete
                    </button>
                    <button form="" onClick={() => handleRemove(todo.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </form>
    )
};

export default Todo;
