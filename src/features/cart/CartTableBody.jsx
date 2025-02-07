import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { getCart } from './cartSlice';

function CartTableBody({ biteSize }) {
  const cartItems = useSelector(getCart);

  return (
    <div className={` ${!biteSize ? 'divide-y border-y' : ''}`}>
      {cartItems.map(item => (
        <CartItem
          key={item.cartItemId}
          product={item}
          cartItemId={item.cartItemId}
          biteSize={biteSize}
        />
      ))}
    </div>
  );
}

export default CartTableBody;
