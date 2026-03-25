import styles from './BookingModal.module.css';
import { DESTINATIONS } from '../../data/content';

export default function BookingModal({ isOpen, onClose }) {
  return (
    <div 
      className={`${styles.overlay} ${isOpen ? styles.open : ''}`} 
      aria-hidden={!isOpen}
    >
      <div className={styles.contentCurtain}>
        <div className={styles.header}>
          <h2 className={styles.title}>Wyruszmy Razem</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Zamknij">
            {/* Simple close X svg */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); onClose(); }}>
          <div className={styles.group}>
            <label htmlFor="name" className={styles.label}>Imię i nazwisko</label>
            <input type="text" id="name" className={styles.input} required placeholder="Jan Kowalski" />
          </div>
          
          <div className={styles.group}>
            <label htmlFor="email" className={styles.label}>Email kontaktowy</label>
            <input type="email" id="email" className={styles.input} required placeholder="jan@example.com" />
          </div>

          <div className={styles.group}>
            <label htmlFor="destination" className={styles.label}>Wymarzony kierunek</label>
            <select id="destination" className={styles.select} required defaultValue="">
              <option value="" disabled>Wybierz cel podróży...</option>
              {DESTINATIONS.map((dest) => (
                <option key={dest.id} value={dest.name}>{dest.name} ({dest.country})</option>
              ))}
              <option value="inne">Zaproponujcie mi coś innego</option>
            </select>
          </div>

          <div className={styles.group}>
            <label htmlFor="date" className={styles.label}>Planowany termin</label>
            <input type="month" id="date" className={styles.input} required />
          </div>

          <button type="submit" className={`btn btn-primary btn-lg ${styles.submit}`}>
            Potwierdź rezerwację
          </button>
        </form>
      </div>
    </div>
  );
}
