import { TICKER_ITEMS } from '../../data/content';
import styles from './Ticker.module.css';

// Duplicate 4× so the marquee loop is seamless at any screen width
const ITEMS = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

export default function Ticker() {
  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.inner}>
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className={`${styles.item} ${i % 2 === 0 ? styles.gold : styles.muted}`}
          >
            {item}&nbsp;&nbsp;✦
          </span>
        ))}
      </div>
    </div>
  );
}
