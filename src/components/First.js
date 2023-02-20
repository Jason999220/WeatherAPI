import React, { useState, useEffect } from "react";

function First(props) {
  const { index, local, URL } = props;
  const [time, setTime] = useState(null);
  const [rain, setRain] = useState(null);
  const [temperatureHigh, setTemperatureHigh] = useState(null);
  const [temperatureLow, setTemperatureLow] = useState(null);
  const [localArray, setLocalArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(URL);
      let Json = await response.json();
      let data = Json.records;
      setLocalArray(data.location);
      setTime(data.location[index].weatherElement[0].time[0].startTime);
      setRain(
        data.location[index].weatherElement[1].time[0].parameter.parameterName
      );
      setTemperatureHigh(
        data.location[index].weatherElement[4].time[0].parameter.parameterName
      );
      setTemperatureLow(
        data.location[index].weatherElement[2].time[0].parameter.parameterName
      );
    };
    fetchData();
  }, [index]);
  return (
    <div className="first">
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

export default First;
