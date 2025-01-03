import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useUser } from '../features/auth/useUser';
import { getTotalCartQuantity } from '../features/cart/cartSlice';

import Search from '../features/search/search';
import NavMenuButton from './NavMenuButton';

function NavMenu() {
  const navigate = useNavigate();
  const { isAuthenticated } = useUser();
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div className="flex flex-1 justify-end gap-x-4 xl:gap-x-8">
      <Search />

      {isAuthenticated ? (
        <NavMenuButton onClick={() => navigate('/account')}>
          <img src="/user.svg" alt="User" />
          <span>Account</span>
        </NavMenuButton>
      ) : (
        <NavMenuButton
          onClick={() =>
            navigate('/account/sign-in', { state: { accessible: true } })
          }
        >
          <img src="/user.svg" alt="User" />
          <span>Sign in</span>
        </NavMenuButton>
      )}

      <NavMenuButton onClick={() => navigate('/wishlist')}>
        <img src="/heart.svg" alt="Heart" />
        <span>Wishlist</span>
      </NavMenuButton>

      <NavMenuButton onClick={() => navigate('/cart')}>
        <img src="/shopping-bag.svg" alt="Shopping Bag" />
        <span>Cart ({totalCartQuantity})</span>
      </NavMenuButton>
    </div>
  );
}

export default NavMenu;
