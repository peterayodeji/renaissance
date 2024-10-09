import ProductViewMobile from './ProductViewMobile';
import ProductInfoActions from './ProductInfoActions';

function ProductOverviewMobile({ product, setZoomViewIndex }) {
  return (
    <div className="bg-yellow-30 grid pt-4 sm:grid-cols-[1fr_1fr] sm:pb-16">
      <ProductViewMobile
        images={product.images}
        setZoomViewIndex={setZoomViewIndex}
      />
      <ProductInfoActions product={product} />
    </div>
  );
}

export default ProductOverviewMobile;
