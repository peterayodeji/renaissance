import { useState, useEffect } from 'react';

export function useProductFullView(imageRefs, zoomViewIndex) {
  const [activeIndex, setActiveIndex] = useState(zoomViewIndex);

  useEffect(
    function () {
      document.body.style.overflowY = 'hidden';
      imageRefs.current[zoomViewIndex].scrollIntoView();

      return () => (document.body.style.overflowY = 'scroll');
    },
    [zoomViewIndex, imageRefs],
  );

  useEffect(
    function () {
      const imageSectionRefs = imageRefs.current;

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const visibleImage = entry.target.getAttribute('data-index');
              setActiveIndex(+visibleImage);
            }
          });
        },
        { threshold: 0.1 },
      );

      imageSectionRefs.forEach(img => {
        if (img) observer.observe(img);
      });

      // Cleanup the observer on component unmount
      return () => {
        imageSectionRefs.forEach(img => {
          if (img) observer.unobserve(img);
        });
      };
    },
    [imageRefs],
  );

  function handleClickPosition(index) {
    imageRefs.current[index].scrollIntoView();
  }

  return { activeIndex, handleClickPosition };
}
