import { IoIosList } from "react-icons/io";
import observer from 'mobx'
import '../Styles/Toolbar.css'

const Toolbar = ({store}) => {
    return(
        <div className="toolbar">
            <button className="first-item toolbar-item" onClick={store.toggleTodos}><IoIosList className="icon" color="black"/></button>
            <button className="toolbar-item" onClick={() => console.log('hi')}><IoIosList className="icon" color="black"/></button>
            <button className="toolbar-item" onClick={() => console.log('hi')}><IoIosList className="icon" color="black"/></button>
            <button className="last-item toolbar-item" onClick={() => console.log('hi')}><IoIosList className="icon" color="black"/></button>
        </div>
    )
};

export default Toolbar;