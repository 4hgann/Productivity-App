import { Button } from 'antd';
import Draggable from 'react-draggable';
import { IoMdRefresh, IoMdSettings } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import 'weather-icons/css/weather-icons.css';
import '../../Styles/WeatherWidget.css'


const WeatherContent = ({content}) => {
    console.log(content)
    // Use the ID from OpenWeatherAPI call to determine the weather icon to be rendered
    const getIconClass = () =>{
        const id = content.weather[0].id.toString();
        if(id.startsWith("2")){
            return "wi-day-thunderstorm"
        }
        else if(id.startsWith("3")){
            return "wi-day-sprinkle"
        }
        else if(id.startsWith("5")){
            return "wi-day-rain"
        }
        else if(id.startsWith("6")){
            return "wi-day-snow"
        }
        else if(id.startsWith("7")){
            return "wi-day-haze"
        }
        else if(id === "800"){
            return "wi-day-sunny"
        }
        else{
            return "wi-day-cloudy"
        }
    }

    return(
        <Draggable>
            <div className="weather-widget">
                <div className="control">
                    <IconContext.Provider value={{size: "30px"}}>

                    <IoMdRefresh className="button widget-button"/>
                    <IoMdSettings className="button widget-button"/>
                    </IconContext.Provider>
                </div>
                <div className ="main">
                    <i className={"wi " + getIconClass()}/>
                    <p>{content.weather[0].id}</p>
                </div>
            </div>
        </Draggable>
    )
    
}

export default WeatherContent;