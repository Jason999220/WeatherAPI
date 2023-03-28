import React, { useState, useEffect } from "react";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import "./App.css";
// 將index與陣列傳遞陣列
function App() {
  // console.log(process.env.REACT_APP_OPENDATAAPI_CODE); // 不能使用
  // 放在APP組件負責傳遞
  const URL = `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-EB1ADCDD-29A8-47B5-BEAC-91E9725AD56E`;
  const [localArray, setLocalArray] = useState([]);
  const [searchLocal, setSearchLocal] = useState(false);
  const [local, setLocal] = useState("");
  // 放入子組件
  // const [time, setTime] = useState(null);
  // const [rain, setRain] = useState(null);
  // const [temperatureHigh, setTemperatureHigh] = useState(null);
  // const [temperatureLow, setTemperatureLow] = useState(null);
  // 取得更換後的地區
  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(URL);
      let Json = await response.json();
      let data = Json.records;
      setLocalArray(data.location);
    };
    fetchData();
  }, [local]);
  // 顯示所選擇的區域
  const handleChangeLocal = (event) => {
    setSearchLocal(true);
    setLocal(event.target.value);
  };
  return (
    <div className="app">
      <h1>簡易氣象預報</h1>
      <div className="center ">
        <select
          name="area"
          className="area"
          onChange={(event) => {
            handleChangeLocal(event);
          }}
        >
          <option defaultValue style={{ display: "none" }}>
            請選擇你要查詢地區
          </option>
          <option value="嘉義縣">嘉義縣</option>
          <option value="新北市">新北市</option>
          <option value="嘉義市">嘉義市</option>
          <option value="新竹縣">新竹縣</option>
          <option value="新竹市">新竹市</option>
          <option value="台北市">台北市</option>
          <option value="台南市">台南市</option>
          <option value="宜蘭縣">宜蘭縣</option>
          <option value="苗栗縣">苗栗縣</option>
          <option value="雲林縣">雲林縣</option>
          <option value="花蓮縣">花蓮縣</option>
          <option value="台中市">台中市</option>
          <option value="台東縣">台東縣</option>
          <option value="桃園市">桃園市</option>
          <option value="南投縣">南投縣</option>
          <option value="高雄市">高雄市</option>
          <option value="金門縣">金門縣</option>
          <option value="屏東縣">屏東縣</option>
          <option value="基隆市">基隆市</option>
          <option value="澎湖縣">澎湖縣</option>
          <option value="彰化縣">彰化縣</option>
          <option value="連江縣">連江縣</option>
        </select>
      </div>
      <main>
        {searchLocal && (
          <>
            <First local={local} localArray={localArray} />
            <Second local={local} localArray={localArray} />
            <Third local={local} localArray={localArray} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
