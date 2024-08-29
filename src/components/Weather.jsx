import React from 'react'

function Weather({weather}) {
  return (
    <div className='weather-box'>
      <div className="temp">{Math.round(weather.main.temp)}°c</div>
      <div className="weather">{weather.weather[0].main}</div>
      <div className="weather-description">{weather.weather[0].description}</div>
    </div>
  )
}

export default Weather