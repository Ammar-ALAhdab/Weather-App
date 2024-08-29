// import DateTime from "luxon";

// // initial API

// const API_KEY = "020a5567226b0a2da631fe56b0a181fb";
// const BASE_URL = "https://api.openweathermap.org/data/2.5/";

// // Make URL Object

// const getWeatherData = (infoType, searchParams) => {
//   const url = new URL(BASE_URL + "/" + infoType);
//   url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
//   return fetch(url).then((res) => res.json());
// };

// // Call API And Then Format The Data

// const getFormattedWeatherData = async (searchParams) => {
//   const formattedCurrnetWeather = await getWeatherData("weather", searchParams).then(formatCurrentWeather);

//   const { lat, lon } = formattedCurrnetWeather;
//   const formattedForecasttWeather = await getWeatherData("onecall", {
//     lat,
//     lon,
//     exclude: "current,minutely,alerts",
//     units: searchParams.units,
//   }).then(formatForecasttWeather);
//   return { ...formattedCurrnetWeather, ...formattedForecasttWeather };
// };

// // Format The Data

// const formatCurrentWeather = (data) => {
//   const {
//     coord: { lat, lon },
//     main: { temp, feel_like, temp_main, temp_max, humidity },
//     name,
//     dt,
//     sys: { country, sunrise, sunset },
//     weather,
//     wind: { speed },
//   } = data;
//   const { main: details, icon } = weather[0];
//   return { lat, lon, temp, feel_like, temp_main, temp_max, humidity, name, dt, country, sunrise, sunset, speed, details, icon };
// };

// // Format Daily And Hourly Forecast

// const formatForecasttWeather = (data) => {
//   let { timezone, daily, hourly } = data;
//   daily = daily.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "ccc"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });
//   hourly = hourly.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });

//   return { timezone, daily, hourly };
// };

// // Format The Date And Time Using Luxon Library

// const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => {
//   DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
// };

// // Get Icon Images From API

// const iconFromUrl = (icon) => {
//   return `http://openweathermap.org/img/wn/${icon}@2x.png`;
// };

fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=020a5567226b0a2da631fe56b0a181fb').then((d)=>d.json()).then((de) => {console.log(de);})

// export default getFormattedWeatherData;
// export { formatToLocalTime, iconFromUrl };
