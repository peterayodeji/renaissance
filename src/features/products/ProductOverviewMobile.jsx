import ProductViewMobile from './ProductViewMobile';
import ProductInfoActions from './ProductInfoActions';

const placeHolder = {
  images: [
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
  ],
};

function ProductOverviewMobile({ product, setZoomViewIndex }) {
  return (
    <div className="bg-yellow-30 grid pt-4 md:grid-cols-[1fr_1fr] md:pb-16">
      <ProductViewMobile
        images={placeHolder.images}
        setZoomViewIndex={setZoomViewIndex}
      />
      <ProductInfoActions product={product} />
    </div>
  );
}

export default ProductOverviewMobile;
