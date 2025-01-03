import ProductInfo from './ProductInfo';
import ProductViewDesktop from './ProductViewDesktop';
import ProductActions from './ProductActions';

const placeHolder = {
  images: [
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
  ],
};

function ProductOverviewDesktop({ product, setZoomViewIndex }) {
  return (
    <div className="bg-whit bg-red-30 grid lg:grid-cols-[1fr_40%_1fr] lg:items-end">
      <ProductInfo product={product} />
      <ProductViewDesktop
        images={placeHolder.images}
        setZoomViewIndex={setZoomViewIndex}
      />

      <ProductActions product={product} />
    </div>
  );
}

export default ProductOverviewDesktop;
