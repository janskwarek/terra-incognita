import { useRef, useState, useEffect } from "react";
import { useCounter } from "../../hooks/useCounter";
import { STATS } from "../../data/content";
import styles from "./Stats.module.css";

export default function Stats() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" ref={ref} className={styles.bar}>
      {STATS.map((stat, i) => (
        <StatItem key={i} stat={stat} triggered={inView} />
      ))}
    </div>
  );
}

function StatItem({ stat, triggered }) {
  const count = useCounter(stat.value, 1800, triggered);

  // Special formatting for 14800
  const display =
    stat.value === 14800
      ? `14 ${count <= 800 ? count : 800}+`
      : `${count.toLocaleString("pl-PL")}${stat.suffix}`;

  return (
    <div className={styles.item}>
      <span className={styles.num}>{display}</span>
      <span className={styles.label}>{stat.label}</span>
    </div>
  );
}
