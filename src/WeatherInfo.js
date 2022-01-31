import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="weather-info">
      <div className="header">
        <h1 className="city">{props.data.city}</h1>
        <h3 className="dateTime">
          <FormattedDate date={props.data.date} />
        </h3>
      </div>
      <div className="today-weather">
        <div className="card-body">
          <h5 className="card-description">{props.data.description}</h5>
          <p className="card-text">
            <WeatherIcon code={props.data.icon} />
            <WeatherTemperature celsius={props.data.temperature} />
          </p>
          <p>
            Humidity: <span className="humidity">{props.data.humidity}</span> %
          </p>
          <p>
            Wind: <span class="wind">{props.data.wind}</span>km/h
          </p>
        </div>
      </div>
    </div>
  );
}
