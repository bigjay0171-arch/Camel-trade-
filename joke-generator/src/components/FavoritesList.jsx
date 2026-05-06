import styles from '../styles/components.module.css';

export default function FavoritesList({ favorites, onRemove, onClose }) {
  return (
    <div className={styles.favoritesModal}>
      <div className={styles.favoritesContent}>
        <div className={styles.favoritesHeader}>
          <h2>❤️ Your Favorite Jokes</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {favorites.length === 0 ? (
          <p className={styles.emptyMessage}>No favorite jokes yet! Start adding some! 😄</p>
        ) : (
          <div className={styles.favoritesList}>
            {favorites.map((fav) => (
              <div key={fav.id} className={styles.favoriteItem}>
                <p>{fav.joke}</p>
                <button
                  className={styles.removeFavBtn}
                  onClick={() => onRemove(fav.id)}
                  title="Remove from favorites"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
