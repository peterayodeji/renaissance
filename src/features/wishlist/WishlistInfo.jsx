function WishlistInfo({ isEmptyWishlist }) {
  return (
    <div
      className={`bg-yellow-30 ${isEmptyWishlist ? '' : 'bg-gray-40 mt-8 py-8 sm:py-12'}`}
    >
      {isEmptyWishlist && <WishlistEmpty />}
      {!isEmptyWishlist && <WishlistSyncAccount />}
    </div>
  );
}

export default WishlistInfo;

function WishlistSyncAccount() {
  return (
    <>
      <h3 className="mb-2 font-semibold uppercase">
        Sync Account to Access Wishlist Across Devices
      </h3>
      <p className="mb-16">
        To access your wishlist across devices and future visits, please sign in
        to your account.
      </p>

      <button className="w-auto border border-black px-10 py-3 sm:w-full sm:max-w-sm">
        SYNC YOUR ACCOUNT
      </button>
    </>
  );
}

function WishlistEmpty() {
  return (
    <>
      <h3 className="mb-2 font-semibold uppercase">Save Your Favorite Items</h3>
      <p className="mb-16">
        Your wishlist is currently empty. Add your favorites to wishlist for
        effortless access.
      </p>

      <button className="w-auto border border-black px-10 py-3 sm:w-full sm:max-w-sm">
        EXPLORE MORE
      </button>
    </>
  );
}
