import WeatherContent from "./WeatherContent";
import Draggable from "react-draggable";
import LoadingWeather from "./LoadingWeather";

import UseGet from "../../Hooks/UseGet";
import { useState } from "react";
import { UIContext } from "../../Contexts/UIContext";
import { useContext } from "react";

import "../../Styles/WeatherWidget.css";

import OpenWeatherAPIKey from "../../keys/OpenWeather";

const WeatherWidget = ({ name }) => {
  const { getDisplayValue } = useContext(UIContext);
  const showWindow = getDisplayValue(name);
  const [url, setUrl] = useState(
    `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${OpenWeatherAPIKey}&&units=metric`
  );
  const { data, isLoading, setRefresh } = UseGet(url, "");
  const [units, setUnits] = useState("metric");

  const refreshData = () => {
    setRefresh((value) => !value);
  };

  const configChangeHandler = ({ city, country, units }) => {
    setUrl(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${OpenWeatherAPIKey}&&units=${units}`
    );
    setUnits(units);
  };

  return (
    <div style={{ display: showWindow ? "flex" : "none" }}>
      <Draggable>
        <div>
          {!isLoading ? (
            <WeatherContent
              content={data}
              refresh={refreshData}
              callback={configChangeHandler}
              units={units}
            />
          ) : (
            <LoadingWeather />
          )}
        </div>
      </Draggable>
    </div>
  );
};

export default WeatherWidget;
