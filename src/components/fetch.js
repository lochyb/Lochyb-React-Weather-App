import React, { useState } from "react";
import { Card, Today } from "./card";
<<<<<<< HEAD
import styles from "./search.module.css"
=======
import styles from "./fetch.module.css";
>>>>>>> d0c1a32cb697dd3c16fd1f5088317424762f6bd8


export const SearchForm = () => {
  const [searchCity, setSearchCity] = useState("");
  const [units, setUnits] = useState(null);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

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
      .then(setSearchCity(""));
  }

  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchCity(e.target.value)}
          value={searchCity}
          className={styles.searchTerm}
<<<<<<< HEAD
        ></input>
        <button type="submit" className={styles.searchButton}>Search</button>
=======
          placeholder="Search City Here"
        ></input>
        <button
        type="submit"
        className={styles.searchButton}
        >Search</button>
>>>>>>> d0c1a32cb697dd3c16fd1f5088317424762f6bd8
        <br />
        <input
          name="degrees"
          type="radio"
          id="celsius"
          value="metric"
          onChange={(e) => setUnits(e.target.value)}
          required="required"
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

      {weather !== null ? (
        <Today
          place={weather.name}
          country={weather.sys.country}
          icon={weather.weather[0].icon}
          currentTemp={weather.main.temp}
          description={weather.weather[0].description}
        />
      ) : (
        <p>No Data Yet</p>
      )}
      {forecast !== null ? (
        <div className="card-container">
          {" "}
          {forecast.list.map(createForecast)}{" "}
        </div>
      ) : (
        <p>No Data Yet</p>
      )}
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
