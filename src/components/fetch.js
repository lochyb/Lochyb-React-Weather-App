import React, { useState } from "react";
import { Card, Today, Details } from "./card";
import styles from "./fetch.module.css";

export const SearchForm = () => {
  const [searchCity, setSearchCity] = useState("");
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState("");
  const [forecast, setForecast] = useState("");

  function createForecast(hourlyForecast, i) {
    return (
      <Card
        icon={hourlyForecast.weather[0].icon}
        dt={hourlyForecast.dt_txt}
        temp={hourlyForecast.main.temp}
        pop={hourlyForecast.pop}
        key={i}
      />
    );
  }

  function handleSubmit(e) {
    const API = process.env.REACT_APP_APIKEY;
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API}&units=${units}`
    )
      .then((response) => response.json())
      .then((y) => setWeather(y));

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&appid=${API}&units=${units}`
    )
      .then((response) => response.json())
      .then((y) => setForecast(y))
      .then(setSearchCity(""))
      }

  return (
    <div className={styles.wrap}>
      <h1>Weather App</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setSearchCity(e.target.value)}
            value={searchCity}
            className={styles.searchTerm}
            placeholder="Search City Here"
          
          ></input>
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
          <br />
          <input
            name="degrees"
            type="radio"
            id="celsius"
            value="metric"
            onChange={(e) => setUnits(e.target.value)}
            required="required"
            checked="checked"
          ></input>
          <label for="celsius">Celsius</label>
          <input
            name="degrees"
            type="radio"
            id="fahrenheit"
            value="imperial"
            onChange={(e) => setUnits(e.target.value)}
            required="required"
          ></input>
          <label for="fahrenheit">Fahrenheit</label>
        </form>
      </div>
      {weather.cod === 200 ? (
        <div className="middle">
          <Today
            place={weather.name}
            country={weather.sys.country}
            icon={weather.weather[0].icon}
            currentTemp={weather.main.temp}
            description={weather.weather[0].description}
          />
          <Details
            low={weather.main.temp_min}
            high={weather.main.temp_max}
            humidity={weather.main.humidity}
            pressure={weather.main.pressure}
            windSpeed={weather.wind.speed}
            windDeg={weather.wind.deg}
            units={units === "metric" ? "KM/H" : "MP/H"}
            clouds={weather.clouds.all}
          />
        </div>
      ): (<p></p>)}
      {forecast.cod === "200" ? (
        <div className="card-container">
          {forecast.list.map(createForecast)}
        </div>
      ): (<p></p>)}
        <footer>Created by <a href="https://lochyb.github.io/profile/">@Lochyb</a></footer> 
    </div>
  );
};

export const Fetch = () => {
  return (
    <>
      <SearchForm />
    </>
  );
};
