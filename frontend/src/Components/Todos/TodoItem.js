import { IoMdTrash, IoMdCheckmark } from "react-icons/io";
import '../../Styles/TodoItem.css'
export default function TodoItem({todo, index}){
    return(
        <div className="todo-item">
            <p className="left">{todo.name} due: {todo.due}</p>
            <div className="buttons">
                <button className="complete-button"><IoMdCheckmark/></button>
                <button className="remove-button"><IoMdTrash/></button>
            </div>
        </div>
    )
}