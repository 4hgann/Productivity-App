import { IoIosList } from "react-icons/io";
import { UIContext } from '../Contexts/UIContext'
import { useContext } from 'react'
import '../Styles/Toolbar.css'

const Toolbar = () => {
    const { toggle } = useContext(UIContext)
    return(
        <div className="toolbar">
            <button className="first-item toolbar-item" onClick={() => toggle('todo')}><IoIosList className="icon" color="black"/></button>
            <button className="toolbar-item" onClick={() => toggle('clock')}><IoIosList className="icon" color="black"/></button>
            <button className="toolbar-item" onClick={() => console.log('hi')}><IoIosList className="icon" color="black"/></button>
            <button className="last-item toolbar-item" onClick={() => console.log('hi')}><IoIosList className="icon" color="black"/></button>
        </div>
    )
};

export default Toolbar;