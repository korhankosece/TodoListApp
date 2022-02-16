import { useReducer, useMemo, useEffect } from "react";
import { ACTIONS } from "../assets/constants";
import { addTodo, completeTodo, getAllTodos, removeTodo } from "../library/network/requests/todo";

const useTodo = () => {
    const [todos, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = async () => {
        try {
            const res = await getAllTodos()
            const data = res.docs.map(doc => ({ ...doc.data(), id: doc.id })).reverse()
            dispatch({ type: ACTIONS.GET_TODO, payload: [...data] });
        } catch (error) {
            console.log('useTodo/getTodos', error);
        }
    }

    const setTodos = useMemo(() => ({
        addTodo: async (text) => {
            try {
                const res = await addTodo({ text, completed: false })
                dispatch({ type: ACTIONS.ADD_TODO, payload: { id: res.id, text, completed: false } });
            } catch (error) {
                console.log('useTodo/addTodo', error);
            }
        },
        toggleTodo: async (id, isCompleted) => {
            try {
                await completeTodo(id, !isCompleted)
                dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } });
            } catch (error) {
                console.log('useTodo/toggleTodo', error);
            }
        },
        removeTodo: async (id) => {
            try {
                await removeTodo(id)
                dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id } });
            } catch (error) {
                console.log('useTodo/toggleTodo', error);
            }
        },
    }), [todos]);

    return [todos, setTodos];
}

export default useTodo;

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [action.payload, ...todos];
        case ACTIONS.TOGGLE_TODO:
            return [...todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo)];
        case ACTIONS.REMOVE_TODO:
            return [...todos.filter(todo => todo.id !== action.payload.id)];
        case ACTIONS.GET_TODO:
            return [...action.payload];
        default:
            return todos;
    }
};