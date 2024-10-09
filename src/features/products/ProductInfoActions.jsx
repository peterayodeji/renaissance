import ProductActions from './ProductActions';
import ProductInfo from './ProductInfo';

function ProductInfoActions({ product }) {
  return (
    <div className="bg-amber-10 flex flex-col bg-white px-2 py-8 sm:pl-0 sm:pr-4 md:pr-8">
      <ProductActions product={product} />
      <ProductInfo product={product} />
    </div>
  );
}

export default ProductInfoActions;
