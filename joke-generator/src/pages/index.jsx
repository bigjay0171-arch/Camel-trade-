import { useState, useEffect } from 'react';
import Head from 'next/head';
import JokeCard from '../components/JokeCard';
import CategoryFilter from '../components/CategoryFilter';
import FavoritesList from '../components/FavoritesList';
import ShareButtons from '../components/ShareButtons';
import { getRandomJoke, getJokeByCategory } from '../utils/jokeAPI';
import { useFavorites } from '../hooks/useFavorites';
import styles from '../styles/Jokes.module.css';

export default function Home() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('Any');
  const [source, setSource] = useState('random');
  const [showFavorites, setShowFavorites] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const { favorites, addFavorite, removeFavorite, isFavorited, clearAllFavorites } = useFavorites();

  // Fetch joke on mount
  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    setLoading(true);
    setError('');
    setShowShare(false);
    
    try {
      let newJoke;
      if (category === 'Any') {
        newJoke = await getRandomJoke(source);
      } else {
        newJoke = await getJokeByCategory(category);
      }
      setJoke(newJoke);
    } catch (err) {
      setError(err.message || 'Failed to fetch joke. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleSourceChange = (newSource) => {
    setSource(newSource);
  };

  const handleFavorite = (jokeObj) => {
    if (isFavorited(jokeObj.joke)) {
      const fav = favorites.find((f) => f.joke === jokeObj.joke);
      if (fav) removeFavorite(fav.id);
    } else {
      addFavorite(jokeObj);
    }
  };

  const handleShare = (jokeObj) => {
    setShowShare(!showShare);
  };

  return (
    <>
      <Head>
        <title>Joke Generator - Laugh Out Loud 😂</title>
        <meta name="description" content="Random joke generator with multiple APIs and categories" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>😂 Joke Generator</h1>
            <p>Get random jokes and have a good laugh!</p>
          </div>

          <CategoryFilter
            selectedCategory={category}
            selectedSource={source}
            onCategoryChange={handleCategoryChange}
            onSourceChange={handleSourceChange}
          />

          {error && <div className={styles.error}>{error}</div>}

          {loading && <div className={styles.loading}>Loading a funny joke... 😄</div>}

          {joke && !loading && (
            <>
              <JokeCard
                joke={joke}
                onFavorite={handleFavorite}
                isFavorited={isFavorited(joke.joke)}
                onShare={handleShare}
              />
              
              {showShare && <ShareButtons joke={joke} />}
            </>
          )}

          <button
            onClick={fetchJoke}
            disabled={loading}
            className={styles.nextBtn}
          >
            {loading ? '⏳ Loading...' : '🎭 Next Joke'}
          </button>

          <div className={styles.footer}>
            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className={styles.favBtn}
              title="View your favorite jokes"
            >
              ❤️ Favorites ({favorites.length})
            </button>
            {favorites.length > 0 && (
              <button
                onClick={clearAllFavorites}
                className={styles.clearBtn}
                title="Clear all favorites"
              >
                🗑️ Clear All
              </button>
            )}
          </div>
        </div>

        {showFavorites && (
          <FavoritesList
            favorites={favorites}
            onRemove={removeFavorite}
            onClose={() => setShowFavorites(false)}
          />
        )}
      </main>
    </>
  );
}
