import { useState } from 'react';
import { useNavSolid } from '../../hooks/useNavSolid';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { label: 'Destynacje', href: '#destinations' },
  { label: 'Wycieczki',  href: '#tours' },
  { label: 'O nas',      href: '#about' },
  { label: 'Kontakt',    href: '#contact' },
];

export default function Nav({ onBook }) {
  const solid = useNavSolid(80);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${styles.nav} ${solid ? styles.solid : ''} ${menuOpen ? styles.navOpen : ''}`}>
      <a href="#" className={styles.logo} aria-label="Terra Incognita — strona główna">
        TERRA INCOGNITA
      </a>

      <button 
        className={styles.hamburger} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
        <ul className={styles.links} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className={`btn btn-primary btn-sm ${styles.cta}`} onClick={onBook}>
          Zarezerwuj
        </button>
      </div>
    </nav>
  );
}
