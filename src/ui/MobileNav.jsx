import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../features/auth/useUser';

import PrimaryMobileNav from './PrimaryMobileNav';
import SecondaryMobileNav from './SecondaryMobileNav';
import TertiaryMobileNav from './TertiaryMobileNav';
import Logout from '../features/auth/Logout';

function MobileNav({ isOpen, onClose }) {
  const [activeOption, setActiveOption] = useState(null);
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-20 h-screen w-full overflow-y-scroll bg-white shadow-sm sm:w-[65vw]">
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

        {/* COMP. POTENTIAL */}
        <div className="mb-12 space-y-4 px-8">
          {!isAuthenticated ? (
            <>
              <button
                type="button"
                onClick={() => {
                  navigate('/account/sign-in', {
                    state: { accessible: true },
                  });
                  onClose();
                }}
                className="w-full bg-black py-2 tracking-wider text-white disabled:opacity-5"
              >
                <span className="undeline">Sign In</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  navigate('/account/register', {
                    // replace: true,
                    state: { accessible: true },
                  });
                  onClose();
                }}
                className="w-full border border-black bg-white py-2 tracking-wider text-black"
              >
                <span>Create Account</span>
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => {
                  navigate('/account');
                  onClose();
                }}
                className="w-full bg-black py-2 tracking-wider text-white disabled:opacity-5"
              >
                <span className="undeline">View Account</span>
              </button>

              <Logout callback={onClose} />
            </>
          )}
        </div>
      </div>
    </>,
    document.body,
  );
}

export default MobileNav;
