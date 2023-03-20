import React from 'react'
import fetchData from '../../utils/fetchData'
import { useState,useEffect } from 'react'
import "./Forecast.css"

const Forecast = () => {
    const cityName = "Chonburi";
    const apiKey = "4af89ad12072525b24f67ffb9d561df4";
    const [forecast,setForecast]=useState([])
    const [dayForeCast,setDayForeCast]=useState([])

    useEffect(()=>{
     getForeCastData(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
    },[])

    const getForeCastData = (url) => {
      fetchData(url)
        .then((data) => {
          setForecast(data.data.list);
          console.log(data.data.list);
          var dayForeCast2 = ([])
          for(let i=7; i < forecast.length ; i+=8){
            dayForeCast2.push(forecast[i])
            console.log("test",dayForeCast2);
          }
          setDayForeCast(dayForeCast2)
        })
        .catch((error) => {
          console.log(error);
        });
    };
    function date(date){
      let a = date.substring(8,10)
      let b = date.substring(5,7)
      return `${a}/${b}`
    }
    console.log("dayforecast2",dayForeCast);

  return (
    <div>
      {dayForeCast.map((e)=>{
          return (
                <div>
                  <h1>{date(e.dt_txt)}</h1>
                  <img src={`../../../asset/icons/${e.weather[0].icon}.png`} alt="" />
                  <h1>{e.main.temp}</h1>
                </div>
                )
      })}
    </div>
  )
}

export default Forecast