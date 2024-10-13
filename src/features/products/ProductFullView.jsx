import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useProductFullView } from './useProductFullView';
import { useFixedScrollFlicker } from '../../hooks/useFixedScrollFlicker';

function ProductFullView({ zoomViewIndex, setZoomViewIndex, images }) {
  const imageRefs = useRef([]);
  const { activeIndex, handleClickPosition } = useProductFullView(
    imageRefs,
    zoomViewIndex,
  );
  const scrollbarWidth = useFixedScrollFlicker();

  return createPortal(
    <div className="fixed inset-0 z-30 w-screen overflow-y-scroll bg-white pt-12">
      <div className="space-y-20 sm:space-y-24 md:space-y-28 lg:space-y-32">
        {images.map((img, index) => (
          <div
            key={index}
            data-index={index}
            ref={el => (imageRefs.current[index] = el)}
            onClick={() => setZoomViewIndex(-1)}
            className="cursor-zoom-out"
          >
            <img src={img} alt="Product Image" className="mx-auto" />
          </div>
        ))}
      </div>

      <button
        onClick={() => setZoomViewIndex(-1)}
        style={{ right: `${scrollbarWidth}px` }}
        className="bg-red-20 fixed top-2 px-3 py-2"
      >
        <img src="/x.svg" alt="Close" className="w-6" />
      </button>

      <div
        style={{ right: `${scrollbarWidth}px` }}
        className="bg-red-20 fixed top-1/2 hidden -translate-y-1/2 transform lg:block"
      >
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => handleClickPosition(index)}
            className={`block px-5 py-4 font-medium ${activeIndex === index ? 'text-black' : 'text-stone-500'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>,
    document.body,
  );
}

export default ProductFullView;
