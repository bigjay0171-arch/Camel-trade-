import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org';

if (!API_KEY) {
  console.warn('⚠️ Missing NEXT_PUBLIC_OPENWEATHER_API_KEY environment variable');
}

// Get current weather by city name
export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/2.5/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Weather API Error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to fetch weather data');
  }
};

// Get weather by coordinates
export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/2.5/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Weather API Error:', error.response?.data || error.message);
    throw new Error('Failed to fetch weather data for coordinates');
  }
};

// Get 5-day forecast by city
export const getForecastByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/2.5/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Forecast API Error:', error.response?.data || error.message);
    throw new Error('Failed to fetch forecast data');
  }
};

// Get 5-day forecast by coordinates
export const getForecastByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/data/2.5/forecast`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Forecast API Error:', error.response?.data || error.message);
    throw new Error('Failed to fetch forecast data');
  }
};

// Get weather icon URL
export const getWeatherIconUrl = (iconCode) => {
  return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
};

// Get user's geolocation
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'));
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
};
