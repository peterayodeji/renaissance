import { useState } from 'react';
import MobileNav from './MobileNav';
import Search from '../features/search/search';
import Overlay from './Overlay';

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div className="sticky top-0 z-20 flex h-14 w-full items-center bg-white px-4 sm:px-8 md:h-16 md:px-12">
      <div className="flex flex-1 flex-row items-center gap-x-2 md:gap-x-4">
        <img src="/menu.svg" alt="Search" onClick={() => setIsOpen(true)} />

        <Search />
      </div>

      <h1 className="text-xl font-bold text-black sm:text-2xl">RENAISSANCE</h1>

      <div className="flex flex-1 flex-row items-center justify-end">
        <img src="/shopping-bag.svg" alt="Shopping Bag" />
        <span className="text-sm font-bold">(1)</span>
      </div>

      <MobileNav isOpen={isOpen} onClose={handleClose} />
      {isOpen && <Overlay onClick={handleClose} />}
    </div>
  );
}

export default MobileHeader;
