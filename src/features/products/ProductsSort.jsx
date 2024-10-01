import { useCallback, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { useProductsParams } from './useProductsParams';

const SORT_OPTIONS = [
  { label: 'Recommended', value: 'created_at-asc' },
  { label: 'Newest', value: 'created_at-desc' },
  { label: 'Lowest Price', value: 'price-asc' },
  { label: 'Highest Price', value: 'price-desc' },
];

function ProductsSort() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { sortValue } = useProductsParams();
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef(null);

  const close = useCallback(function () {
    setIsOpen(false);
  }, []);

  function handleClickToggle(e) {
    e.stopPropagation();
    setIsOpen(open => !open);
  }

  function handleSelectOption(value) {
    searchParams.set('sort', value);
    setSearchParams(searchParams);
    close();
  }

  useOutsideClick(listRef, close, false);

  return (
    <div className="inline-block space-y-1">
      <h3
        onClick={handleClickToggle}
        className="bg-red-40 inline-block cursor-pointer py-3"
      >
        SORT BY
      </h3>

      {isOpen && (
        <ul
          ref={listRef}
          role="radiogroup"
          className="absolute w-52 border border-black bg-white sm:w-56"
        >
          {SORT_OPTIONS.map(opt => (
            <li
              key={opt.label}
              onClick={() => handleSelectOption(opt.value)}
              role="radio"
              className="flex cursor-pointer items-center gap-x-3 px-4 py-3 hover:bg-stone-50"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black bg-white">
                {sortValue === opt.value ? (
                  <span className="h-5 w-5 rounded-full bg-black"></span>
                ) : null}
              </div>

              <span role="label">{opt.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductsSort;
