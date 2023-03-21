import { useState } from 'react'
import './App.css'
import Current from './componenst/Current/Current'
import Forecast from './componenst/Forecast/Forecast'

function App() {
  const [word,setWord]=useState("")
  const [cityName,setCityName]=useState("Bangkok")
  // const apiKey = "f5582c8c5c76fff6977ede4bc7e0fc51"
  
  return (
    <div className="App">
      <div className="container-input">
        <input type="text" placeholder="Search"  className="input" value={word} onChange={(e)=>setWord(e.target.value)}/>
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" onClick={()=>setCityName(word)}>
          <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill="#000" fillRule="evenodd"></path>
        </svg>
      </div>
      <Current cityName={cityName} />
      <Forecast cityName={cityName} />
    </div>
  )
}

export default App
