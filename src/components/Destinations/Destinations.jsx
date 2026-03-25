import { useReveal } from '../../hooks/useReveal';
import { DESTINATIONS } from '../../data/content';
import DestinationCard from './DestinationCard';
import styles from './Destinations.module.css';

export default function Destinations() {
  const headingRef = useReveal();

  return (
    <section id="destinations" className={styles.section}>

      {/* ── Section header ──────────────────────── */}
      <div ref={headingRef} className={`reveal ${styles.header}`}>
        <span className="section-label">Najpiękniejsze miejsca na Ziemi</span>
        <h2 className="section-title">
          Nasze <em>Destynacje</em>
        </h2>
      </div>

      {/* ── Cards grid ──────────────────────────── */}
      <div className={styles.grid}>
        {DESTINATIONS.map((dest, i) => {
          // each card gets its own observer so they stagger on scroll
          return (
            <RevealCard key={dest.id} delay={i * 80}>
              <DestinationCard dest={dest} />
            </RevealCard>
          );
        })}
      </div>
    </section>
  );
}

/* Wrapper that applies the reveal animation with a delay */
function RevealCard({ children, delay }) {
  const ref = useReveal({ threshold: 0.08 });
  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
