import { useEffect, useState } from 'react';
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

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  return (
    <nav
      className={`${styles.nav} ${solid ? styles.solid : ''} ${menuOpen ? styles.navOpen : ''}`}
      aria-label="Nawigacja główna"
    >
      <a href="#hero" className={styles.logo} aria-label="Terra Incognita — strona główna" onClick={() => setMenuOpen(false)}>
        TERRA INCOGNITA
      </a>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
        aria-expanded={menuOpen}
        aria-controls="primary-menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      <div
        id="primary-menu"
        className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}
      >
        <ul className={styles.links} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`btn btn-primary btn-sm ${styles.cta}`}
          onClick={() => {
            setMenuOpen(false);
            onBook();
          }}
        >
          Zarezerwuj
        </button>
      </div>
    </nav>
  );
}
