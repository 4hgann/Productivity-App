import { Spin } from "antd"
import { useEffect } from "react"
import WeatherContent from "./WeatherContent"
import OpenWeatherAPIKey from "../../keys/OpenWeather";
import UseGet from "../../Hooks/UseGet";
import { UIContext } from "../../Contexts/UIContext";
import { useContext } from "react";

const WeatherWidget = ({name}) => {

    const { toggle, getDisplayValue } = useContext(UIContext)
    const showWindow = getDisplayValue(name)
    const {data, isLoading, isError} = UseGet(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${OpenWeatherAPIKey}&&units=metric`, "")

    return(
        <div style={{display: showWindow ? 'flex' : 'none'}}>
            {isLoading ? <Spin/> :<WeatherContent content={data} />}
        </div>
    )
}

export default WeatherWidget;