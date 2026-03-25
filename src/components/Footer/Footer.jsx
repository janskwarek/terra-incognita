import styles from './Footer.module.css';

const LINKS = {
  Wycieczki: ['Grand Asia Tour', 'Mediterranean Dream', 'Patagonia Expedition', 'Wszystkie wycieczki'],
  Destynacje: ['Grecja', 'Japonia', 'Włochy', 'Ameryka Południowa'],
  Firma: ['O nas', 'Blog', 'Prasa', 'Kariera'],
  Kontakt: ['hello@terraincognita.pl', '+48 22 000 00 00', 'ul. Złota 7, Warszawa'],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <a href="#" className={styles.logo}>TERRA INCOGNITA</a>
          <p className={styles.tagline}>
            Tworzymy podróże,<br />które zostają na całe życie.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(LINKS).map(([col, items]) => (
          <div key={col} className={styles.col}>
            <h4 className={styles.colTitle}>{col}</h4>
            <ul className={styles.colList}>
              {items.map((item) => (
                <li key={item}>
                  <a href="#" className={styles.colLink}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © {new Date().getFullYear()} Terra Incognita. Wszystkie prawa zastrzeżone.
        </span>
        <div className={styles.legal}>
          <a href="#" className={styles.legalLink}>Polityka prywatności</a>
          <a href="#" className={styles.legalLink}>Regulamin</a>
          <a href="#" className={styles.legalLink}>Cookies</a>
        </div>
      </div>
    </footer>
  );
}
