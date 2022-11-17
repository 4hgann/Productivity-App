import { useRef, useState } from "react"
import { Modal } from "antd";
import '../../Styles/WeatherWidget.css'
import { IoMdRefresh, IoMdSettings } from 'react-icons/io';

function SetLocationPane({callbackHandler}) {

    const country = useRef();
    const city = useRef();

    const [showModal, toggleShowModal] = useState(false);

    const toggle = () => toggleShowModal(!showModal)


    return(
        <>
            <IoMdSettings className="button widget-button" onClick ={toggle}/>

            <Modal title="Add new todo" visible={showModal} onCancel={toggle}>
            </Modal>
        </>
    )
}

export default SetLocationPane;