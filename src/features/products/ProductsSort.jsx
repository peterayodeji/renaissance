import { useCallback, useRef, useState } from 'react';
import { useOutsideClick } from '../../hooks/useOutsideClick';

const SORT_OPTIONS = [
  { label: 'Recommended', value: 'recommended' },
  { label: 'Newest', value: 'newest' },
  { label: 'Lowest Price', value: 'lowest-price' },
  { label: 'Highest Price', value: 'highest-price' },
];

function ProductsSort() {
  const [value, setValue] = useState('recommended');
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
    setValue(value);
    // console.log(value);
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
          className="absolute w-56 border border-black bg-white"
        >
          {SORT_OPTIONS.map(opt => (
            <li
              key={opt.label}
              onClick={() => handleSelectOption(opt.value)}
              role="radio"
              className="flex cursor-pointer items-center gap-x-3 px-4 py-3 hover:bg-stone-50"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-black bg-white">
                {value === opt.value ? (
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
