import '../Styles/FeatureWindow.css'
import { IoIosClose } from 'react-icons/io'

// Child is the component to be rendered inside the window
// Name is the name to be passed for toggling state
const FeatureWindow = ( {child, name, store} ) => {
    return(
        <div className="window">
            <div className = "window-top">
                <button className = "exit-button" onClick = { () => store.toggle(name) }><IoIosClose/></button>
            </div>
            <div className='window-content'>
                {child}
            </div>
        </div>
    )
}

export default FeatureWindow;