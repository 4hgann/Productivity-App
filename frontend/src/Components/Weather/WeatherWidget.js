import { useState } from "react"
import WeatherContent from "./WeatherContent"
import OpenWeatherAPIKey from "../../keys/OpenWeather";
import UseGet from "../../Hooks/UseGet";
import { UIContext } from "../../Contexts/UIContext";
import { useContext } from "react";
import Draggable from 'react-draggable';
import '../../Styles/WeatherWidget.css'
import LoadingWeather from "./LoadingWeather";

const WeatherWidget = ({name}) => {

    const { toggle, getDisplayValue } = useContext(UIContext)
    const showWindow = getDisplayValue(name)
    const [url, setUrl] = useState(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${OpenWeatherAPIKey}&&units=metric`)
    const {data, isLoading, isError, refresh, setRefresh} = UseGet(url, "")

    const refreshData = () => {
        setRefresh((value) => !value)
    }

    const configChangeHandler = ({city, country, units}) => {
        setUrl(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${OpenWeatherAPIKey}&&units=${units}`)
    }

    return(
        <div style={{display: showWindow ? 'flex' : 'none'}}>
            <Draggable>
                <div>
                    { !isLoading ? <WeatherContent content={data} refresh={refreshData} callback={configChangeHandler}/> : <LoadingWeather/>}
                </div>
            </Draggable>
        </div>
    )
}

export default WeatherWidget;