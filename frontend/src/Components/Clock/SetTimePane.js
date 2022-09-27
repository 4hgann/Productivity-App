import { useState } from "react"
import { Modal, Button, Typography, message, InputNumber } from "antd";
import '../../Styles/TimePane.css'

function SetTimePane() {

    const [secs, setSecs] = useState(null);
    const [mins, setMins] = useState(null);
    const [hrs, setHrs] = useState(null);
    const [showModal, toggleShowModal] = useState(false);
    const { Text } = Typography;

    return(
        <div>
            <Button className = "add-button" type="primary" block onClick={toggleShowModal}>
                 Add new Todo
            </Button>

            <Modal title="Add new todo" visible={showModal}  className="countdown-modal">
                <div className="input">
                    <div className="col">
                        <Text className="time-heading">Hrs</Text> 
                        <InputNumber min={0} value={hrs} onChange={(hrs) => setHrs(hrs.target.value)} />
                    </div>


                    <div className="col">
                    <Text className="time-heading">Mins</Text> 
                    <InputNumber min={0} max={59} value={mins} onChange={(mins) => setMins(mins.target.value)} />
                    </div>

                    <div className="col">
                        <Text className="time-heading">Secs</Text> 
                        <InputNumber min={1} max={59} value={secs} onChange={(secs) => setSecs(secs.target.value)} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SetTimePane;