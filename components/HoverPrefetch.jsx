'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function HoverPrefetch() {
  const router = useRouter();
  const prefetchedUrls = useRef(new Set());
  const timeoutId = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleMouseOver = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      
      // Only prefetch relative internal links
      if (
        !href ||
        href.startsWith('http') ||
        href.startsWith('//') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        prefetchedUrls.current.has(href)
      ) {
        return;
      }

      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      // Debounce: Wait 80ms before prefetching to avoid accidental hovers
      timeoutId.current = setTimeout(() => {
        try {
          router.prefetch(href);
          prefetchedUrls.current.add(href);
          console.log(`[Prefetch] Successfully prefetched: ${href}`);
        } catch (err) {
          console.warn(`[Prefetch] Failed to prefetch ${href}:`, err);
        }
      }, 80);
    };

    const handleMouseOut = (e) => {
      const anchor = e.target.closest('a');
      if (anchor && timeoutId.current) {
        clearTimeout(timeoutId.current);
        timeoutId.current = null;
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [router]);

  return null;
}
