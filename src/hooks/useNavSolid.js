import { useEffect, useState } from 'react';

/**
 * useNavSolid — returns true when scrollY exceeds `threshold`.
 * Used by the Nav component to switch from transparent → opaque.
 */
export function useNavSolid(threshold = 80) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return solid;
}
