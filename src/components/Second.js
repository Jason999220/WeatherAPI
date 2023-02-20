import React, { useState, useEffect } from "react";

function Second(props) {
  const { index, local, URL } = props;
  const [localArray, setLocalArray] = useState([]);
  const [time, setTime] = useState(null);
  const [rain, setRain] = useState(null);
  const [temperatureHigh, setTemperatureHigh] = useState(null);
  const [temperatureLow, setTemperatureLow] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(URL);
      let Json = await response.json();
      let data = Json.records;
      setLocalArray(data.location);
      setTime(data.location[index].weatherElement[0].time[1].startTime);
      setRain(
        data.location[index].weatherElement[1].time[1].parameter.parameterName
      );
      setTemperatureHigh(
        data.location[index].weatherElement[4].time[1].parameter.parameterName
      );
      setTemperatureLow(
        data.location[index].weatherElement[2].time[1].parameter.parameterName
      );
    };
    fetchData();
  }, [index]);
  return (
    <div className="second">
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

export default Second;
