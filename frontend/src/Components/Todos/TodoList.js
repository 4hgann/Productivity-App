import { todoContext } from "../../Contexts/TodoContext";
import { useContext } from 'react'
import TodoItem from "./TodoItem";
import AddTodoPane from "./AddTodoPane";

export default function TodoList(){
    const { todos } = useContext(todoContext)

    return(
        <>
            <AddTodoPane/>
            {todos.map((item, index) => <TodoItem todo={item} index={index}/>)}
        </>
    )
}