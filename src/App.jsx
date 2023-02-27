import { useEffect, useState } from 'react'
import Forecast from './Forecast'
import styles from './App.module.css'
// React component must be synchronous

// useEffect

function App() {
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
    <div className={styles.app}>
      <div className={styles.bg}></div>
      <h1>Hong Kong</h1>
      <h2>Next 7 days</h2>
      <div className={styles.forecastWrapper}>
        {weather === null ? null : weather.weatherForecast.slice(0, 7).map((f, i) => (
          <Forecast key={f.forecastDate} forecast={f} isFull={i === 0} />
        ))
        }
      </div>
    </div>
  )
}

export default App
