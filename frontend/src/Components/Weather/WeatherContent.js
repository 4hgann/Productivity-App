import { Button } from 'antd';
import Draggable from 'react-draggable';
import { IoMdRefresh, IoMdSettings } from 'react-icons/io';
import { IconContext } from 'react-icons/lib';
import '../../Styles/WeatherWidget.css'


const WeatherContent = ({content}) => {
    const weatherInfo = content.weather[0];
    // Use the ID from OpenWeatherAPI call to determine the weather icon to be rendered
    const getIconClass = () =>{
        let id = weatherInfo.id.toString();
        id = id.trim();
        console.log('wi-owm-'+id)
        return "wi-owm-" + id;
    }

    return(
        <Draggable>
            <div className="weather-widget">
                <div className="control">
                    <p className="name-text">{content.name}</p>
                    <IconContext.Provider value={{size: "30px"}}>
                        <IoMdRefresh className="button widget-button"/>
                        <IoMdSettings className="button widget-button"/>
                    </IconContext.Provider>
                </div>
                <div className ="main">
                    <div className="icon-wrapper main-item">
                        <img src= {'http://openweathermap.org/img/wn/' + weatherInfo.icon + '@4x.png'} className="icon"/>
                        <p className="icon-label">{weatherInfo.main}</p>
                    </div>
                    <div className="main-item">
                    <p className="icon-label">{content.main.temp}°C</p>
                    </div>
                </div>
            </div>
        </Draggable>
    )
    
}

export default WeatherContent;