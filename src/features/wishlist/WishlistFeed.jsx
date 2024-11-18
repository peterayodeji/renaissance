import Pagination from '../../ui/Pagination';
import ProductDisplay from '../products/ProductDisplay';
import ProductDisplayList from '../products/ProductDisplayList';

function WishlistFeed({ wishlistItems }) {
  return (
    <>
      <h3 className="uppercase">3 Items</h3>

      <ProductDisplayList>
        {wishlistItems.map(item => (
          <ProductDisplay key={item.id} product={item}>
            <p className="bg-blue-30 mt-2 underline decoration-[0.99px] underline-offset-1">
              Remove
            </p>
          </ProductDisplay>
        ))}
      </ProductDisplayList>

      <Pagination pageCount={4} />
    </>
  );
}

export default WishlistFeed;
