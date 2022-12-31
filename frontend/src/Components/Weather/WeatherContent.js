import { IoMdRefresh, IoIosClose, IoIosCloseCircle } from "react-icons/io"
import { IconContext } from "react-icons/lib"
import SetLocationPane from "./SetLocationPane"

import "../../Styles/WeatherWidget.css"
import { useContext } from "react"
import { UIContext } from "../../Contexts/UIContext"

const WeatherContent = ({ content, refresh, callback, units }) => {
  const weatherInfo = content.weather[0]
  const { toggle } = useContext(UIContext)

  let unitText
  if (units === "metric") {
    unitText = "C"
  } else if (units === "imperial") {
    unitText = "F"
  } else {
    unitText = "K"
  }
  return (
    <div className="weather-widget">
      <div className="control">
        <p className="name-text">{content.name}</p>
        <IconContext.Provider value={{ size: "30px" }}>
          <IoMdRefresh className="button widget-button" onClick={refresh} />
          <SetLocationPane callback={callback} />
          <IoIosCloseCircle
            className="button widget-button"
            onClick={() => toggle("weather")}
          />
        </IconContext.Provider>
      </div>
      <div className="main">
        <div className="icon-wrapper main-item">
          <img
            src={
              "http://openweathermap.org/img/wn/" + weatherInfo.icon + "@4x.png"
            }
            className="icon"
            draggable="false"
          />
          <p className="icon-label">{weatherInfo.main}</p>
        </div>
        <div className="main-item">
          <p className="temperature">
            {content.main.temp}°{unitText}
          </p>
        </div>
      </div>
    </div>
  )
}

export default WeatherContent
