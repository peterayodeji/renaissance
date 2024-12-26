import HeadingPrimary from '../../ui/HeadingPrimary';
import WishlistView from './WishlistView';

function Wishlist() {
  return (
    <div className="bg-orange-20 grow px-2 py-10 sm:px-4 md:px-8">
      <HeadingPrimary>WISHLIST</HeadingPrimary>
      <WishlistView />
    </div>
  );
}

export default Wishlist;
