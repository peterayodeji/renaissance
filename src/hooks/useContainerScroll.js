import { useState, useRef, useEffect } from 'react';

const SCROLL_AMOUNT = 100;
const THRESHOLD = 1;

export function useContainerScroll() {
  const [scrollPosition, setScrollPosition] = useState('start');
  const [containerOverflows, setContainerOverflows] = useState(false);
  const containerRef = useRef(null);

  useEffect(function () {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (scrollWidth > clientWidth) setContainerOverflows(true);
  }, []);

  function handleClickPrev() {
    containerRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  }

  function handleClickNext() {
    containerRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  }

  function handleScroll() {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (scrollLeft === 0) {
      setScrollPosition('start');
    } else if (scrollLeft + clientWidth >= scrollWidth - THRESHOLD) {
      setScrollPosition('end');
    } else {
      if (scrollPosition === 'middle') return;
      setScrollPosition('middle');
    }
  }

  return {
    scrollPosition,
    containerOverflows,
    containerRef,
    handleClickPrev,
    handleClickNext,
    handleScroll,
  };
}
