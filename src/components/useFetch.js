import { useState, useEffect } from "react";

export const useFetchWeather = (url) => {
  const [weather, setState] = useState({ weather: null, weatherLoading: true });

  useEffect(() => {
    setState(weather => ({ weather: weather.data , weatherLoading: true }));
    fetch(url)
      .then((res) => res.json())
      .then((y) => {
        if (y.cod !== 200) {
          setState({ weather: y, weatherLoading: true });
        } else {
          setState({ weather: y, weatherLoading: false });
        }
      });
  }, [url]);

  return weather;
};

export const useFetchForecast = (url) => {
  const [forecastState, setState] = useState({
    forecast: null,
    forecastLoading: true,
  });

  useEffect(() => {
    setState(forecast => ({ forecast: forecast.data, forecastLoading: true }));
    fetch(url)
      .then((res) => res.json())
      .then((y) => {
        if (y.cod !== "200") {
          setState({ forecast: y, forecastLoading: true });
        } else {
          setState({ forecast: y, forecastLoading: false });
        }
      });
  }, [url]);

  return forecastState;
};


