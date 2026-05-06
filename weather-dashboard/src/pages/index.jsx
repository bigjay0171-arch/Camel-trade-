import { useState, useEffect } from 'react';
import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import ForecastCard from '../components/ForecastCard';
import { getWeatherByCity, getForecastByCity, getWeatherByCoordinates, getForecastByCoordinates } from '../utils/weatherAPI';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [city, setCity] = useState('London');

  // Fetch weather on component mount (default city)
  useEffect(() => {
    fetchWeather('London');
  }, []);

  const fetchWeather = async (searchCity) => {
    setLoading(true);
    setError('');
    try {
      const weatherData = await getWeatherByCity(searchCity);
      const forecastData = await getForecastByCity(searchCity);
      setWeather(weatherData);
      setForecast(forecastData);
      setCity(searchCity);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoordinates = async (lat, lon) => {
    setLoading(true);
    setError('');
    try {
      const weatherData = await getWeatherByCoordinates(lat, lon);
      const forecastData = await getForecastByCoordinates(lat, lon);
      setWeather(weatherData);
      setForecast(forecastData);
      setCity(weatherData.name);
    } catch (err) {
      setError('Failed to fetch location weather. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Weather Dashboard - Real-time Weather Updates</title>
        <meta name="description" content="Real-time weather dashboard with 5-day forecasts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>🌤️ Weather Dashboard</h1>
            <p>Real-time weather and 5-day forecasts</p>
          </div>

          <SearchBar onSearch={fetchWeather} onLocationSelect={fetchWeatherByCoordinates} />

          {error && <div className={styles.error}>{error}</div>}

          {loading && <div className={styles.loading}>Loading weather data...</div>}

          {weather && !loading && (
            <>
              <WeatherCard weather={weather} />

              {forecast && (
                <div className={styles.forecastContainer}>
                  <h2>5-Day Forecast</h2>
                  <ForecastCard forecast={forecast} />
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </>
  );
}
