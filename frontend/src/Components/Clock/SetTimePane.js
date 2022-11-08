import { useContext, useState } from "react"
import { Modal, Button, Typography, message, InputNumber } from "antd";
import { TimeContext } from "../../Contexts/TimeContext";
import '../../Styles/TimePane.css'

function SetTimePane() {

    const [secs, secsListener] = useState(1);
    const [mins, minsListener] = useState(0);
    const [hrs, hrsListener] = useState(0);
    const { setSecs, setMins, setHrs } = useContext(TimeContext);

    const [showModal, toggleShowModal] = useState(false);
    const { Text } = Typography;

    const passTime = () => {
        setSecs(secs);
        setMins(mins);
        setHrs(hrs);
        message.success("The time has sucessfully been set!");
        toggleShowModal(!showModal);
    }


    return(
        <div>
            <Button className = "add-button" type="primary" block onClick={() => toggleShowModal(!showModal)}>
                 Set Time
            </Button>

            <Modal title="Add new todo" visible={showModal}  className="countdown-modal" onOk={passTime} onCancel={() => toggleShowModal(!showModal)}>
                <div className="input">
                    <div className="col">
                        <Text className="time-heading">Hrs</Text> 
                        <InputNumber min={0} value={hrs} onChange={(hrs) => hrsListener(hrs)} />
                    </div>

                    <div className="col">
                    <Text className="time-heading">Mins</Text> 
                    <InputNumber min={0} max={59} value={mins} onChange={(mins) => minsListener(mins)} />
                    </div>

                    <div className="col">
                        <Text className="time-heading">Secs</Text> 
                        <InputNumber min={1} max={59} value={secs} onChange={(secs) => secsListener(secs)} />
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default SetTimePane;