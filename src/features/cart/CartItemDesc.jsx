import WishlistAction from '../wishlist/WishlistAction.jsx';

function CartItemDesc({ product }) {
  return (
    <div className="bg-purple-30 flex h-full flex-col xl:h-[120px]">
      <h4 className="sm:text-bas pr-8 text-sm font-semibold uppercase sm:pr-0">
        Multicolor Stuart Sweater
      </h4>

      <p className="sm:text-bas pr-4 text-sm lg:text-sm">
        Knit nylon - and alpaca-blend sweater
      </p>

      <p className="sm:text-bas mb-4 text-sm lg:mb-0 lg:text-sm">
        Only 1 remaining
      </p>

      <div className="mt-auto hidden lg:block">
        <WishlistAction product={product} removeCta="Take off wishlist" />
      </div>
    </div>
  );
}

export default CartItemDesc;
