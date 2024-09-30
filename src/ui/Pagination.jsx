import { useSearchParams } from 'react-router-dom';
import { useProductsParams } from '../features/products/useProductsParams';
import { returnPaginationRange } from '../utils/helpers';

function Pagination({ pageCount }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page: curPage } = useProductsParams();

  if (!pageCount || pageCount < 2) return null;

  // Might consider using memo for this
  const paginationRange = returnPaginationRange(pageCount, curPage);

  function handlePageChange(value) {
    if (value === 'prev') {
      const prev = curPage === 1 ? curPage : curPage - 1;
      searchParams.set('page', prev);
      setSearchParams(searchParams);
    } else if (value === '... ') {
      searchParams.set('page', 1);
      setSearchParams(searchParams);
    } else if (value === ' ...') {
      searchParams.set('page', pageCount);
      setSearchParams(searchParams);
    } else if (value === 'next') {
      const next = curPage === pageCount ? curPage : curPage + 1;
      searchParams.set('page', next);
      setSearchParams(searchParams);
    } else {
      if (value === curPage) return;
      searchParams.set('page', value);
      setSearchParams(searchParams);
    }
  }

  return (
    <div className="bg-cyan-20 py-10">
      <div className="m-auto w-full max-w-[350px] space-y-3 sm:max-w-[400px]">
        <button
          onClick={() => handlePageChange('next')}
          disabled={curPage === pageCount}
          className="w-full bg-black py-3 font-medium text-white disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-500"
        >
          {curPage === pageCount ? (
            <span>LAST PAGE IS LOADED</span>
          ) : (
            <span>LOAD NEXT PAGE</span>
          )}
        </button>

        <ul className="bg-blue-20 flex items-center justify-between py-1">
          <li>
            <button
              onClick={() => handlePageChange('prev')}
              disabled={curPage === 1}
              className="py-2 disabled:cursor-not-allowed"
            >
              <img src="/chevron-left.svg" alt="Previous Button" />
            </button>
          </li>

          {paginationRange.map(value => (
            <li
              key={value}
              onClick={() => handlePageChange(value)}
              className={`cursor-pointer p-2 font-medium ${value === curPage ? 'text-black' : 'text-stone-500'}`}
            >
              {value}
            </li>
          ))}

          <li onClick={() => handlePageChange('next')}>
            <button
              onClick={() => handlePageChange('prev')}
              disabled={curPage === pageCount}
              className="py-2 disabled:cursor-not-allowed"
            >
              <img src="/chevron-right.svg" alt="Next Button" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
