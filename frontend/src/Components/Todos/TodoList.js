import { todoContext } from "../../Contexts/TodoContext";
import { useContext } from 'react'
import TodoItem from "./TodoItem";
import AddTodoPane from "./AddTodoPane";

import '../../Styles/TodoList.css';
import '../../Styles/TodoItem.css'
import { Button } from "antd";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { IconContext } from 'react-icons/lib';

export default function TodoList(){
    const { todos, earliestFirst, toggleOrder } = useContext(todoContext)

    return(
        <div className = "todo-container">
            <div className="headings">
                <p className="heading">Todos</p>
                <Button className="sort" onClick={() => toggleOrder()}>
                <IconContext.Provider value={{size: '20px'}}>

                    { !earliestFirst ? <IoMdArrowDown/> : <IoMdArrowUp/>}
                </IconContext.Provider>
                </Button>
            </div>
            <div className ="top">
                { todos.length > 0 ?
                    todos.map((item, index) => {
                        return <TodoItem todo={item} index={index}/>
                    })
                    :
                    <div className="empty">
                        <p style={{textAlign: "center!", margin: "40% auto"}}>Hooray! There is nothing todo!</p>
                    </div>
                }
            </div>
            
            <div className="bottom">
                <AddTodoPane className="add-button"/>
            </div>
        </div>
    )
}