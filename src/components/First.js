import React, { useState, useEffect } from "react";

function First(data) {
  const { local, index } = data;
  console.log(index);
  console.log(local);
  // const [time, setTime] = useState(null);
  // const [rain, setRain] = useState(null);
  // const [temperatureHigh, setTemperatureHigh] = useState(null);
  // const [temperatureLow, setTemperatureLow] = useState(null);
  // useEffect((local) => {
  //   setTime(local.weatherElement[0].time[0].startTime);
  //   setRain(local.weatherElement[1].time[0].parameter.parameterName);
  //   setTemperatureHigh(local.weatherElement[4].time[0].parameter.parameterName);
  //   setTemperatureLow(local.weatherElement[2].time[0].parameter.parameterName);
  // }, []);
  return (
    <div className="first">
      {/* <h2>Start Time : {time}</h2> */}
      {/* <h2>Local : {local}</h2> */}
      {/* <h2>最高溫度 : {temperatureHigh} °C</h2>
      <h2>最低溫度 : {temperatureLow} °C</h2>
      <h2>降雨機率 : {rain} %</h2> */}
    </div>
  );
}

export default First;
