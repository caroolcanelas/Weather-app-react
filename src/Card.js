import React from "react";
import "./App.css";

export default function Card() {
  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-description">Rain</h5>
        <p class="card-text">
          <i class="fas fa-cloud"></i>
          <span class="temperature">29</span>
          <span class="units">
            <span>°C</span>|<span>°F</span>
          </span>
        </p>
        <p>
          Humidity: <span class="humidity">15</span>%
        </p>
        <p>
          Wind: <span class="wind">8</span>km/h
        </p>
      </div>
    </div>
  );
}
