import styles from "./Forecast.module.css"
import dropletImg from './assets/droplet.svg'

const Forecast = ({
    forecast,
    isFull
}) => {
    const renderedDate = (forecast.forecastDate.substring(6, 8) + '/' + forecast.forecastDate.substring(4, 6) + '/' + forecast.forecastDate.substring(0, 4))

    return (
        <div className={styles.forecast + ' ' + (isFull ? styles.isFull : '')}>
            <div className={styles.mainWeather}>
                <div className={styles.date}>
                    <span className={styles.translucent}>{renderedDate}</span>
                    <span>{forecast.week}</span>
                </div>
                <div className={styles.tempIcon}>
                    <div className={styles.temperatures}>
                        <span>{forecast.forecastMaxtemp.value}&deg;</span>
                        <span className={styles.translucent}>{forecast.forecastMintemp.value}&deg;</span>
                    </div>
                    <img src={'https://www.hko.gov.hk/images/HKOWxIconOutline/pic' + forecast.ForecastIcon + '.png'} alt="Sunny" />
                </div>
            </div>
            {isFull ? (
                <div className={styles.moreDetails}>
                    <div className={styles.humidity}>
                        <img src={dropletImg} alt="Humidity" />
                        <span>{forecast.forecastMaxrh.value}%</span>
                        <span className={styles.translucent}>{forecast.forecastMinrh.value}%</span></div>
                    <span className={styles.translucent}> {forecast.forecastWeather} </span>
                </div>
            ) : null}

        </div>
    )
}

export default Forecast
