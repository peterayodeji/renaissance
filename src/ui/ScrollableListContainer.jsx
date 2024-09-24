import { useContainerScroll } from '../hooks/useContainerScroll';

function ScrollableListContainer({
  children,
  prevCustomBtn,
  nextCustomBtn,
  fade = true,
  style = {},
}) {
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
        className="remove-scrollbar flex gap-x-3 overflow-x-scroll md:gap-x-6 [&>*]:shrink-0"
        style={style}
      >
        {children}
      </ul>

      {/* Navigation button and fading implementation */}
      <div
        onClick={handleClickPrev}
        className={`absolute left-0 top-0 flex h-full items-center ${scrollPosition === 'start' ? 'hidden' : 'block'}`}
      >
        {/*  Button Prev */}
        {prevCustomBtn ? (
          prevCustomBtn
        ) : (
          <button className="flex h-full items-center justify-center bg-white px-2">
            <img src="/chevron-left.svg" alt="Left Arrow" className="h-5" />
          </button>
        )}

        {fade && (
          <div className="h-full w-6 bg-[linear-gradient(to_left,rgba(255,255,255,0.3),rgba(255,255,255,0.9))]">
            &nbsp;
          </div>
        )}
      </div>

      <div
        onClick={handleClickNext}
        className={`absolute right-0 top-0 flex h-full items-center ${scrollPosition === 'end' || !containerOverflows ? 'hidden' : 'block'}`}
      >
        {fade && (
          <div className="h-full w-6 bg-[linear-gradient(to_right,rgba(255,255,255,0.3),rgba(255,255,255,0.9))]">
            &nbsp;
          </div>
        )}

        {/* Button Next */}
        {nextCustomBtn ? (
          nextCustomBtn
        ) : (
          <button className="flex h-full items-center justify-center bg-white px-2">
            <img src="/chevron-right.svg" alt="Right Arrow" className="h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ScrollableListContainer;
