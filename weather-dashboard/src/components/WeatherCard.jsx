import { getWeatherIconUrl } from '../utils/weatherAPI';
import styles from '../styles/components.module.css';

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    name,
    sys,
    main,
    weather: weatherArray,
    wind,
    clouds,
    visibility,
    main: { pressure },
  } = weather;

  const weatherCondition = weatherArray[0];
  const iconUrl = getWeatherIconUrl(weatherCondition.icon);

  return (
    <div className={styles.weatherCard}>
      <div className={styles.headerSection}>
        <div className={styles.locationInfo}>
          <h2>{name}, {sys.country}</h2>
          <p className={styles.description}>{weatherCondition.main}</p>
        </div>
        <div className={styles.temperatureSection}>
          <img src={iconUrl} alt={weatherCondition.description} className={styles.weatherIcon} />
          <div className={styles.temperature}>
            <span className={styles.temp}>{Math.round(main.temp)}°C</span>
            <span className={styles.feelsLike}>Feels like {Math.round(main.feels_like)}°C</span>
          </div>
        </div>
      </div>

      <div className={styles.detailsGrid}>
        <div className={styles.detailItem}>
          <span className={styles.label}>💧 Humidity</span>
          <span className={styles.value}>{main.humidity}%</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>🌬️ Wind Speed</span>
          <span className={styles.value}>{wind.speed.toFixed(1)} m/s</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>🔄 Pressure</span>
          <span className={styles.value}>{pressure} mb</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>☁️ Cloudiness</span>
          <span className={styles.value}>{clouds.all}%</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>👁️ Visibility</span>
          <span className={styles.value}>{(visibility / 1000).toFixed(1)} km</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.label}>🌡️ Max/Min</span>
          <span className={styles.value}>{Math.round(main.temp_max)}°C / {Math.round(main.temp_min)}°C</span>
        </div>
      </div>
    </div>
  );
}
