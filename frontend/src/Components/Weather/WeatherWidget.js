import OpenWeatherAPIKey from "../../keys/OpenWeather";
import UseGet from "../../Hooks/UseGet";
import 'weather-icons/css/weather-icons.css';


const WeatherWidget = () => {
    
    const {data, isLoading, isError} = UseGet(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${OpenWeatherAPIKey}`, "")
    let iconClass;

    // Use the ID from OpenWeatherAPI call to determine the weather icon to be rendered
    const getIconClass = () =>{
        const id = data.weather[0].id.toString();
        console.log(data.weather[0].id)
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
        <div>
            {!isLoading && <i className={"wi " + getIconClass()}/>}
            <p>{isLoading ? "loading..." : data.weather[0].id}</p>
        </div>
    )
    
}

export default WeatherWidget;