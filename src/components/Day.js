import React from "react";
import dayjs from "dayjs";

const Day = ({ day }) => {
  return (
    <div className="five-day-weather">
      <p className="date">{dayjs(day.dt_txt).format("DD MMM YYYY")}</p>
      <div className="img-wrapper">
        <img
          src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt="weather"
        />
      </div>
      <p> Temperature: {day.main.temp} &#xb0;C</p>
      <p> Feels like: {day.main.feels_like} &#xb0;C</p>
      <p> Humidity: {day.main.humidity} %</p>
    </div>
  );
};

export default Day;
