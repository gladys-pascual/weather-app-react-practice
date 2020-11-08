import React, { useState, useEffect, useCallback } from "react";
import Day from "./Day";

const DaysList = ({ data }) => {
  const [dailyData, setDailyData] = useState([]);

  const setData = useCallback(() => {
    setDailyData(data.list.filter((data) => data.dt_txt.includes("15:00:00")));
  }, [data]);

  useEffect(() => setData(), [setData]);
  console.log(dailyData);
  return (
    <div>
      <h1 className="five-day-forecast-title">5-day Forecast</h1>
      <div className="days-container">
        {dailyData.map((day) => (
          <Day day={day} key={day.dt_txt} />
        ))}
      </div>
    </div>
  );
};

export default DaysList;
