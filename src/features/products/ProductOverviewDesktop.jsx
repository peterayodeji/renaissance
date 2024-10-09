import ProductInfo from './ProductInfo';
import ProductViewDesktop from './ProductViewDesktop';
import ProductActions from './ProductActions';

function ProductOverviewDesktop({ product, setZoomViewIndex }) {
  return (
    <div className="bg-whit bg-red-30 grid lg:grid-cols-[1fr_40%_1fr] lg:items-end">
      <ProductInfo product={product} />
      <ProductViewDesktop
        images={product.images}
        setZoomViewIndex={setZoomViewIndex}
      />

      <ProductActions product={product} />
    </div>
  );
}

export default ProductOverviewDesktop;
