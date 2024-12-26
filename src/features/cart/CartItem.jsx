import CartItemImage from './CartItemImage';
import CartItemDesc from './CartItemDesc';
import WishlistAction from '../wishlist/WishlistAction.jsx';

function CartItem({ product }) {
  return (
    <div className="relative grid grid-cols-[130px_1fr] items-center gap-y-2 pb-6 pt-16 lg:grid-cols-[130px_2fr_0.5fr_1fr_1fr_1fr_1fr_0.3fr] lg:gap-x-8 lg:py-4 xl:py-2">
      <CartItemImage />
      <CartItemDesc product={product} />

      <CartItemColumn>
        <span>Size:</span>
        <span>L</span>
      </CartItemColumn>

      <CartItemColumn>
        <span>Color:</span>
        <span>Multi-color</span>
      </CartItemColumn>

      <CartItemColumn classes="col-start-2 row-start-5 lg:col-start-auto lg:row-start-auto">
        <span>Price:</span>
        <span>USD 388</span>
      </CartItemColumn>

      <CartItemColumn>
        <span>Quantity:</span>
        <span>- 1 +</span>
      </CartItemColumn>

      <WishlistAction
        product={product}
        mode="secondary"
        classes="mt-8 lg:hidden"
      />

      <div className="sm:text-bas mt-8 text-right text-sm lg:mt-0 lg:h-full lg:text-left xl:h-[120px]">
        USD 388
      </div>

      <div className="absolute right-0 top-3 h-full text-sm lg:static lg:text-base xl:h-[120px]">
        X
      </div>
    </div>
  );
}

export default CartItem;

function CartItemColumn({ children, classes }) {
  return (
    <div
      className={`sm:text-bas flex h-full gap-x-3 text-sm xl:h-[120px] lg:[&>*:first-child]:hidden ${classes}`}
    >
      {children}
    </div>
  );
}
