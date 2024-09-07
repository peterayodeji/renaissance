import { useState } from 'react';
import PrimaryMobileNav from './PrimaryMobileNav';
import SecondaryMobileNav from './SecondaryMobileNav';
import TertiaryMobileNav from './TertiaryMobileNav';

function MobileNav({ isOpen, onClose }) {
  const [activeOption, setActiveOption] = useState(null);

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-20 h-screen w-full overflow-y-scroll bg-stone-50 sm:w-[65vw]">
      <PrimaryMobileNav
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        onClose={onClose}
      />
      <SecondaryMobileNav
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        onClose={onClose}
      />
      <TertiaryMobileNav
        activeOption={activeOption}
        setActiveOption={setActiveOption}
        onClose={onClose}
      />

      <div className="mb-12 space-y-4 px-8">
        <button className="w-full bg-black py-2 text-white">Sign In</button>
        <button className="w-full border border-black bg-white py-2 text-black">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
