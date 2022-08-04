import { todoContext } from "../../Contexts/TodoContext";
import { useContext } from 'react'
import TodoItem from "./TodoItem";
import AddTodoPane from "./AddTodoPane";

import '../../Styles/TodoList.css';

export default function TodoList(){
    const { todos } = useContext(todoContext)

    return(
        <div className = "todo-container">
            <div className ="top">
                {todos.map((item, index) => <TodoItem todo={item} index={index}/>)}
            </div>
            
            <div className="bottom">
                <AddTodoPane className="add-button"/>
            </div>
        </div>
    )
}