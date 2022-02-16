import { useState } from "react";
import useTodo from "../hooks/useTodo";

const Todo = () => {
    const [name, setName] = useState("");
    const [todos, setTodos] = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos.addTodo(name);
        setName("");
    };
    const handleComplete = (id) => setTodos.toggleTodo(id);
    const handleRemove = (id) => setTodos.removeTodo(id);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                        {todo.name}
                    </p>
                    <button form="" onClick={() => handleComplete(todo.id)}>
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
