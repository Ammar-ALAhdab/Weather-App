import React from 'react'

const dateBulider = (d) => {
  const days = ["Sunday" , "Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
  const months = ["January" , "February" , "March" , "April" , "May" ,"June" , "July" , "August" , "September" , "October" , "November" , "December"]
  let day = days[d.getDay()]
  let date = d.getDate()
  let month = months[d.getMonth()]
  let year = d.getFullYear()
  return `${day} ${date} ${month} ${year}`
}

function Location({weather}) {
  console.log(weather);
  return (
    <div className='location-box'>
      <div className='location'>{weather.name}, {weather.sys.country}</div>
      <div className="date">{dateBulider(new Date())}</div>
    </div>
  )
}

export default Location