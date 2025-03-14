import { Link, Outlet } from 'react-router-dom';

function AccountLayout() {
  return (
    <div className="bg-stone-10 flex grow px-8 text-sm lg:items-end xl:px-10 2xl:px-12">
      {/* Sidebar */}
      <aside className="hiddenn bg-pink-80 flex-1 lg:sticky lg:bottom-0 lg:h-[calc(100vh-4rem)] 2xl:h-[calc(100vh-5rem)]">
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
              <Link to="/account/logout">Logout</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="bg-blue-60 w-full max-w-sm pb-14 pt-12 lg:min-h-[calc(100vh-4rem)] xl:max-w-md 2xl:min-h-[calc(100vh-5rem)]">
        <Outlet />
      </main>

      {/* Filler */}
      <aside className="bg-teal-30 flex-1 lg:sticky lg:bottom-0 lg:h-[calc(100vh-4rem)] 2xl:h-[calc(100vh-5rem)]">
        &nbsp;
      </aside>
    </div>
  );
}

export default AccountLayout;
