import React from "react";
import dayjs from "dayjs";

const CurrentWeather = ({ data }) => {
  return (
    <div className="today-weather-wrapper">
      <div className="today-weather">
        <h1>Today's weather</h1>
        <div className="today-weather-details-wrapper">
          <div className="today-weather-details">
            <p className="date">
              {dayjs(data.list[0].dt_txt).format("DD MMM YYYY")}
            </p>
            <div className="img-wrapper">
              <img
                src={`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`}
                alt="weather"
              />
            </div>
            <p> Temperature: {data.list[0].main.temp} &#xb0;C</p>
            <p> Feels like: {data.list[0].main.feels_like} &#xb0;C</p>
            <p> Humidity: {data.list[0].main.humidity} %</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
