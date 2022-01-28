import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
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
            <input class="search" type="text" placeholder="Enter city name" />
            <input class="search-button" type="submit" value="🔍Search" />
            <button class="current-button" type="button">
              📍Current
            </button>
          </p>
        </form>
        <div className="header">
          <h1 class="city">{weatherData.city}</h1>
          <h3 class="dateTime">{weatherData.date.getDay()}</h3>
        </div>
        <div class="today-weather">
          <div class="card-body">
            <h5 class="card-description">{weatherData.description}</h5>
            <p class="card-text">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span class="temperature">
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
    const apiKey = "8cbd64a63ba04c3afa29f0681a36cb68";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
