// import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import MobileNavActions from '../../ui/MobileNavActions';

function SearchView({ onClose }) {
  // useEffect(function () {
  //   document.body.style.overflowY = 'hidden';

  //   return () => (document.body.style.overflowY = 'scroll');
  // }, []);

  return createPortal(
    <div className="fixed inset-0 z-40 flex w-screen bg-transparent lg:flex-col">
      <div className="bg-blue-30 block h-screen w-full flex-col items-center overflow-y-scroll bg-white sm:h-auto sm:w-[65vw] lg:flex lg:w-screen lg:pb-12 lg:pt-8">
        <h1 className="bg-yellow-30 mb-10 hidden text-3xl font-bold lg:block">
          RENAISSANCE
        </h1>

        <MobileNavActions>
          <button onClick={onClose}>Close</button>
        </MobileNavActions>

        <div className="flex w-full animate-SlideInLong flex-col px-4 lg:w-[45%] lg:animate-none lg:px-0">
          <div className="bg-yellow-30 sticky md:top-16 lg:static">
            <input
              type="search"
              name=""
              id=""
              className="mb-4 w-full border border-black py-2"
            />

            <div className="bg-purple-20 mb-2 space-x-12 py-2">
              <button>Women</button>
              <button>Men</button>
            </div>
          </div>

          <div className="bg-green-30 overflow-y-auto py-2 lg:h-[170px]">
            <ul>
              <li>Start typing to see suggestions</li>
            </ul>
            <ul>
              <li>Start typing to see suggestions</li>
              <li>Start typing to see suggestions</li>
            </ul>

            <ul>
              <li>Start typing to see suggestions</li>
              <li>Start typing to see suggestions</li>
              <li>Start typing to see suggestions</li>
              <li>Start typing to see suggestions</li>
              <li>Start typing to see suggestions</li>
              <li>Start typing to see suggestions</li>
              <li>Start typing to see suggestions</li>
              <li>Start typing to see suggestions</li>
              <li>Start typing to see suggestions</li>
            </ul>
          </div>
        </div>
      </div>

      <div onClick={() => onClose()} className="flex-1 bg-white/50"></div>

      <button
        onClick={() => onClose()}
        className="bg-red-20 fixed right-[14px] top-0 hidden p-2 lg:block"
      >
        <img src="/x.svg" alt="Close" className="w-6" />
      </button>
    </div>,
    document.body,
  );
}

export default SearchView;
