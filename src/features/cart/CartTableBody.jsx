import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getCart } from './cartSlice';

function CartTableBody() {
  const cartItems = useSelector(getCart);

  return (
    <div className="divide-y border-y">
      {cartItems.map(item => (
        <CartItem
          key={item.cartItemId}
          product={item}
          cartItemId={item.cartItemId}
        />
      ))}
    </div>
  );
}

export default CartTableBody;
