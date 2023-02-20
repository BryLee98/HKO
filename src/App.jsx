import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// React component must be synchronous

// useEffect

function App() {
  const [count, setCount] = useState(0)
  const [weather, setWeather] = useState(null)

  /*
  Task: Load weather from weather API only on first render.
  */

  useEffect(() => {
    // Cannot await here. Because if we want to await, we must change the wrapping function into async function,
    // but React forbids us to do so.
    console.log('before fetch')

    fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en')
      .then(data => data.json())
      .then(weather => {
        console.log(weather)
        setWeather(weather)
      })

    console.log('after fetch')
  }, [])


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        {weather === null ? null : weather.weatherForecast.slice(0, 7).map(forecast => (
          <p> {forecast.forecastDate} : {forecast.forecastWeather}  </p>
        ))
        }
      </p>
    </div>
  )
}

export default App
