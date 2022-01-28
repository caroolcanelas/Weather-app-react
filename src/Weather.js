import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="form-search">
        <form id="search-city">
          <p>
            <input
              className="search"
              type="text"
              placeholder="Enter city name"
            />
            <input className="search-button" type="submit" value="🔍Search" />
            <button className="current-button" type="button">
              📍Current
            </button>
          </p>
        </form>
        <div className="header">
          <h1 className="city">{weatherData.city}</h1>
          <h3 className="dateTime">
            <FormattedDate date={weatherData.date} />
          </h3>
        </div>
        <div className="today-weather">
          <div className="card-body">
            <h5 className="card-description">{weatherData.description}</h5>
            <p className="card-text">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span class="units">
                <span>°C</span>|<span>°F</span>
              </span>
            </p>
            <p>
              Humidity: <span className="humidity">{weatherData.humidity}</span>{" "}
              %
            </p>
            <p>
              Wind: <span class="wind">{weatherData.wind}</span>km/h
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "8cbd64a63ba04c3afa29f0681a36cb68";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
