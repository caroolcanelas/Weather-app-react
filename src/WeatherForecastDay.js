import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="forecast-card">
      <div className="forecast-date">
        <p>{day()}</p>
      </div>
      <p>
        <WeatherIcon code={props.data.weather[0].icon} />
      </p>
      <div className="forecast-temp">
        <p>
          <span className="forecast-max-temp">{maxTemperature()}</span> |
          <span className="forecast-min-temp"> {minTemperature()}</span>
        </p>
      </div>
    </div>
  );
}
