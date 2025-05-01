import { Link, Navigate } from 'react-router-dom';
import { useScreenLessThan } from '../../hooks/useScreenLessThan';

function AccountOptions() {
  const isMobile = useScreenLessThan(1024);

  if (!isMobile) return <Navigate to="/account" />;

  return (
    <div className="bg-gray-20 px-4 text-sm">
      <main className="bg-green-30 mx-auto w-full max-w-sm pb-14 pt-12 xl:max-w-md">
        <h2 className="mb-10 text-center text-3xl font-semibold">Account</h2>

        <p className="mb-8 text-center">
          Here is what you can do with your Renaissance account
        </p>

        <div className="bg-green-10 space-y-12">
          <Link
            to="/account/orders"
            className="block divide-y border px-8 py-8 text-center shadow-sm"
          >
            <h5 className="pb-4 text-base font-semibold sm:text-xl">
              Order History
            </h5>
            <p className="pt-4">Track the progress of your order</p>
          </Link>

          <Link
            to="/account/details"
            className="block divide-y border px-8 py-8 text-center shadow-sm"
          >
            <h5 className="pb-4 text-base font-semibold sm:text-xl">
              Account Details
            </h5>
            <p className="pt-4">View or change your sign-in information</p>
          </Link>

          <Link
            to="/account/preferences"
            className="block divide-y border px-8 py-8 text-center shadow-sm"
          >
            <h5 className="pb-4 text-base font-semibold sm:text-xl">
              Email Preferences
            </h5>
            <p className="pt-4">View and manage your email preferences</p>
          </Link>

          <Link
            to="/account/addresses"
            className="block divide-y border px-8 py-8 text-center shadow-sm"
          >
            <h5 className="pb-4 text-base font-semibold sm:text-xl">
              Addresses
            </h5>
            <p className="pt-4">Manage your billing or delivery address</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default AccountOptions;
