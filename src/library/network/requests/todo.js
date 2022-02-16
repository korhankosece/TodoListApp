import { db } from "../services/firebaseService"
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { DB_TABLES } from "../../../assets/constants"

const todoCollectionRef = collection(db, DB_TABLES.TODOS)

export const getAllTodos = async () => {
    return await getDocs(todoCollectionRef)
}

export const addTodo = async (data) => {
    return await addDoc(todoCollectionRef, data)
}

export const removeTodo = async (id) => {
    const todoDoc = doc(db, DB_TABLES.TODOS, id)
    return await deleteDoc(todoDoc)
}

export const completeTodo = async (id, isCompleted) => {
    const todoDoc = doc(db, DB_TABLES.TODOS, id);
    return await updateDoc(todoDoc, { completed: isCompleted })
}