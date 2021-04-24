import React from "react";
import styles from "./card.module.css";

export const Today = (props) => {
  return (
    <div className={styles.todayDiv}>
      <h3>
        {props.place}, {props.country}
      </h3>
      <div className={styles.middleDiv}>
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt="icon"
        />
        <p>{Math.round(props.currentTemp)}°</p>
      </div>
      <h5>{props.description}</h5>
    </div>
  );
};

export const Details = (props) => {
  return (
    <div className={styles.detailsDiv}>
      <div className={styles.flex}>
        <div className={styles.row}>
          <p>Low/High</p>
          <p>{`${Math.round(props.low)}°/${Math.round(props.high)}°`}</p>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.row}>
          <p>Humidity</p>
          <p>{`${props.humidity}%`}</p>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.row}>
          <p>Pressure</p>
          <p>{`${props.pressure}hPa`}</p>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.row}>
          <p>Wind</p>
          <p>{`${props.windDeg}°/ ${Math.round(props.windSpeed)} ${
            props.units
          }`}</p>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.row}>
          <p>Cloud Cover</p>
          <p>{`${props.clouds}%`}</p>
        </div>
      </div>
    </div>
  );
};

export const Card = (props) => {
  function timeConverter(input) {
    let a = new Date(input * 1000);
    let hour = a.getHours();
    hour = hour < 10 ? `0${hour}` : hour;
    let time = `${hour}:00`;
    return time;
  }

  return (
    <div className={styles.card}>
      <p>{timeConverter(props.dt)}</p>
      <p className="temp">{Math.round(props.temp)}°C</p>
      <img
        src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
        alt="icon"
      />
      <p>Rain:{Math.round(props.pop * 100)}%</p>
    </div>
  );
};
