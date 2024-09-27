import ProductsHeader from '../features/products/ProductsHeader';
import ProductsTitle from '../features/products/ProductsTitle';
import ProductsOperations from '../features/products/ProductsOperations';
import ProductsList from '../features/products/ProductsList';

import { useProductsFilters } from '../features/products/useProductsFilters.js';

function Products() {
  const { filters, isLoading, error } = useProductsFilters();
  // console.log(isLoading, error, filters);

  return (
    <div className="bg-red-20 relative grow px-2 py-10 sm:px-4 md:px-8">
      {/* {isLoading || error ? null : ( */}
      <ProductsHeader>
        <ProductsTitle />
        <ProductsOperations filters={filters} />
      </ProductsHeader>
      {/* )} */}

      <ProductsList isLoadingFilterData={isLoading} errorFilterData={error} />
    </div>
  );
}

export default Products;
