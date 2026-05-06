import { useState } from 'react';
import { getUserLocation } from '../utils/weatherAPI';
import styles from '../styles/components.module.css';

export default function SearchBar({ onSearch, onLocationSelect }) {
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
      setSearchInput('');
    }
  };

  const handleGeolocation = async () => {
    setLoading(true);
    try {
      const location = await getUserLocation();
      onLocationSelect(location.lat, location.lon);
    } catch (error) {
      alert('Unable to get your location. Please enable location permissions.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Enter city name (e.g., London, New York, Tokyo)..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          🔍 Search
        </button>
      </form>
      <button
        onClick={handleGeolocation}
        disabled={loading}
        className={styles.locationButton}
        title="Use your current location"
      >
        {loading ? '⏳ Getting location...' : '📍 My Location'}
      </button>
    </div>
  );
}
