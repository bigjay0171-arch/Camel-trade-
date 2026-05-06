import styles from '../styles/components.module.css';

export default function ShareButtons({ joke }) {
  const shareText = `Check out this joke: "${joke.joke}"`;
  const encodedText = encodeURIComponent(shareText);

  return (
    <div className={styles.shareButtons}>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareLink}
        title="Share on Twitter"
      >
        𝕏 Twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareLink}
        title="Share on Facebook"
      >
        f Facebook
      </a>
      <a
        href={`https://wa.me/?text=${encodedText}`}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.shareLink}
        title="Share on WhatsApp"
      >
        💬 WhatsApp
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(shareText)}
        className={styles.shareLink}
        title="Copy to clipboard"
      >
        📋 Copy
      </button>
    </div>
  );
}
