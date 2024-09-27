import ProductsFilter from './ProductsFilter';
import ProductsSort from './ProductsSort';

function ProductsOperations() {
  // console.log(filters);

  return (
    <div className="space-y-1 text-sm md:text-base">
      <ProductsFilter />
      <ProductsSort />
    </div>
  );
}

export default ProductsOperations;
