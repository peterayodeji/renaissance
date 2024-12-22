import { Navigate, useNavigate } from 'react-router-dom';

import CustomList from '../../ui/CustomList';
import ListItem from '../../ui/CustomListItem';
import { usePageAccess } from '../../hooks/usePageAccess';
import { useUser } from '../auth/useUser';

function CheckoutR() {
  const navigate = useNavigate();
  const { accessible } = usePageAccess();
  const { isAuthenticated } = useUser();

  if (isAuthenticated || !accessible) return <Navigate to="/cart" />;

  return (
    <div className="bg-stone-0 grow pb-14 pt-12">
      <form className="bg-blue-30 mx-auto max-w-sm text-sm xl:max-w-md">
        <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
          Checkout
        </h2>

        <h4 className="mb-4 text-center text-lg font-semibold">
          New Customer Checkout
        </h4>

        <p className="mb-8 text-center">
          Become a member today &mdash; It&#39;s fast and free!
        </p>

        <div className="bg-purple-30 justify-cente mb-8 flex">
          <CustomList>
            <ListItem>10% off first purchase for new member</ListItem>
            <ListItem>Flexible payment options with secured endpoints</ListItem>
            <ListItem>Free online returns </ListItem>
          </CustomList>
        </div>

        <button
          type="button"
          onClick={() =>
            navigate('/account/register', {
              replace: true,
              state: { accessible: true },
            })
          }
          className="mb-12 w-full bg-black py-4 font-medium tracking-wider text-white"
        >
          <span className="undeline">Continue to Checkout</span>
        </button>

        <hr className="mb-8 border-stone-300" />

        <h4 className="mb-4 text-center text-lg font-semibold">
          Guest Checkout
        </h4>

        <p className="mb-8 text-center">
          Checkout as a guest and pay with credit card, PayPal, or gift card
          &mdash; For quick buy!
        </p>

        <button
          type="button"
          onClick={() =>
            navigate('/checkout', {
              replace: true,
              state: { accessible: true },
            })
          }
          className="w-full border border-black py-4 tracking-wider"
        >
          <span>Checkout as Guest</span>
        </button>
      </form>
    </div>
  );
}

export default CheckoutR;
