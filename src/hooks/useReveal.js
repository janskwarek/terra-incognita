import { useEffect, useRef } from 'react';

/**
 * useReveal — adds / removes 'visible' class based on scroll position.
 *
 * Usage:
 *   const ref = useReveal();
 *   <div ref={ref} className="reveal">...</div>
 *
 * The element needs the .reveal CSS class (from animations.css).
 * When it crosses the threshold it gets .reveal.visible.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el); // fire once
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return ref;
}
