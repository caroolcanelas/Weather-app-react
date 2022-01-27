import React from "react";
import "./App.css";

export default function Form() {
  return (
    <div className="form-search">
      <form id="search-city">
        <p>
          <input class="search" type="text" placeholder="Enter city name" />
          <input class="search-button" type="submit" value="🔍Search" />
          <button class="current-button" type="button">
            Current
          </button>
        </p>
      </form>
    </div>
  );
}
