import { useEffect, useRef, useState } from 'react';

/**
 * useCounter — animates a number from 0 to `target` when triggered.
 *
 * @param {number} target  — final value
 * @param {number} duration — ms
 * @param {boolean} triggered — start counting when true
 *
 * Returns the current display value.
 */
export function useCounter(target, duration = 1800, triggered = false) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!triggered) return;

    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, triggered]);

  return value;
}
