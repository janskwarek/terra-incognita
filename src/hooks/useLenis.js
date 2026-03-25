import { useEffect } from 'react';

/**
 * useLenis — initialises Lenis smooth scroll on mount.
 * Import Lenis dynamically so SSR / Vite don't choke.
 *
 * Usage: call once at the App root level.
 */
export function useLenis() {
  useEffect(() => {
    let lenis;
    let raf;

    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function animate(time) {
        lenis.raf(time);
        raf = requestAnimationFrame(animate);
      }

      raf = requestAnimationFrame(animate);
    });

    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
}
