import styles from '../styles/components.module.css';

export default function JokeCard({ joke, onFavorite, isFavorited, onShare }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(joke.joke);
    alert('Joke copied to clipboard! 📋');
  };

  return (
    <div className={styles.jokeCard}>
      <div className={styles.jokeHeader}>
        <span className={styles.source}>{joke.source}</span>
        <button
          className={`${styles.favoriteBtn} ${isFavorited ? styles.favorited : ''}`}
          onClick={() => onFavorite(joke)}
          title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorited ? '❤️' : '🤍'}
        </button>
      </div>

      <p className={styles.jokeText}>{joke.joke}</p>

      <div className={styles.jokeFooter}>
        <button className={styles.copyBtn} onClick={handleCopy}>
          📋 Copy
        </button>
        <button className={styles.shareBtn} onClick={() => onShare(joke)}>
          🔗 Share
        </button>
      </div>
    </div>
  );
}
