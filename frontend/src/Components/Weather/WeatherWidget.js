import OpenWeatherAPIKey from "../../keys/OpenWeather";
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import UseGet from "../../Hooks/UseGet";


const WeatherWidget = () => {
    
    const {data, isLoading, isError} = UseGet('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=968fea6980ac6c8997b02b653055ca08', "")

    return(
        <p>{data.name}</p>
    )
    
}

export default WeatherWidget;