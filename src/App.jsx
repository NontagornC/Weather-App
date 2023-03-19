import './App.css'
import axios from 'axios'
import { useEffect,useState } from 'react'

function App() {
  const name = "Chonburi";
  const apiKey = "4af89ad12072525b24f67ffb9d561df4";
  const [data, setData] = useState({});
  
  useEffect(()=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
    const data = axios(url).then((result)=>{
      setData(result)
      console.log("result = ",result);
    })
  },[])

  return (
    <div className="App">
      <h1>test</h1>
      <h1>{data.data.name}</h1>
    </div>
  )
}

export default App
