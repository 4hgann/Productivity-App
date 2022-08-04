import { useContext, useState } from "react"
import { todoContext } from "../../Contexts/TodoContext"
import { DatePicker, Modal, Button, Input, Typography, message } from "antd";
import moment  from 'moment'
import '../../Styles/AddTodoPane.css'

function AddTodoPane() {

    const { addTodo } = useContext(todoContext);

    const [date, setDate] = useState(null);
    const [displayDate, setDisplayDate] = useState(null);

    const [todoName, setTodoName] = useState(null)
    const [showModal, toggleShowModal] = useState(false);

    const dateFormat = 'DD/MM/YYYY';
    const { Text } = Typography;

    const onChange = (date, dateString) => {
        setDisplayDate(moment(new Date(date._d), dateFormat))
        setDate(date._d.getTime())

        console.log(dateString)
        console.log(date._d.getTime())
    }

    const verifyTodo = () => {
        if(todoName === null || date === null ){
            message.error('You need both a name and a date for your todo item')
        }
        else{
            const newTodo = {
                name: todoName,
                due: date,
                isCompleted: false
            }
            addTodo(newTodo)
            message.success('Todo has been added')
            cancelTodo();
        }
    }

    const cancelTodo = () => {
        setTodoName(null)
        setDisplayDate(null)
        toggleShowModal(false);
    }

    return(
        <div>
            <Button className = "add-button" type="primary" block onClick={toggleShowModal}>
                 Add new Todo
            </Button>

            <Modal title="Add new todo" visible={showModal} onOk={verifyTodo} onCancel={cancelTodo} className="addTodoModal">
                <Text className="modal-heading">Todo item name</Text> 
                <Input className="modal-item" placeholder ="New todo..." value={todoName} onChange={(e)=> setTodoName(e.target.value)}/>

                <Text className="modal-heading">Due Date </Text>
                <DatePicker className = "datepicker modal-item" onChange={onChange} format={dateFormat} value={displayDate}/>
            </Modal>
        </div>
    )
}

export default AddTodoPane;