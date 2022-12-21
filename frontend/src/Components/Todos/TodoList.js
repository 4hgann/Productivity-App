import { todoContext } from "../../Contexts/TodoContext";
import { useContext } from 'react'
import TodoItem from "./TodoItem";
import AddTodoPane from "./AddTodoPane";

import '../../Styles/TodoList.css';
import '../../Styles/TodoItem.css'

export default function TodoList(){
    const { todos } = useContext(todoContext)

    return(
        <div className = "todo-container">
                <p className="heading">Todos</p>
            <div className ="top">
                {
                    todos.map((item, index) => {
                        return <TodoItem todo={item} index={index}/>
                    })
                }
            </div>
            
            <div className="bottom">
                <AddTodoPane className="add-button"/>
            </div>
        </div>
    )
}