import '../Styles/FeatureWindow.css'
import { IoIosClose } from 'react-icons/io'
import { UIContext } from '../Contexts/UIContext'
import { useContext } from 'react'
import Draggable from 'react-draggable';

// Child is the component to be rendered inside the window
// Name is the name to be passed for toggling state
const FeatureWindow = ( { children, name } ) => {
    const { toggle, getDisplayValue } = useContext(UIContext)
    const showWindow = getDisplayValue(name)
    return(
        <Draggable>
        <div className="window" style={{display: showWindow ? 'flex' : 'none'}}>
            <div className = "window-top">
                <button className = "custom-button exit-button" onClick = { () => toggle(name) }><IoIosClose className="button-icon" /></button>
            </div>
            <div className='window-content'>
                {children}
            </div>
        </div>
        </Draggable>

    )
}

export default FeatureWindow;