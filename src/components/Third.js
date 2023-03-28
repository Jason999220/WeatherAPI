import React, { useState, useEffect } from "react";

function Third(props) {
  const { local, localArray } = props;
  const [time, setTime] = useState(null);
  const [rain, setRain] = useState(null);
  const [temperatureHigh, setTemperatureHigh] = useState(null);
  const [temperatureLow, setTemperatureLow] = useState(null);
  useEffect(() => {
    localArray.map((item) => {
      if (item.locationName === local) {
        // item.[所要的資訊].[3種時間].parameter.parameterName
        // 開始時間
        setTime(item.weatherElement[0].time[2].startTime);
        // 最高氣溫
        setTemperatureHigh(
          item.weatherElement[4].time[2].parameter.parameterName
        );
        // 最低氣溫
        setTemperatureLow(
          item.weatherElement[2].time[2].parameter.parameterName
        );
        // 降雨機率
        setRain(item.weatherElement[1].time[2].parameter.parameterName);
      }
    });
  }, [local]);
  return (
    <div className="third">
      <h2>
        Start Time : <br />
        {time}
      </h2>
      <h2>Local : {local}</h2>
      <h2>最高溫度 : {temperatureHigh} °C</h2>
      <h2>最低溫度 : {temperatureLow} °C</h2>
      <h2>降雨機率 : {rain} %</h2>
    </div>
  );
}

export default Third;
