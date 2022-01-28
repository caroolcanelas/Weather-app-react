import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "8cbd64a63ba04c3afa29f0681a36cb68";
    let apiURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="form-search">
        <form id="search-city" onSubmit={handleSubmit}>
          <p>
            <input
              class="search"
              type="text"
              placeholder="Enter city name"
              onChange={handleCityChange}
            />
            <input class="search-button" type="submit" value="🔍Search" />
            <button class="current-button" type="button">
              📍Current
            </button>
          </p>
        </form>
        <div className="header">
          <h1 class="city">Rio de Janeiro</h1>
          <h3 class="dateTime">Tuesday, 12:00</h3>
        </div>
        <div class="today-weather">
          <div class="card-body">
            <h5 class="card-description">Rain</h5>
            <p class="card-text">
              <i class="fas fa-cloud"></i>
              <span class="temperature">{weatherData.temp}</span>
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
    search();
    return "Loading...";
  }
}
