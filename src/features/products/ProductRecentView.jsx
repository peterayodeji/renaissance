import { useSelector } from 'react-redux';
import { getrecentViewProducts } from './productsSlice';

import ProductDisplay from './ProductDisplay';

function ProductRecentView() {
  const recentViewProducts = useSelector(getrecentViewProducts);

  return (
    <div className="bg-cyan-40 overflow-hidden pb-12 pt-8 text-sm lg:pb-16 lg:pt-0">
      <h3 className="mb-4 px-2 sm:px-4 md:px-8 xl:px-10 2xl:px-12">
        RECENTLY VIEWED
      </h3>

      <ul className="remove-scrollbar bg-yellow-40 z-40 flex items-center gap-x-3 overflow-x-scroll px-2 sm:px-4 md:gap-x-6 md:px-8 xl:px-10 2xl:px-12 [&>*]:shrink-0">
        {recentViewProducts.map(product => (
          <ProductDisplay
            key={product.id}
            product={product}
            imgClasses="w-48"
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductRecentView;
