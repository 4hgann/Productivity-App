import { todoContext } from "../../Contexts/TodoContext";
import { useContext } from 'react'
import TodoItem from "./TodoItem";

export default function TodoList(){
    const { todos } = useContext(todoContext)

    return(
        <>
            {todos.map((item, index) => <TodoItem todo={item} index={index}/>)}
        </>
    )
}