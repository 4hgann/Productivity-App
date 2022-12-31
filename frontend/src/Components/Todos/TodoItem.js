import { useContext } from "react"
import { IconContext } from "react-icons"
import { IoMdTrash, IoMdCheckmark, IoMdClose } from "react-icons/io"
import { todoContext } from "../../Contexts/TodoContext"
import "../../Styles/TodoItem.css"
export default function TodoItem({ todo, index }) {
  const { deleteTodo, toggleComplete } = useContext(todoContext)
  return (
    <div
      className={
        "todo-item " +
        (index === 0 ? "first " : "") +
        (todo.isCompleted ? "complete" : "")
      }
    >
      <p className="left">
        {todo.name} - {todo.due}{" "}
      </p>
      <div className="right">
        <IconContext.Provider value={{ size: "20px" }}>
          {todo.isCompleted ? (
            <button
              className="todo-btn incomplete-btn"
              onClick={() => toggleComplete(index)}
            >
              <IoMdClose className="icon" />
            </button>
          ) : (
            <button
              className="todo-btn complete-btn"
              onClick={() => toggleComplete(index)}
            >
              <IoMdCheckmark className="icon" />
            </button>
          )}

          <button
            className="todo-btn trash-btn"
            onClick={() => deleteTodo(index)}
          >
            <IoMdTrash className="icon" />
          </button>
        </IconContext.Provider>
      </div>
    </div>
  )
}
