import { createPortal } from 'react-dom';
import { useFixedScrollFlicker } from '../../hooks/useFixedScrollFlicker';
import MobileNavActions from '../../ui/MobileNavActions';
import { useState } from 'react';
// import { useSearch } from './useSearch';
// import { useDebouncedQuery } from '../../hooks/useDebouncedQuery';

function SearchView({ onClose }) {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('Women');
  // const debouncedQuery = useDebouncedQuery(searchInput);
  // const { isLoading, subcategoryMatches, nameMatches, error } = useSearch({
  //   debouncedQuery,
  //   category,
  // });
  useFixedScrollFlicker();

  // console.log(subcategoryMatches, nameMatches);

  return createPortal(
    <div className="fixed inset-0 z-20 flex w-screen bg-transparent lg:flex-col lg:overflow-y-hidden">
      <div className="bg-blue-40 block h-screen w-full flex-col items-center overflow-y-scroll bg-white pb-6 shadow-sm sm:h-auto sm:w-[65vw] lg:flex lg:w-screen lg:overflow-y-hidden lg:pb-12 lg:pt-8">
        <h1 className="mb-10 hidden text-3xl font-bold text-black lg:block">
          RENAISSANCE
        </h1>

        <MobileNavActions>
          <button onClick={onClose}>Close</button>
        </MobileNavActions>

        <div className="flex w-full animate-SlideInLong flex-col px-4 lg:w-[40%] lg:animate-none lg:px-0">
          <div className="bg-yellow-30 sticky top-14 mb-1 bg-white md:top-16 lg:static">
            <div className="relative mb-4">
              <input
                value={searchInput}
                placeholder={`Search ${category}`}
                onChange={e => setSearchInput(e.target.value)}
                className="w-full border px-4 py-3 text-sm outline-none placeholder:text-sm placeholder:text-inherit"
              />

              {!searchInput && (
                <SearchIcon>
                  <img src="/search.svg" alt="Search" className="w-5" />
                </SearchIcon>
              )}

              {searchInput && (
                <SearchIcon onClick={() => setSearchInput('')}>
                  <img src="/x.svg" alt="Cancel" className="w-5" />
                </SearchIcon>
              )}
            </div>

            <div className="bg-purple-20 mb-2 space-x-12 border-b px-4 py-3 text-sm font-medium">
              <button
                onClick={() => setCategory('Women')}
                className={`${category === 'Women' ? 'text-black' : 'text-stone-500'}`}
              >
                Women
              </button>
              <button
                onClick={() => setCategory('Men')}
                className={`${category === 'Men' ? 'text-black' : 'text-stone-500'}`}
              >
                Men
              </button>
            </div>
          </div>

          <div className="bg-green-30 px-4 py-2 lg:h-[170px] lg:overflow-y-auto">
            <p className="mb-6 text-stone-500 sm:text-lg">
              Start typing to see suggestions
            </p>

            <div className="space-y-2">
              {/* SUBCATEGORY - ul and li reusable comp. */}
              <ul className="bg-green-00 space-y-2 text-sm">
                <li className="flex gap-x-4">
                  <span className="font-medium text-black">Shirts</span>
                  <span className="text-stone-500">Category</span>
                </li>
                <li className="flex gap-x-4">
                  <span className="font-medium text-black">Dresses</span>
                  <span className="text-stone-500">Category</span>
                </li>
                <li className="flex gap-x-4">
                  <span className="font-medium text-black">
                    Sweaters and Cardigans
                  </span>
                  <span className="text-stone-500">Category</span>
                </li>
              </ul>

              {/* TAGS */}
              <ul className="bg-green-00 space-y-2 text-sm">
                <li className="flex gap-x-4">
                  <span className="font-medium text-black">Formal</span>
                  <span>Dresses</span>
                </li>
                <li className="flex gap-x-4">
                  <span className="font-medium text-black">Short-sleeve</span>
                  <span>Shirts</span>
                </li>
                <li className="flex gap-x-4">
                  <span className="font-medium text-black">Leather</span>
                  <span>Shoes</span>
                </li>
              </ul>

              {/* ITEMS */}
              <ul className="space-y-2 text-sm">
                <li>Midi Dress</li>
                <li>Denim Jean Jacket</li>
                <li>Ankle Boot</li>
                <li>Cargo Pants</li>
                <li>Leather Loafers</li>
                <li>High-Heel Sandals</li>
                <li>Skinny Jeans</li>
                <li>V-Neck Sweater</li>
                <li>Striped Designer Shirt</li>
                <li>Running Sneakers</li>
                <li>Polo T-Shirt</li>
                <li>Floral Blouse</li>
                <li>Pleated Skirt</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => onClose()}
        className="flex-1 backdrop-brightness-[.9]"
      ></div>

      <button
        onClick={() => onClose()}
        className="bg-red-20 fixed right-[14px] top-2 hidden p-2 lg:block"
      >
        <img src="/x.svg" alt="Close" className="w-6" />
      </button>
    </div>,
    document.body,
  );
}

export default SearchView;

function SearchIcon({ children, ...props }) {
  return (
    <button
      {...props}
      className={`bg-green-00 absolute right-1 top-1/2 -translate-y-1/2 transform p-2 ${props.onClick ? 'cursor-pointer' : 'cursor-default'}`}
    >
      {children}
    </button>
  );
}
