import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  getWishlist,
  isWishlistItem,
  removeItem,
} from './wishlistSlice';

function WishlistAction({
  product,
  inline = true,
  removeCta = 'Remove',
  classes,
}) {
  const isProductInWishlist = useSelector(isWishlistItem(product.id));
  console.log({ isProductInWishlist });

  const wish = useSelector(getWishlist);
  console.log({ wish });
  const dispatch = useDispatch();

  const handleClick = function () {
    isProductInWishlist
      ? dispatch(removeItem(product.id))
      : dispatch(addItem(product));
  };

  if (inline)
    return (
      <button
        onClick={handleClick}
        className={`bg-gree-300 flex items-center gap-x-2 text-sm ${classes}`}
      >
        <span className="underline decoration-[0.99px]">
          {isProductInWishlist ? removeCta : 'Add to wishlist'}
        </span>

        {/* <img src="/heart.svg" alt="Favourite" className="w-5" /> */}
      </button>
    );

  if (!inline)
    return (
      <>
        <button
          type="button"
          onClick={handleClick}
          className="px-4 py-2 uppercase md:flex-1 md:px-0"
        >
          <span className="hidden md:inline-block">
            {isProductInWishlist ? removeCta : 'Add to wishlist'}
          </span>
          <img src="/heart.svg" alt="Favourite" className="md:hidden" />
        </button>
      </>
    );
}

export default WishlistAction;
