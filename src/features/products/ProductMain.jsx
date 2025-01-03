import { useState } from 'react';
import { useScreenLessThan } from '../../hooks/useScreenLessThan';

import ProductOverviewDesktop from './ProductOverviewDesktop';
import ProductFullView from './ProductFullView';
import ProductOverviewMobile from './ProductOverviewMobile';

const placeHolder = {
  images: [
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
  ],
};

function ProductMain({ product }) {
  const [zoomViewIndex, setZoomViewIndex] = useState(-1);
  const isMobile = useScreenLessThan(1024);

  return (
    <>
      {!isMobile && (
        <ProductOverviewDesktop
          product={product}
          setZoomViewIndex={setZoomViewIndex}
        />
      )}

      {isMobile && (
        <ProductOverviewMobile
          product={product}
          setZoomViewIndex={setZoomViewIndex}
        />
      )}

      {zoomViewIndex >= 0 ? (
        <ProductFullView
          zoomViewIndex={zoomViewIndex}
          setZoomViewIndex={setZoomViewIndex}
          images={placeHolder.images}
        />
      ) : null}
    </>
  );
}

export default ProductMain;
