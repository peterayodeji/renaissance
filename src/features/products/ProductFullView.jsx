import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useProductFullView } from './useProductFullView';

function ProductFullView({ zoomViewIndex, setZoomViewIndex, images }) {
  const imageRefs = useRef([]);
  const { activeIndex, handleClickPosition } = useProductFullView(
    imageRefs,
    zoomViewIndex,
  );

  return createPortal(
    <div className="fixed inset-0 z-30 w-screen overflow-y-scroll bg-white">
      <div className="space-y-32">
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
        className="fixed right-[14px] top-0 p-2"
      >
        <img src="/x.svg" alt="Close" className="w-9" />
      </button>

      <div className="fixed right-[14px] top-1/2 -translate-y-1/2 transform">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => handleClickPosition(index)}
            className={`block p-4 font-medium ${activeIndex === index ? 'text-black' : 'text-stone-500'}`}
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
