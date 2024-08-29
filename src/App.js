import React, { useState } from "react";
import Location from "./components/Location";
import Search from "./components/Search";
import Weather from "./components/Weather";

const API = {
  key: "44711609303f0a68812024e2e06625ab",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${API.base}weather?q=${query}&units=metric&APPID=${API.key}`)
        .then((res) => res.json())
        .then((res) => {
          setWeather(res);
          setQuery("");
          console.log(res);
        });
    }
  };
  const addWarmClass = typeof weather.main != "undefined" ? (weather.main.temp > 22) ? "app warm" : "app" : "app" ;
  return (
    <div className="container">
      <div className={addWarmClass}>
        <Search search={search} setQuery={setQuery} query={query} />
        {typeof weather.main != "undefined" ? (
          <>
            <Location weather={weather} />
            <Weather weather={weather} />
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
