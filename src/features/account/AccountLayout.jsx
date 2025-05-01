import { Link, Outlet } from 'react-router-dom';
import Logout from '../auth/Logout';

function AccountLayout() {
  return (
    <div className="bg-stone-30 flex grow flex-col px-6 text-sm sm:px-8 md:px-12 lg:flex-row lg:items-end lg:px-8 xl:px-10 2xl:px-12">
      {/* Sidebar */}
      <aside className="bg-pink-80 hidden flex-1 lg:sticky lg:bottom-0 lg:block lg:h-[calc(100vh-4rem)] 2xl:h-[calc(100vh-5rem)]">
        <nav className="mt-14">
          <h3 className="mb-6 font-semibold">Account</h3>

          <ul className="space-y-4">
            <li>
              <Link to="/account/orders">Order History</Link>
            </li>
            <li>
              <Link to="/account/details">Account Details</Link>
            </li>
            <li>
              <Link to="/account/preferences">Email Preferences</Link>
            </li>
            <li>
              <Link to="/account/addresses">Addresses</Link>
            </li>
            <li>
              <Logout type="secondary" />
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <Link
        to="/account/options"
        className="bg-blue-30 mt-6 flex items-center justify-center self-start py-2 sm:px-1 lg:hidden"
      >
        <img src="/chevron-left.svg" alt="chevron-left" className="w-5" />
        <span>Account</span>
      </Link>

      <main className="bg-green-20 w-full max-w-sm self-center pb-14 pt-6 lg:min-h-[calc(100vh-4rem)] lg:pt-12 xl:max-w-md 2xl:min-h-[calc(100vh-5rem)]">
        <Outlet />
      </main>

      {/* Filler */}
      <aside className="bg-teal-30 hidden flex-1 lg:sticky lg:bottom-0 lg:block lg:h-[calc(100vh-4rem)] 2xl:h-[calc(100vh-5rem)]">
        &nbsp;
      </aside>
    </div>
  );
}

export default AccountLayout;
