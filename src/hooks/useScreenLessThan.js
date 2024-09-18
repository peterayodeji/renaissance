import { useEffect, useState } from 'react';

export function useScreenLessThan(width = 640) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < width);

  useEffect(
    function () {
      function handleResize() {
        setIsMobile(window.innerWidth < width);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    },
    [width],
  );

  return isMobile;
}
