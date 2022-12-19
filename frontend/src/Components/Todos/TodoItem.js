import { Button } from "antd";
import { useContext } from "react";
import { IconContext } from "react-icons";
import { IoMdTrash, IoMdCheckmark } from "react-icons/io";
import { todoContext } from "../../Contexts/TodoContext";
import '../../Styles/TodoItem.css'
export default function TodoItem({todo, index}){
    const { deleteTodo, toggleComplete } = useContext(todoContext)
    return(
        <div className="todo-item">
            <p className="left">{todo.name} - {todo.due} </p>
            <div className="buttons">
                <IconContext.Provider value={{size: '20px'}}>
                    <button className ='todo-btn complete' onClick={() => toggleComplete(index)}><IoMdCheckmark className="icon"/></button>
                    <button className ='todo-btn trash' onClick = {() => deleteTodo(index)}><IoMdTrash className="icon"/></button>
                </IconContext.Provider>
            </div>
        </div>
    )
}