import { useState } from 'react';
import NavMenuButton from '../../ui/NavMenuButton';
import SearchView from './SearchView';

function Search() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavMenuButton onClick={() => setOpen(true)}>
        <img src="/search.svg" alt="Search" className="w-5 lg:w-auto" />
        <span className="hidden lg:block">Search</span>
      </NavMenuButton>

      <SearchView open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default Search;
