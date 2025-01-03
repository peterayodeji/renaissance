import { useDispatch, useSelector } from 'react-redux';
import { addItem, isWishlistItem, removeItem } from './wishlistSlice';
import { useUser } from '../auth/useUser';
import { useProductInWishlist } from './useProductInWishlist';
import { useRemoveFromWishlist } from './useRemoveFromWishlist';
import { useAddToWishlist } from './useAddToWishlist';

function WishlistAction({ product, mode, classes }) {
  const { user, isAuthenticated } = useUser();
  const userId = user?.id;
  const { id: productId, name, price } = product;

  const dispatch = useDispatch();
  const isInAnonWishlist = useSelector(isWishlistItem(productId));

  const { isLoading, isInUserWishlist } = useProductInWishlist({
    userId,
    productId,
  });
  const { isRemoving, removeProduct } = useRemoveFromWishlist();
  const { isAdding, addProduct } = useAddToWishlist();

  // * Check if product is in wishlist
  const isInWishlist = isAuthenticated ? isInUserWishlist : isInAnonWishlist;

  const isBusy = isLoading || isRemoving || isAdding;

  const toggleWishlist = function () {
    // * Toggle product in and out of wishlist
    if (isAuthenticated) {
      isInWishlist
        ? removeProduct({ userId, productId })
        : addProduct({ userId, productId });
    } else {
      isInWishlist
        ? dispatch(removeItem(productId))
        : dispatch(addItem({ id: productId, name, price }));
    }
  };

  function takeOffWishlist() {
    isAuthenticated
      ? removeProduct({ userId, productId })
      : dispatch(removeItem(productId));
  }

  if (mode === 'primary')
    return (
      <WishlistBtn
        actionHandler={toggleWishlist}
        isBusy={isBusy}
        isInWishlist={isInWishlist}
      />
    );

  if (mode === 'secondary')
    return (
      <WishlistBtnInline
        actionHandler={toggleWishlist}
        isBusy={isBusy}
        classes={classes}
      >
        <span className="underline decoration-[0.99px]">
          {isInWishlist ? 'Take off wishlist' : 'Add to wishlist'}
        </span>
      </WishlistBtnInline>
    );

  return (
    <WishlistBtnInline
      actionHandler={takeOffWishlist}
      isBusy={isRemoving}
      classes={classes}
    >
      <span className="underline decoration-[0.99px]">Take off wishlist</span>
    </WishlistBtnInline>
  );
}

export default WishlistAction;

function WishlistBtn({ actionHandler, isBusy, isInWishlist }) {
  return (
    <button
      type="button"
      onClick={actionHandler}
      className="px-4 py-2 uppercase md:flex-1 md:px-0"
    >
      {!isBusy && (
        <>
          <span className="hidden md:inline-block">
            {isInWishlist ? 'Take off wishlist' : 'Add to wishlist'}
          </span>

          <span className="md:hidden">
            {isInWishlist ? (
              <img src="/full-heart.svg" alt="heart" className="w-7" />
            ) : (
              <img src="/heart.svg" alt="heart" className="w-7" />
            )}
          </span>
        </>
      )}

      {isBusy && <p>LOADING...</p>}
    </button>
  );
}

function WishlistBtnInline({ actionHandler, isBusy, classes, children }) {
  return (
    <button
      onClick={actionHandler}
      className={`relative gap-x-2 text-sm ${classes} ${isBusy ? 'opacity-65' : ''}`}
    >
      {children}

      {isBusy && (
        <img
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform shadow"
          src="/heart.svg"
        ></img>
      )}
    </button>
  );
}
