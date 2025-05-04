import { useShippingAddress } from '../checkout/useShippingAddress';

import AccountAddressesForm from './AccountAddressesForm';
import Loader from '../../ui/Loader';

function AccountAddresses() {
  const { isLoading, data, error } = useShippingAddress();

  return (
    <>
      <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
        Addresses
      </h2>

      {isLoading && <Loader />}
      {!error && !isLoading && <AccountAddressesForm data={data} />}
      {error && <p>Sorry. An issue occurred while loading saved address</p>}
    </>
  );
}

export default AccountAddresses;
