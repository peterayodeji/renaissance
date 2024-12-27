import ProductDisplayList from './ProductDisplayList';
import ProductDisplay from './ProductDisplay';
import Pagination from '../../ui/Pagination';
import ProductsMap from './ProductsMap';

function ProductsFeed({ products, pageCount }) {
  return (
    <>
      <ProductDisplayList>
        {products.map(product => (
          <ProductDisplay key={product.id} product={product} />
        ))}
      </ProductDisplayList>

      <Pagination pageCount={pageCount} />

      <ProductsMap />
    </>
  );
}

export default ProductsFeed;
