import { useState, useEffect } from 'react';

// Custom hook for managing favorite jokes in localStorage
export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('favoriteJokes');
      setFavorites(stored ? JSON.parse(stored) : []);
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
    setLoaded(true);
  }, []);

  // Save to localStorage whenever favorites change
  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem('favoriteJokes', JSON.stringify(favorites));
      } catch (error) {
        console.error('Error saving favorites:', error);
      }
    }
  }, [favorites, loaded]);

  const addFavorite = (joke) => {
    if (!favorites.some((fav) => fav.joke === joke.joke)) {
      setFavorites([...favorites, { ...joke, id: Date.now() }]);
      return true;
    }
    return false;
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const isFavorited = (jokeText) => {
    return favorites.some((fav) => fav.joke === jokeText);
  };

  const clearAllFavorites = () => {
    setFavorites([]);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorited,
    clearAllFavorites,
  };
};
