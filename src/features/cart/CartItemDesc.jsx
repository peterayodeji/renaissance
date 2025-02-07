import WishlistAction from '../wishlist/WishlistAction.jsx';

function CartItemDesc({ product, biteSize }) {
  return (
    <div className={`flex h-full flex-col ${!biteSize ? 'xl:h-[120px]' : ''}`}>
      <h4 className="sm:text-bas pr-8 text-sm font-semibold uppercase sm:pr-0">
        {product.name}
      </h4>

      <p className="pr-4 text-sm">Knit nylon - and alpaca-blend sweater</p>

      {product.maxQuantity && !biteSize ? (
        <p className="sm:text-bas mb-4 mt-2 text-sm lg:mb-0 lg:text-sm">
          Only {product.maxQuantity} remaining!*
        </p>
      ) : (
        ''
      )}

      {!biteSize && (
        <div className="mt-auto hidden lg:block">
          <WishlistAction product={product} mode="secondary" />
        </div>
      )}
    </div>
  );
}

export default CartItemDesc;
