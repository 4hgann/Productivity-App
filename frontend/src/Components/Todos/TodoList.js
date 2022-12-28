import { todoContext } from "../../Contexts/TodoContext";
import { useContext } from 'react'
import TodoItem from "./TodoItem";
import AddTodoPane from "./AddTodoPane";

import '../../Styles/TodoList.css';
import '../../Styles/TodoItem.css'
import { Button } from "antd";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

export default function TodoList(){
    const { todos, earliestFirst, toggleOrder } = useContext(todoContext)

    return(
        <div className = "todo-container">
                <p className="heading">Todos</p>
                <Button icon = { !earliestFirst ? <IoMdArrowDown/> : <IoMdArrowUp/>} onClick={() => toggleOrder()}>

                </Button>
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