import { useEffect, useState } from 'react';

export function useFixedScrollFlicker() {
  const [scrollbarWidth, setScrollbarWidth] = useState();

  useEffect(function () {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    setScrollbarWidth(scrollbarWidth);

    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflowY = 'scroll';
      document.body.style.paddingRight = '';
    };
  }, []);

  return scrollbarWidth;
}
