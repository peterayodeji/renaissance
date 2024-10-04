import { useState } from 'react';
import ProductFullView from '../features/products/ProductFullView';

const IMAGES = [
  '/vivienne-westwood-multicolor-stuart-sweater.webp',
  '/vivienne-westwood-multicolor-stuart-sweater.webp',
  '/vivienne-westwood-multicolor-stuart-sweater.webp',
  '/vivienne-westwood-multicolor-stuart-sweater.webp',
];

function Product() {
  const [zoomViewIndex, setZoomViewIndex] = useState(-1);

  return (
    <>
      <div className="grid grow grid-cols-[1fr_40%_1fr] items-end bg-white">
        <div className="bg-blue-20 sticky bottom-0 flex items-center justify-center md:h-[calc(100vh-4rem)] 2xl:h-[calc(100vh-5rem)]">
          <p className="bg-cyan-20 mb-14 md:mb-16 2xl:mb-20">
            PRODUCT DESCRIPTION
          </p>
        </div>

        <div className="bg-yellow-30 space-y-16 pb-16 pt-2">
          {IMAGES.map((img, index) => (
            <div
              // Later: use url (img) itself as key in all places
              key={index}
              onClick={() => setZoomViewIndex(index)}
              className="bg-green-30 hover:cursor-zoom-in"
            >
              <img src={img} alt="Product Image" className="mx-auto w-[70%]" />
            </div>
          ))}
        </div>

        <div className="bg-blue-20 sticky bottom-0 flex items-center justify-center md:h-[calc(100vh-4rem)] 2xl:h-[calc(100vh-5rem)]">
          <p className="bg-cyan-20 mb-14 md:mb-16 2xl:mb-20">
            PRODUCT SELECTION
          </p>
        </div>
      </div>

      {zoomViewIndex >= 0 ? (
        <ProductFullView
          zoomViewIndex={zoomViewIndex}
          setZoomViewIndex={setZoomViewIndex}
          images={IMAGES}
        />
      ) : null}
    </>
  );
}

export default Product;
