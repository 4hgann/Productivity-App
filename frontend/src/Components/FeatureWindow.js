import '../Styles/FeatureWindow.css'
import { IoIosClose } from 'react-icons/io'
import { UIContext } from '../Contexts/UIContext'
import { useContext } from 'react'

// Child is the component to be rendered inside the window
// Name is the name to be passed for toggling state
const FeatureWindow = ( { children, name } ) => {
    const { toggle, getDisplayValue } = useContext(UIContext)
    const showWindow = getDisplayValue(name)
    return(
        <div className="window" style={{display: showWindow ? 'flex' : 'none'}}>
            <div className = "window-top">
                <button className = "exit-button" onClick = { () => toggle(name) }><IoIosClose/></button>
            </div>
            <div className='window-content'>
                {children}
            </div>
        </div>
    )
}

export default FeatureWindow;