import React, { useEffect } from 'react'
import fetchData from '../../utils/fetchData'
import { useState } from 'react'
import "./Current.css"
import {CiTempHigh,CiCloudSun} from "react-icons/ci"
import { FaRegSnowflake } from "react-icons/fa";
import { TbWind } from "react-icons/tb";
import { IoMdWater } from "react-icons/io";

const Current = ({cityName}) => {
    const apiKey = "41cc4270b07349794d744970d77261e5";
    const [current,setCurrent]=useState([])

    useEffect(()=>{
      getCurrentData(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    },[cityName])
  
    const getCurrentData =(url)=> {
    fetchData(url).then((data)=>{
        setCurrent(data)
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
              <h2>{covertK(current.data?.main.temp)} &deg;C</h2>
              <h4>{current.data?.weather[0].description.toUpperCase()}</h4>
            </div>
            <div className="right">
              <img src="../../../asset/icons/01d.png" alt="" />
            </div>
          </div>

          <div className="current_detail">
            <div className="detail_box">
              <CiTempHigh/>
              <h5>{covertK(current.data?.main.feels_like)} &deg;C</h5>
              <h6>feel like</h6>
            </div>
            <div className="detail_box">
              <CiCloudSun/>
              <h5>{covertK(current.data?.main.temp_max)} &deg;C</h5>
              <h6>Max-temp</h6>
            </div>
            <div className="detail_box">
              <FaRegSnowflake/>
              <h5>{covertK(current.data?.main.temp_min)} &deg;C</h5>
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