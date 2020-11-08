import React from "react";
import Title from "./Title";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import DaysList from "./DaysList";

const Home = ({ data, onSearch, cityName }) => {
  return (
    <div className="home-wrapper">
      <div className="home">
        <Search onSearch={onSearch} />
        <Title cityName={cityName} />
        <CurrentWeather data={data} />
        <DaysList data={data} />
      </div>
    </div>
  );
};

export default Home;
