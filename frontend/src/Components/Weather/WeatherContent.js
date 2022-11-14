import 'weather-icons/css/weather-icons.css';


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
        <div className ="weather-widget">
            <i className={"wi " + getIconClass()}/>
            <p>{content.weather[0].id}</p>
        </div>
    )
    
}

export default WeatherContent;