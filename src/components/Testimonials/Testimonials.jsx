import { useReveal } from '../../hooks/useReveal';
import { TESTIMONIALS } from '../../data/content';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const headingRef = useReveal();

  return (
    <section className={styles.section}>
      <div ref={headingRef} className={`reveal ${styles.header}`}>
        <h2 className="section-title">
          Co mówią nasi <em>Podróżnicy</em>
        </h2>
      </div>

      <div className={styles.grid}>
        {TESTIMONIALS.map((t, i) => {
          const ref = useReveal({ threshold: 0.1 }); // eslint-disable-line
          return (
            <blockquote
              key={t.id}
              ref={ref}
              className={`reveal delay-${i + 1} ${styles.card}`}
            >
              <span className={styles.quoteMark} aria-hidden="true">"</span>
              <p className={styles.text}>{t.text}</p>
              <footer className={styles.footer}>
                <cite className={styles.name}>{t.name}</cite>
                <span className={styles.trip}>{t.trip}</span>
              </footer>
            </blockquote>
          );
        })}
      </div>
    </section>
  );
}
