import Pagination from '../../ui/Pagination';
import ProductDisplay from '../products/ProductDisplay';
import ProductDisplayList from '../products/ProductDisplayList';
import { useUserWishlist } from './useUserWishlist';
// import WishlistAction from './WishlistAction.jsx';

function WishlistFeed({ wishlistItems }) {
  const { isLoading, data, error } = useUserWishlist();
  console.log({ isLoading, data, error });

  return (
    <>
      {data && (
        <>
          <h3 className="uppercase">3 Items</h3>

          <ProductDisplayList>
            {data.map(item => (
              <ProductDisplay key={item.id} product={item}>
                {/* <WishlistAction product={item} classes="mt-2" /> */}
              </ProductDisplay>
            ))}
          </ProductDisplayList>

          <Pagination pageCount={4} />
        </>
      )}

      {isLoading && <p>LOADING...</p>}

      {error && <p>{error.message}</p>}
    </>
  );
}

export default WishlistFeed;
