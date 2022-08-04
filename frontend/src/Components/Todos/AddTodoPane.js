import { useContext, useState } from "react"
import { todoContext } from "../../Contexts/TodoContext"
import { DatePicker, Modal, Button, Input, Typography } from "antd";
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
        setDisplayDate(date)
    }

    const verifyTodo = () => {
        console.log(todoName)
        toggleShowModal(false);
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
                <DatePicker className = "datepicker modal-item" onChange={onChange} allowClear format={dateFormat} value={displayDate}/>
            </Modal>
        </div>
    )
}

export default AddTodoPane;