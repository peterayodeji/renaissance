import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  getWishlist,
  isWishlistItem,
  removeItem,
} from './wishlistSlice';
import { useProductInWishlist } from './useProductInWishlist';
import { useRemoveFromWishlist } from './useRemoveFromWishlist';
import { useAddToWishlist } from './useAddToWishlist';

function WishlistAction({
  product,
  inline = true,
  removeCta = 'Remove',
  classes,
}) {
  const userId = '3ee5df82-9163-4e6a-923b-e8ee99b23933';

  // # WISHLIST MUTATION FN
  const {
    isPending,
    removeProduct,
    error: errorRemove,
  } = useRemoveFromWishlist();
  // console.log({ isPending, removeProduct, errorRemove });

  const { isAdding, addProduct, error: errorAdd } = useAddToWishlist();
  // console.log({ isAdding, addProduct, errorAdd });

  // # CHECK IF PRODUCT IS IN WISHLIST
  // const isProductInWishlist = useSelector(isWishlistItem(product.id));
  // console.log({ isProductInWishlist });

  const { isLoading, data: isCheck, error } = useProductInWishlist();
  // console.log({ isLoading, isCheck, error });

  // * Show wishlist saved in redux store
  // const wish = useSelector(getWishlist);
  // console.log({ wish });
  // const dispatch = useDispatch();

  const handleClick = function () {
    // # TOGGLE PRODUCT 'IN' AND 'OUT' OF WISHLIST
    // isProductInWishlist
    //   ? dispatch(removeItem(product.id))
    //   : dispatch(addItem(product));

    removeProduct({ userId, productId: 3 });

    // addProduct({ userId, productId: 3 });
  };

  if (inline)
    return (
      <button
        onClick={handleClick}
        className={`bg-gree-300 flex items-center gap-x-2 text-sm ${classes}`}
      >
        {!isLoading && (
          <span className="underline decoration-[0.99px]">
            {isCheck ? removeCta : 'Add to wishlist'}
          </span>
        )}

        {isLoading && <p>LOADING...</p>}
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
          {!isLoading && (
            <span className="hidden md:inline-block">
              {isCheck ? removeCta : 'Add to wishlist'}
            </span>
          )}

          {isLoading && <p>LOADING...</p>}
        </button>
      </>
    );
}

export default WishlistAction;
