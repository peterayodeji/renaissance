import ProductActions from './ProductActions';
import ProductInfo from './ProductInfo';

function ProductInfoActions({ product }) {
  return (
    <div className="flex flex-col bg-white px-2 py-8 sm:px-4 md:pl-0 md:pr-8">
      <ProductActions product={product} />
      <ProductInfo product={product} />
    </div>
  );
}

export default ProductInfoActions;
