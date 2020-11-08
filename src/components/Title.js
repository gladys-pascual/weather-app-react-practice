import React from "react";

const Title = ({ cityName }) => {
  return (
    <h1 className="city-name"> Hello! This is the weather in {cityName}. </h1>
  );
};

export default Title;
