import Pagination from '../../ui/Pagination';
import ProductsMap from './ProductsMap';

function ProductsFeed({ products, pageCount }) {
  return (
    <>
      <ul className="bg-blue-80 grid grid-cols-2 gap-x-4 gap-y-12 py-8 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <li key={product.id} className="text-base">
            <img
              src="/vivienne-westwood-multicolor-stuart-sweater.webp"
              alt="Product Image"
            />
            <div>
              <p>{product.name}</p>
              <div>${product.price}</div>
            </div>
          </li>
        ))}
      </ul>

      <Pagination pageCount={pageCount} />

      <ProductsMap />
    </>
  );
}

export default ProductsFeed;
