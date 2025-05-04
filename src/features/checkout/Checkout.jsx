import { useUser } from '../auth/useUser';
import { Navigate } from 'react-router-dom';
import { usePageAccess } from '../../hooks/usePageAccess';
import { useShippingAddress } from './useShippingAddress';

import HeadingPrimary from '../../ui/HeadingPrimary';
import Loader from '../../ui/Loader';
import CheckoutForm from './CheckoutForm';

function Checkout() {
  const { isLoading: isLoadingUser } = useUser();
  const { accessible } = usePageAccess();
  const { isLoading: isLoadingShippingAddress, data: fetchedShippingData } =
    useShippingAddress();

  if (!accessible) return <Navigate to="/cart" />;
  if (isLoadingUser) return <Loader />;

  return (
    <div className="bg-slate-20 grow px-2 pb-14 pt-10 sm:px-4 md:px-8">
      <HeadingPrimary>CHECKOUT</HeadingPrimary>
      {!isLoadingShippingAddress ? (
        <CheckoutForm fetchedShippingData={fetchedShippingData} />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Checkout;
