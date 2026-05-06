import { getWeatherIconUrl } from '../utils/weatherAPI';
import { format } from 'date-fns';
import styles from '../styles/components.module.css';

export default function ForecastCard({ forecast }) {
  if (!forecast || !forecast.list) return null;

  // Get one forecast per day (every 8 entries = 24 hours)
  const dailyForecasts = forecast.list
    .filter((_, index) => index % 8 === 0)
    .slice(0, 5);

  return (
    <div className={styles.forecastGrid}>
      {dailyForecasts.map((day, index) => (
        <div key={index} className={styles.forecastItem}>
          <div className={styles.forecastDate}>
            {format(new Date(day.dt * 1000), 'EEE, MMM d')}
          </div>
          <img
            src={getWeatherIconUrl(day.weather[0].icon)}
            alt={day.weather[0].description}
            className={styles.forecastIcon}
          />
          <div className={styles.forecastCondition}>{day.weather[0].main}</div>
          <div className={styles.forecastTemp}>
            <span className={styles.tempHigh}>{Math.round(day.main.temp_max)}°</span>
            <span className={styles.tempLow}>{Math.round(day.main.temp_min)}°</span>
          </div>
          <div className={styles.forecastHumidity}>💧 {day.main.humidity}%</div>
        </div>
      ))}
    </div>
  );
}
