import { useReveal } from '../../hooks/useReveal';
import styles from './CTA.module.css';

export default function CTA({ onBook }) {
  const ref = useReveal();

  return (
    <section id="contact" className={styles.section}>
      <div ref={ref} className={`reveal ${styles.box}`}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Gotowy na podróż{' '}
            <em className={styles.em}>swojego życia?</em>
          </h2>
          <p className={styles.sub}>
            Nasi eksperci są do Twojej dyspozycji.
            <br />
            Bezpłatna konsultacja, spersonalizowana oferta.
          </p>
        </div>
        <div className={styles.actions}>
          <button className="btn btn-primary btn-lg" onClick={onBook}>
            Zarezerwuj konsultację
          </button>
          <button className="btn btn-outline btn-lg">
            Pobierz katalog
          </button>
        </div>
      </div>
    </section>
  );
}
