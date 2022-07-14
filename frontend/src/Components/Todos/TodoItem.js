export default function TodoItem({todo, index}){
    return(
        <div className="item">
            <h2>{todo.name} due: {todo.due}</h2>
        </div>
    )
}