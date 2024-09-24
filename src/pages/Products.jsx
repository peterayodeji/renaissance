import ProductsHeader from '../features/products/ProductsHeader';
import ProductsTitle from '../features/products/ProductsTitle';
import ProductsOperations from '../features/products/ProductsOperations';
import ProductsList from '../features/products/ProductsList';

import { useProductsFilters } from '../features/products/useProductsFilters.js';

function Products() {
  const { filters, isLoading, error } = useProductsFilters();
  // console.log(isLoading, error, filters);

  return (
    <div className="bg-gray-20 grow px-8 py-8 text-3xl">
      {isLoading || error ? null : (
        <ProductsHeader>
          <ProductsTitle />
          <ProductsOperations filters={filters} />
        </ProductsHeader>
      )}

      {/* Pass loading and error for filter into productslist */}
      <ProductsList isLoadingFilterData={isLoading} errorFilterData={error} />
    </div>
  );
}

export default Products;
