import styles from './Destinations.module.css';

function formatPrice(price, currency) {
  return `od ${price.toLocaleString('pl-PL')} ${currency}`;
}

export default function DestinationCard({ dest }) {
  const { name, country, duration, tagline, price, currency, tag } = dest;

  return (
    <article className={styles.card}>
      {/* ── Art / image layer ──────────────────── */}
      <div className={styles.artWrap} aria-hidden="true">
        {dest.image ? (
          <img src={dest.image} alt={name} className={styles.img} />
        ) : (
          <CssArt scheme={dest.colorScheme} id={dest.id} />
        )}
      </div>

      {/* ── Dark gradient overlay ──────────────── */}
      <div className={styles.overlay} />

      {/* ── Tag badge (optional) ──────────────── */}
      {tag && <span className={styles.tag}>{tag}</span>}

      {/* ── Info block ────────────────────────── */}
      <div className={styles.info}>
        <p className={styles.meta}>
          {country} · {duration}
        </p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.tagline}>{tagline}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{formatPrice(price, currency)}</span>
          <span className={styles.cta}>Szczegóły →</span>
        </div>
      </div>
    </article>
  );
}

/* ── CSS art placeholders ────────────────────────
   Remove this entire component once you have real
   photography. Each case returns a styled div that
   approximates the destination palette.
──────────────────────────────────────────────── */
function CssArt({ id, scheme }) {
  const style = {
    position: 'absolute',
    inset: 0,
    background: `linear-gradient(170deg, ${scheme.sky} 0%, ${scheme.horizon ?? scheme.sky} 30%, ${scheme.sea ?? scheme.deep} 65%, ${scheme.deep} 100%)`,
  };
  return <div style={style} className={styles.cssArt} />;
}
