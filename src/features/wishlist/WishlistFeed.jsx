import ProductDisplayList from '../products/ProductDisplayList';
import ProductDisplay from '../products/ProductDisplay';
import WishlistAction from './WishlistAction.jsx';
import Pagination from '../../ui/Pagination';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProductsParams } from '../products/useProductsParams.js';

function WishlistFeed({ wishlist, count, pageCount }) {
  const { page } = useProductsParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    function () {
      const newParams = new URLSearchParams(searchParams);

      if (page > pageCount && pageCount >= 2) {
        newParams.set('page', pageCount);
        setSearchParams(newParams);
      }

      if (page > pageCount && pageCount < 2) {
        newParams.delete('page');
        setSearchParams(newParams);
      }
    },
    [page, pageCount, searchParams, setSearchParams],
  );

  if (!count) return;

  return (
    <>
      <h3 className="uppercase">
        {count} {count > 1 ? 'Items' : 'Item'}
      </h3>

      <ProductDisplayList>
        {wishlist.map(item => (
          <div key={item.id}>
            <ProductDisplay product={item} />
            <WishlistAction product={item} classes="mt-4" />
          </div>
        ))}
      </ProductDisplayList>

      <Pagination pageCount={pageCount} />
    </>
  );
}

export default WishlistFeed;
