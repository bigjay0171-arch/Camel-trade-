import { JOKE_CATEGORIES, JOKE_SOURCES } from '../utils/jokeAPI';
import styles from '../styles/components.module.css';

export default function CategoryFilter({ selectedCategory, selectedSource, onCategoryChange, onSourceChange }) {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGroup}>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className={styles.filterSelect}
        >
          {JOKE_CATEGORIES.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="source">Source:</label>
        <select
          id="source"
          value={selectedSource}
          onChange={(e) => onSourceChange(e.target.value)}
          className={styles.filterSelect}
        >
          {JOKE_SOURCES.map((src) => (
            <option key={src.value} value={src.value}>
              {src.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
