import { useEffect, useRef } from 'react';

/**
 * useParallax — translates an element as the page scrolls.
 *
 * @param {number} speed — multiplier. 0.3 = moves 30% of scrollY.
 *                         Negative = moves in opposite direction.
 *
 * Usage:
 *   const bgRef = useParallax(0.35);
 *   <div ref={bgRef} className="hero-bg" />
 */
export function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          el.style.transform = `translateY(${window.scrollY * speed}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed]);

  return ref;
}
