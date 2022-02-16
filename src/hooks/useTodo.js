import { useReducer, useMemo, useEffect } from "react";
import { ACTIONS } from "../assets/constants";

const useTodo = () => {
    const [todos, dispatch] = useReducer(reducer, []);

    useEffect(() => {
        getTodos()
    }, [])

    const getTodos = () => {
        dispatch({ type: ACTIONS.GET_TODO, payload: [{ id: 1, name: 'Wash the dishes', completed: false }, { id: 2, name: 'Go to gym', completed: false }] });
    }

    const setTodos = useMemo(() => ({
        addTodo: async (name) => {
            try {
                dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
            } catch (e) {
                console.log(e);
            }
        },
        toggleTodo: async (id) => {
            try {
                dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } });
            } catch (e) {
                console.log(e);
            }
        },
        removeTodo: async (id) => {
            try {
                dispatch({ type: ACTIONS.REMOVE_TODO, payload: { id } });
            } catch (e) {
                console.log(e);
            }
        },
    }), []);

    return [todos, setTodos];
}

export default useTodo;

const newTodo = (name) => {
    return { id: Date.now(), name, completed: false };
};

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
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