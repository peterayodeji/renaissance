import { useState } from 'react';
import MobileNav from './MobileNav';

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-0 z-20 flex h-14 w-full items-center justify-between bg-stone-50 px-4 sm:px-8 md:h-16 md:px-12 lg:hidden">
      <div className="bg-green-00 flex flex-row items-center gap-x-2 text-xs md:gap-x-4">
        <img src="/menu.svg" alt="Search" onClick={() => setIsOpen(true)} />
        <img src="/search-1.svg" alt="Search" />
      </div>

      <h1 className="bg-red-00 text-xl font-bold text-gray-800 sm:text-2xl">
        RENAISSANCE
      </h1>

      <div
        onClick={() => setIsOpen(false)}
        className="bg-blue-00 flex flex-row items-center"
      >
        <img src="/shopping-bag.svg" alt="Shopping Bag" />
        <span className="text-sm font-bold">(1)</span>
      </div>

      <MobileNav isOpen={isOpen} />
    </div>
  );
}

export default MobileHeader;
