import React, { useState, useEffect } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import "./App.css";
// 將index與陣列傳遞陣列
function App() {
  const URL = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${process.env.MY_OPENDATAAPI_CODE}`;
  const [localArray, setLocalArray] = useState([]);
  const [index, setIndex] = useState(0);
  const [local, setLocal] = useState(null);
  // 放入子組件
  // const [time, setTime] = useState(null);
  // const [rain, setRain] = useState(null);
  // const [temperatureHigh, setTemperatureHigh] = useState(null);
  // const [temperatureLow, setTemperatureLow] = useState(null);
  // 取得更換後的地區
  const changeIndex = () => {
    if (index > 20) {
      setIndex(0);
    } else {
      setIndex(index + 1);
      // setLocal(localArray[index].locationName);
      // setTemperatureHigh(
      //   localArray[index].weatherElement[4].time[1].parameter.parameterName
      // );
      // setTemperatureLow(
      //   localArray[index].weatherElement[2].time[1].parameter.parameterName
      // );
      // setRain(
      //   localArray[index].weatherElement[1].time[1].parameter.parameterName
      // );
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(URL);
      let Json = await response.json();
      let data = Json.records;
      setLocalArray(data.location);
      setLocal(data.location[index].locationName);
    };
    fetchData();
  }, [index]);
  return (
    <div className="app">
      <h1>簡易氣象預報</h1>
      <main>
        <First index={index} local={local} URL={URL} />
        <Second index={index} local={local} URL={URL} />
        <Third index={index} local={local} URL={URL} />
      </main>
      <div className="center">
        <button onClick={changeIndex}>按我換地區</button>
      </div>
    </div>
  );
}

export default App;
