import { useState } from 'react';
import { createPortal } from 'react-dom';

import { useSearch } from './useSearch';
import { useDebouncedQuery } from '../../hooks/useDebouncedQuery';
import { useFixedScrollFlicker } from '../../hooks/useFixedScrollFlicker';

import MobileNavActions from '../../ui/MobileNavActions';
import SearchInput from './SearchInput';
import SearchCategory from './SearchCategory';
import SearchNotifier from './SearchNotifier';
import SearchResultsList from './SearchResultsList';

function SearchView({ open, onClose }) {
  const [searchInput, setSearchInput] = useState('');
  const [category, setCategory] = useState('Women');
  const isValidInput = searchInput.length > 1;

  const debouncedQuery = useDebouncedQuery({
    query: searchInput,
    enabled: isValidInput,
  });
  const {
    subcategoryMatches,
    nameMatches,
    tagsMatches,
    isValid: isValidResult,
    error,
  } = useSearch({
    debouncedQuery,
    category,
    isValidInput,
  });

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-20 flex w-screen bg-transparent lg:flex-col lg:overflow-y-hidden">
      <div className="bg-blue-40 block h-screen w-full flex-col items-center overflow-y-scroll bg-white pb-6 shadow-sm sm:h-auto sm:w-[65vw] lg:flex lg:w-screen lg:overflow-y-hidden lg:pb-12 lg:pt-8">
        {/* // # LOGO COMP. */}
        <h1 className="mb-10 hidden text-3xl font-bold text-black lg:block">
          RENAISSANCE
        </h1>

        <MobileNavActions>
          <button onClick={onClose}>Close</button>
        </MobileNavActions>

        <div className="flex w-full animate-SlideInLong flex-col px-4 lg:w-[40%] lg:animate-none lg:px-0">
          <div className="sticky top-14 mb-1 bg-white md:top-16 lg:static">
            <SearchInput
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              category={category}
            />

            <SearchCategory category={category} setCategory={setCategory} />
          </div>

          <div className="px-4 py-2 lg:h-[170px] lg:overflow-y-auto">
            <SearchNotifier
              searchInput={searchInput}
              isValidInput={isValidInput}
              isValidResult={isValidResult}
              error={error}
            />

            {isValidResult && !error && isValidInput && (
              <SearchResultsList
                subcategoryMatches={subcategoryMatches}
                tagsMatches={tagsMatches}
                nameMatches={nameMatches}
                onClose={onClose}
              />
            )}
          </div>
        </div>
      </div>

      <SearchOverlay onClose={onClose} />
      <SearchClose onClose={onClose} />
    </div>,
    document.body,
  );
}

export default SearchView;

function SearchOverlay({ onClose }) {
  useFixedScrollFlicker();

  return (
    <div
      onClick={() => onClose()}
      className="flex-1 backdrop-brightness-[.9]"
    ></div>
  );
}

function SearchClose({ onClose }) {
  return (
    <button
      onClick={() => onClose()}
      className="fixed right-[14px] top-2 hidden p-2 lg:block"
    >
      <img src="/x.svg" alt="Close" className="w-6" />
    </button>
  );
}
