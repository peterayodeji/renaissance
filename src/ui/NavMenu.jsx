import { useNavigate } from 'react-router-dom';
import Search from '../features/search/search';
import NavMenuButton from './NavMenuButton';

function NavMenu() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 justify-end gap-x-8">
      <Search />

      <NavMenuButton onClick={() => navigate('account/sign-in')}>
        <img src="/user.svg" alt="User" />
        <span>Sign in</span>
      </NavMenuButton>

      <NavMenuButton>
        <img src="/heart.svg" alt="Heart" />
        <span>Wishlist</span>
      </NavMenuButton>

      <NavMenuButton onClick={() => navigate('/cart')}>
        <img src="/shopping-bag.svg" alt="Shopping Bag" />
        <span>Cart</span>
      </NavMenuButton>
    </div>
  );
}

export default NavMenu;
