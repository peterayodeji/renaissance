import { useContainerScroll } from '../hooks/useContainerScroll';

function ScrollableListContainer({ children }) {
  const {
    scrollPosition,
    containerOverflows,
    containerRef,
    handleClickPrev,
    handleClickNext,
    handleScroll,
  } = useContainerScroll();

  return (
    <div className="relative">
      <ul
        ref={containerRef}
        onScroll={handleScroll}
        className="remove-scrollbar bg-purple-30 flex gap-x-3 overflow-x-scroll sm:gap-x-6 [&>*]:shrink-0"
      >
        {children}
      </ul>

      {/* Navigation button and fading implementation */}
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
  );
}

export default ScrollableListContainer;
