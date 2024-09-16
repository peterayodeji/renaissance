import { useState, useRef, useEffect } from 'react';

function SubCategory() {
  const [scrollPosition, setScrollPosition] = useState('start');
  const [containerOverflows, setContainerOverflows] = useState(false);
  const containerRef = useRef(null);
  const scrollAmount = 100;
  const threshold = 1;

  useEffect(function () {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (scrollWidth > clientWidth) setContainerOverflows(true);
  }, []);

  function handleClickPrev() {
    containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }

  function handleClickNext() {
    containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }

  function handleScroll() {
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (scrollLeft === 0) {
      setScrollPosition('start');
    } else if (scrollLeft + clientWidth >= scrollWidth - threshold) {
      setScrollPosition('end');
    } else {
      if (scrollPosition === 'middle') return;
      setScrollPosition('middle');
    }
  }

  return (
    <div className="bg-blue-30 mb-8 h-36 px-2 pt-8 sm:px-4 md:h-40 md:px-8">
      <h3 className="mb-4 text-sm sm:text-base">WOMAN</h3>

      <div className="relative">
        <ul
          ref={containerRef}
          onScroll={handleScroll}
          className="remove-scrollbar bg-purple-30 flex gap-x-3 overflow-x-scroll text-xs uppercase tracking-wider sm:gap-x-6 sm:text-sm [&>*]:shrink-0"
        >
          <li>
            <a href="#">Clothing</a>
          </li>
          <li>
            <a href="#">Belts</a>
          </li>
          <li>
            <a href="#">Caps & Hats</a>
          </li>
          <li>
            <a href="#">Underwears</a>
          </li>
          <li>
            <a href="#">Necklace</a>
          </li>
          <li>
            <a href="#">Shirts</a>
          </li>
          <li>
            <a href="#">Trousers</a>
          </li>
          <li>
            <a href="#">Shorts</a>
          </li>
          <li>
            <a href="#">Gowns</a>
          </li>
          <li>
            <a href="#">Skirts</a>
          </li>
          <li>
            <a href="#">Joggers</a>
          </li>
          <li>
            <a href="#">Shoes</a>
          </li>
          <li>
            <a href="#">Cardigan & Hoodies</a>
          </li>
          <li>
            <a href="#">Knit wears</a>
          </li>
          <li>
            <a href="#">Belts</a>
          </li>
          <li>
            <a href="#">Caps & Hats</a>
          </li>
          <li>
            <a href="#">Underwears</a>
          </li>
          <li>
            <a href="#">Necklace</a>
          </li>
          <li>
            <a href="#">Gowns</a>
          </li>
        </ul>

        {/* Navigation buttons */}
        <div
          className={`absolute left-0 top-0 flex h-full items-center ${scrollPosition === 'start' ? 'hidden' : 'block'}`}
        >
          <button onClick={handleClickPrev} className="bg-white px-2">
            <img src="/chevron-left.svg" alt="Left Arrow" className="h-5" />
          </button>
          <div className="w-6 bg-[linear-gradient(to_left,rgba(255,255,255,0.3),rgba(255,255,255,0.9))]">
            &nbsp;
          </div>
        </div>

        <div
          className={`absolute right-0 top-0 flex h-full items-center ${scrollPosition === 'end' || !containerOverflows ? 'hidden' : 'block'}`}
        >
          <div className="w-6 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.9))]">
            &nbsp;
          </div>
          <button onClick={handleClickNext} className="bg-white px-2">
            <img src="/chevron-right.svg" alt="Right Arrow" className="h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
