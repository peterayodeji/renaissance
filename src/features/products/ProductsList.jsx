import { useProducts } from './useProducts';

import ProductsFeed from './ProductsFeed';
import StatusFeedbackWrapper from '../../ui/StatusFeedbackWrapper';

function ProductsList({ isLoadingFilterData, errorFilterData }) {
  const {
    isLoading: isLoadingProducts,
    products,
    pageCount,
    error: errorProducts,
  } = useProducts();

  // console.log(products);

  const showStatus = Boolean(
    isLoadingFilterData ||
      isLoadingProducts ||
      errorFilterData ||
      errorProducts,
  );

  return (
    <>
      {showStatus && (
        <StatusFeedback
          isLoadingFilterData={isLoadingFilterData}
          isLoading={isLoadingProducts}
          errorFilterData={errorFilterData}
          error={errorProducts}
        />
      )}

      {!showStatus && Array.isArray(products) && products.length && (
        <ProductsFeed products={products} pageCount={pageCount} />
      )}
    </>
  );
}

export default ProductsList;

function StatusFeedback({
  isLoadingFilterData,
  isLoading,
  errorFilterData,
  error,
}) {
  if (isLoadingFilterData || isLoading) {
    return (
      <StatusFeedbackWrapper>
        <p>LOADING...</p>
      </StatusFeedbackWrapper>
    );
  }

  if (errorFilterData || error) {
    return (
      <StatusFeedbackWrapper>
        <p>Products could not be loaded.</p>
      </StatusFeedbackWrapper>
    );
  }
}
