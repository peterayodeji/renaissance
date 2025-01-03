import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import MobileNav from './MobileNav';
import Search from '../features/search/search';
import Overlay from './Overlay';
import { getTotalCartQuantity } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="sticky top-0 z-20 flex h-14 w-full items-center bg-white px-4 sm:px-8 md:h-16 md:px-12">
      <div className="flex flex-1 flex-row items-center md:gap-x-4">
        <button onClick={() => setIsOpen(true)} className="px-2 py-1">
          <img src="/menu.svg" alt="Menu" className="w-5 sm:w-auto" />
        </button>

        <Search />
      </div>

      <NavLink
        to={'/'}
        className="px-2 py-1 text-xl font-bold text-black sm:text-2xl"
      >
        RENAISSANCE
      </NavLink>

      <div className="flex flex-1 items-center justify-end">
        <button
          onClick={() => navigate('/cart')}
          className="flex flex-row items-center justify-center px-2 py-1"
        >
          <img
            src="/shopping-bag.svg"
            alt="Shopping Bag"
            className="w-5 sm:w-auto"
          />
          <span className="text-sm font-bold">({totalCartQuantity})</span>
        </button>
      </div>

      <MobileNav isOpen={isOpen} onClose={handleClose} />
      {isOpen && <Overlay onClick={handleClose} />}
    </div>
  );
}

export default MobileHeader;
