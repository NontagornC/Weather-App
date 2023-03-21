import React, { useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import { useState } from 'react'
import "./Current.css"
import {CiTempHigh,CiCloudSun} from "react-icons/ci"
import { FaRegSnowflake } from "react-icons/fa";
import { TbWind } from "react-icons/tb";
import { IoMdWater } from "react-icons/io";

const Current = () => {
    const cityName = "Chonburi";
    const apiKey = "4af89ad12072525b24f67ffb9d561df4";
    const [current,setCurrent]=useState([])

    useEffect(()=>{
      getCurrentData(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    },[])
  
    const getCurrentData =(url)=> {
    fetchData(url).then((data)=>{
        setCurrent(data)
        console.log(data);
    }).catch((error)=>{
        console.log(error);
    })
  }

  const lastUpdated =(data)=> new Date(data).toLocaleString({
    timeZone: 'Asia/Bangkok',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  let covertK =(k)=>{
    return (k-273.15).toFixed(2)
  }

  return (
      <div className="current_contaner">
          <div className="current_header">
            <div className="left">
              <h2>{current.data?.name}</h2>
              <h4>{lastUpdated(current.data?.dt)}</h4>
              <div className="temp_box">
                <span>{covertK(current.data?.main.temp)}</span>
                <span>{current.data?.weather[0].description.toUpperCase()}</span>
              </div>
            </div>
            <div className="right">
              <img src="../../../asset/icons/01d.png" alt="" />
            </div>
          </div>

          <div className="current_detail">
            <div className="detail_box">
              <CiTempHigh/>
              <h5>{covertK(current.data?.main.feels_like)}</h5>
              <h6>feel like</h6>
            </div>
            <div className="detail_box">
              <CiCloudSun/>
              <h5>{covertK(current.data?.main.temp_max)}</h5>
              <h6>Max-temp</h6>
            </div>
            <div className="detail_box">
              <FaRegSnowflake/>
              <h5>{covertK(current.data?.main.temp_min)}</h5>
              <h6>Min-temp</h6>
            </div>
            <div className="detail_box">
              <TbWind/>
              <h5>{current.data?.wind.speed} <span>km/h</span></h5>
              <h6>Wind speed</h6>
            </div>
            <div className="detail_box">
              <IoMdWater/>
              <h5>{current.data?.main.humidity}</h5>
              <h6>Huminity</h6>
            </div>
          </div>
      </div>

  )
}

export default Current