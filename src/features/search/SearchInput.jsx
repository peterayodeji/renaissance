import { convertTitleCase } from '../../utils/helpers';

function SearchInput({ searchInput, setSearchInput, category }) {
  return (
    <div className="relative mb-4">
      <input
        value={searchInput}
        placeholder={`Search ${convertTitleCase(category)}`}
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
  );
}

export default SearchInput;

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
