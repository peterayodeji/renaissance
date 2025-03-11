import { useLogout } from '../auth/useLogout';

function Account() {
  const { logout, isLoading: isLoggingOut } = useLogout();

  return (
    <div className="bg-stone-20 grow px-2 pb-14 pt-12 sm:px-4">
      <div className="bg-blue-30 mx-auto max-w-sm text-sm xl:max-w-md">
        <h2 className="mb-8 text-center text-3xl font-semibold">Account</h2>

        <button
          type="button"
          onClick={logout}
          disabled={isLoggingOut}
          className="mb-12 w-full bg-black py-4 font-medium tracking-wider text-white disabled:opacity-80"
        >
          <span className="undeline">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Account;
