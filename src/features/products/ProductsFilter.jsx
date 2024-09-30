import { useSearchParams } from 'react-router-dom';
import ScrollableListContainer from '../../ui/ScrollableListContainer';

function ProductsFilter({ filters: filterOptions }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterField] = Object.keys(filterOptions[0]).filter(prop =>
    filterOptions.every(item =>
      Object.prototype.hasOwnProperty.call(item, prop),
    ),
  );

  const [...filterValues] = new Set(
    filterOptions.map(opt => opt[filterField]).flat(),
  );
  const allFilterValues = ['all', ...filterValues];

  const currentfilterParam = searchParams.get(filterField);
  const currentFilter =
    !currentfilterParam || currentfilterParam === 'all'
      ? 'all'
      : decodeURIComponent(currentfilterParam);

  function handleClick(value) {
    const encodedFilterValue = encodeURIComponent(value);
    searchParams.set(filterField, encodedFilterValue);
    if (searchParams.get('page')) searchParams.set('page', 1);
    setSearchParams(searchParams);
  }

  return (
    <ScrollableListContainer
      navigationBtn={false}
      style={{ columnGap: '0.5rem' }}
    >
      {allFilterValues.map(val => (
        <li key={val}>
          <FilterButton
            onClick={() => handleClick(val)}
            active={currentFilter === val}
            disabled={currentFilter === val}
          >
            {val}
          </FilterButton>
        </li>
      ))}
    </ScrollableListContainer>
  );
}

export default ProductsFilter;

function FilterButton({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={`border border-black px-2 py-1 uppercase transition-all hover:bg-black hover:text-white disabled:cursor-not-allowed ${active ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      {children}
    </button>
  );
}
