import { useNavigate } from 'react-router-dom';
import { useUser } from '../auth/useUser';
import { useSelector } from 'react-redux';
import { isEmptyCart } from './cartSlice';

function CartActions() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  const isEmpty = useSelector(isEmptyCart);

  return (
    <div className="bg-green-40 my-8 space-y-4">
      {isAuthenticated ? (
        <button
          disabled={isEmpty}
          onClick={() => navigate('/checkout', { state: { accessible: true } })}
          className="block w-full bg-black py-2 uppercase text-white disabled:cursor-not-allowed disabled:opacity-70"
        >
          Continue to Checkout
        </button>
      ) : (
        <>
          <button
            disabled={isEmpty}
            onClick={() =>
              navigate('/checkout-r', { state: { accessible: true } })
            }
            className="block w-full bg-black py-2 uppercase text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            Continue to Checkout
          </button>
        </>
      )}

      {!isAuthenticated && !isEmpty && (
        <button
          onClick={() =>
            navigate('/account/sign-in', {
              state: { accessible: true },
            })
          }
          className="block w-full border border-black py-2 uppercase"
        >
          Sign In
        </button>
      )}

      {isEmpty && (
        <button
          onClick={() => navigate('/products')}
          className="block w-full border border-black py-2 uppercase"
        >
          Shop Now
        </button>
      )}
    </div>
  );
}

export default CartActions;
