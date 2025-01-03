import { useProduct } from '../features/products/useProduct';

import ProductMain from '../features/products/ProductMain';
import ProductSuggestion from '../features/products/ProductSuggestion';
import ProductRecentView from '../features/products/ProductRecentView';
import StatusFeedbackWrapper from '../ui/StatusFeedbackWrapper';
import Loader from '../ui/Loader';

function Product() {
  const { isFetching, product, similarProducts, error } = useProduct();

  return (
    <>
      <ProductView>
        {!error && product && <ProductMain product={product} />}
        {!error && similarProducts && (
          <ProductSuggestion similarProducts={similarProducts} />
        )}
      </ProductView>

      <ProductRecentView />

      {isFetching && <Loader />}

      {error && (
        <StatusFeedbackWrapper>
          <p>ERROR - {error.message}.</p>
        </StatusFeedbackWrapper>
      )}
    </>
  );
}

export default Product;

function ProductView({ children }) {
  return (
    <div className="bg-whit bg-purple-40 min-h-[calc(100vh-3.5rem)] lg:min-h-[calc(100vh-4rem)] 2xl:min-h-[calc(100vh-5rem)]">
      {children}
    </div>
  );
}
