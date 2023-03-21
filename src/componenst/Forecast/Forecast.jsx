import React from 'react'
import fetchData from '../../utils/fetchData'
import { useState,useEffect } from 'react'
import "./Forecast.css"

const Forecast = () => {
    const cityName = "London";
    const apiKey = "4af89ad12072525b24f67ffb9d561df4";
    const [forecast,setForecast]=useState([])
    const [dayForeCast,setDayForeCast]=useState([])

    useEffect(()=>{
     getForeCastData(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`)
    },[])

    useEffect(() => {
      const dayForeCast2 = [];
      for (let i = 7; i < forecast.length; i += 8) {
        dayForeCast2.push(forecast[i]);
      }
      setDayForeCast(dayForeCast2);
    }, [forecast]);
  
    const getForeCastData = (url) => {
      fetchData(url)
        .then((data) => {
          setForecast(data.data?.list);
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

    let covertK =(k)=>{
      return (k-273.15).toFixed(2)
    }

  return (
    <div className="forecast_container">
      {dayForeCast.length > 0 && dayForeCast.map((e,index)=>{
          return (
                <div className="detail_box" key={index}>
                  <img src={`../../../asset/icons/${e.weather[0]?.icon}.png`} alt="" />
                  <h1 className="temp">{covertK(e.main?.temp)}</h1>
                  <h1 className="date">{date(e?.dt_txt)}</h1>
                </div>
                )
      })}
    </div>
  )
}

export default Forecast