import ProductsFilter from './ProductsFilter';
import ProductsSort from './ProductsSort';

function ProductsOperations({ filters }) {
  return (
    <div className="space-y-1 text-sm md:text-base">
      <ProductsFilter filters={filters} />
      <ProductsSort />
    </div>
  );
}

export default ProductsOperations;
