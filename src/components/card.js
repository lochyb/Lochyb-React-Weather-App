import React from "react";
// import styled, { css } from 'styled-components'

export const Today = (props) => {

  return (
    <div className="todayDiv">
      <h3>
        {props.place}, {props.country}
      </h3>
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt="icon"
      />
      <p>{Math.round(props.currentTemp)}°C</p>
      <h5>{props.description}</h5>
    </div>
  );
};

export const Card = (props) => {
  return (
    <div className="card">
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt="icon"
      />
      <p>{props.dt.slice(5, 10)}</p>
      <p>{props.dt.slice(11, 16)}</p>
      <p>{Math.round(props.temp)}°C</p>
      <p>Rain:{Math.round(props.pop * 100)}%</p>
    </div>
  );
};
