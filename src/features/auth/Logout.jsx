import { useLogout } from './useLogout';
import Loader from '../../ui/Loader';

function Logout({ type = 'primary', callback }) {
  const { logout, isLoggingOut } = useLogout();

  function handleClick() {
    logout();
    callback?.();
  }

  return (
    <>
      {type === 'primary' && (
        <button
          type="button"
          onClick={handleClick}
          disabled={isLoggingOut}
          className="w-full border border-black bg-white py-2 tracking-wider text-black"
        >
          <span className="undeline">Logout</span>
        </button>
      )}

      {type === 'secondary' && (
        <button type="button" onClick={handleClick} disabled={isLoggingOut}>
          Logout
        </button>
      )}

      {isLoggingOut && <Loader />}
    </>
  );
}

export default Logout;
