import { useProducts } from './useProducts';

import ProductsFeed from './ProductsFeed';
import Loader from '../../ui/Loader';
import StatusFeedbackWrapper from '../../ui/StatusFeedbackWrapper';

function ProductsList({ isFetchingFilterData, errorFilterData }) {
  const {
    isFetching: isFetchingProducts,
    products,
    pageCount,
    error: errorProducts,
  } = useProducts();

  const busy = Boolean(isFetchingFilterData || isFetchingProducts);
  const error = Boolean(errorFilterData || errorProducts);

  return (
    <>
      {!error && Array.isArray(products) && products.length && (
        <ProductsFeed products={products} pageCount={pageCount} />
      )}
      {busy && <Loader />}
      {error && (
        <StatusFeedbackWrapper>
          <p>ERROR - Products could not be loaded.</p>
        </StatusFeedbackWrapper>
      )}
    </>
  );
}

export default ProductsList;
