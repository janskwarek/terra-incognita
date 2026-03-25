import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2600&auto=format&fit=crop', // Santorini
  'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2600&auto=format&fit=crop', // Kyoto
  'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2600&auto=format&fit=crop', // Maldives
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2600&auto=format&fit=crop', // Patagonia
  'https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?q=80&w=2600&auto=format&fit=crop', // Amalfi
  'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2600&auto=format&fit=crop', // Machu Picchu
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className={styles.hero}>

      <div className={styles.bg} aria-hidden="true">
        {HERO_IMAGES.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`${styles.slide} ${index === currentImage ? styles.slideActive : ''}`}
          />
        ))}
        <div className={styles.overlay} />
        <div className={styles.gridLines} />
        <div className={styles.grain} />
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
      </div>

      <div className={styles.content}>
        <p className={`${styles.preHeadline} hero-enter delay-1`}>
          ✦ &nbsp; Luxury Travel Agency &nbsp; ✦
        </p>

        <h1 className={styles.heading}>
          <span className={`${styles.line} hero-enter delay-2`}>Odkrywaj</span>
          <span className={`${styles.line} ${styles.italic} hero-enter delay-3`}>
            Najpiękniejsze
          </span>
          <span className={`${styles.line} hero-enter delay-4`}>Zakątki Ziemi</span>
        </h1>

        <p className={`${styles.sub} hero-enter delay-5`}>
          Tworzymy podróże, które zostają z Tobą na całe życie.
          <br />
          Najpiękniejsze miejsca na Ziemi, perfekcyjnie zaplanowane.
        </p>
      </div>

      <a href="#destinations" className={`${styles.scrollInd} hero-enter delay-7`} aria-label="Przewiń wdół">
        <svg viewBox="0 0 100 100" className={styles.circleText}>
          <defs>
            <path id="circlePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" />
          </defs>
          <text>
            <textPath href="#circlePath" className={styles.textPath}>
              ODKRYWAJ ze mna swiat * odkrywaj * 
            </textPath>
          </text>
        </svg>
        <div className={styles.arrowDown}>↓</div>
      </a>
    </section>
  );
}
