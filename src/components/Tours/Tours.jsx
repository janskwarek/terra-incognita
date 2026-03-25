import { useReveal } from '../../hooks/useReveal';
import { TOURS } from '../../data/content';
import styles from './Tours.module.css';

export default function Tours() {
  const headingRef = useReveal();

  return (
    <section id="tours" className={styles.section}>
      <div ref={headingRef} className="reveal">
        <span className="section-label">Starannie wyselekcjonowane</span>
        <h2 className="section-title">
          Flagowe <em>Wycieczki</em>
        </h2>
      </div>

      <div className={styles.list}>
        {TOURS.map((tour, i) => (
          <TourItem key={tour.id} tour={tour} flip={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function TourItem({ tour, flip }) {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <article
      ref={ref}
      className={`reveal ${styles.item} ${flip ? styles.flip : ''}`}
    >
      {/* ── Map visual ──────────────────────── */}
      <div className={styles.visual}>
        <span className={styles.tourTag}>{tour.tag}</span>
        <svg
          className={styles.map}
          viewBox="0 0 420 320"
          aria-hidden="true"
        >
          {/* Grid */}
          {[0,1,2,3,4].map(n => (
            <line
              key={`v${n}`}
              x1={n * 105} y1={0} x2={n * 105} y2={320}
              stroke="rgba(200,169,126,0.04)" strokeWidth={1}
            />
          ))}
          {[0,1,2,3].map(n => (
            <line
              key={`h${n}`}
              x1={0} y1={n * 80} x2={420} y2={n * 80}
              stroke="rgba(200,169,126,0.04)" strokeWidth={1}
            />
          ))}

          {/* Route lines */}
          {tour.mapPoints.map((pt, i) => {
            if (i === 0) return null;
            const prev = tour.mapPoints[i - 1];
            return (
              <line
                key={i}
                x1={prev.x} y1={prev.y} x2={pt.x} y2={pt.y}
                stroke="rgba(200,169,126,0.45)"
                strokeWidth={0.6}
                strokeDasharray="5 5"
              />
            );
          })}

          {/* Points */}
          {tour.mapPoints.map((pt) => (
            <g key={pt.label}>
              <circle cx={pt.x} cy={pt.y} r={9}
                fill="none" stroke="rgba(200,169,126,0.32)" strokeWidth={0.5} />
              <circle cx={pt.x} cy={pt.y} r={4}
                fill="rgba(200,169,126,0.92)" />
              <text
                x={pt.x + 13} y={pt.y + 4}
                fill="rgba(240,235,227,0.65)"
                fontSize={10}
                fontFamily="var(--font-sans)"
              >
                {pt.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* ── Content ─────────────────────────── */}
      <div className={styles.content}>
        <p className={styles.duration}>
          {tour.duration} · {tour.groupSize}
        </p>
        <h3 className={styles.name}>{tour.name}</h3>
        <p className={styles.route}>{tour.route}</p>
        <p className={styles.desc}>{tour.description}</p>

        {/* Includes tags */}
        <ul className={styles.includes} aria-label="W cenie">
          {tour.includes.map((item) => (
            <li key={item} className={styles.includeTag}>{item}</li>
          ))}
        </ul>

        <div className={styles.actions}>
          <span className={styles.price}>
            {tour.price.toLocaleString('pl-PL')} {tour.currency} / os.
          </span>
          <button className="btn btn-outline btn-sm">Dowiedz się więcej</button>
        </div>
      </div>
    </article>
  );
}
