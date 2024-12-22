import { useLogout } from './useLogout';

function Account() {
  const { logout, isLoading: isLoggingOut } = useLogout();

  return (
    <div className="grow bg-stone-50">
      <div className="mx-auto mt-20 max-w-md">
        <h2 className="mb-8 text-center text-3xl font-semibold">Account</h2>

        <button
          type="button"
          onClick={logout}
          disabled={isLoggingOut}
          className="mt-4 w-full bg-red-600 py-4 tracking-wider text-white disabled:opacity-80"
        >
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}

export default Account;
