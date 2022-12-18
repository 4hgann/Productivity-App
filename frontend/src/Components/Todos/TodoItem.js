import { useContext } from "react";
import { IoMdTrash, IoMdCheckmark } from "react-icons/io";
import { todoContext } from "../../Contexts/TodoContext";
import '../../Styles/TodoItem.css'
export default function TodoItem({todo, index}){
    const { deleteTodo } = useContext(todoContext)
    return(
        <div className="todo-item">
            <p className="left">{todo.name} due: {todo.due}</p>
            <div className="buttons">
                <button className="todo-button button"><IoMdCheckmark/></button>
                <button className="todo-button button" onClick = {() => deleteTodo(index)}><IoMdTrash/></button>
            </div>
        </div>
    )
}