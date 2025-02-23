import CartSummary from './CartSummary';
import CartActions from './CartActions';
import CartNote from './CartNote';

function CartInfoActions() {
  return (
    <div className="bg-blue-40 w-full md:ml-auto md:w-[320px] lg:w-auto lg:max-w-sm">
      <CartSummary />
      <CartActions />
      <CartNote />
    </div>
  );
}

export default CartInfoActions;
