import { useProducts } from './useProducts';
import ProductsFeed from './ProductsFeed';

function ProductsList({ isLoadingFilterData, errorFilterData }) {
  const {
    isLoading: isLoadingProducts,
    products,
    pageCount,
    error: errorProducts,
  } = useProducts();

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

      {!showStatus && (
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

function StatusFeedbackWrapper({ children }) {
  return (
    <div className="absolute left-[50%] top-[45%] block translate-x-[-50%] translate-y-[-50%] transform bg-red-700 text-center">
      {children}
    </div>
  );
}
