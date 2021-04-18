import React, { useState } from "react";
import { Today, Card } from "./card";
import SearchForm from "./searchForm";
import {useFetchWeather, useFetchForecast} from "./useFetch";


export const Fetch = () => {
  const [city, setCity] = useState("");

  function getCity(search) {
    setCity(search);
  }

  function createForecast(hourlyForecast) {
    return (
      <Card
        icon={hourlyForecast.weather[0].icon}
        dt={hourlyForecast.dt_txt}
        temp={hourlyForecast.main.temp}
        pop={hourlyForecast.pop}
      />
    );
  }

  const { weather, weatherLoading } = useFetchWeather(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_APIKEY}&units=metric`
  );
  const { forecast, forecastLoading } = useFetchForecast(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_APIKEY}&units=metric`
  );
  return (
    <>
      <SearchForm getCity={getCity} />

      {weatherLoading === true ? (
        <span></span>
      ) : (
        <Today
          place={weather.name}
          country={weather.sys.country}
          currentTemp={weather.main.temp}
          icon={weather.weather[0].icon}
          description={weather.weather[0].description}
        />
      )}

      <div className="card-container">
        {forecastLoading === true ? <p>Search for your city name Here</p> : forecast.list.map(createForecast)}
      </div>
    </>
  );
};
