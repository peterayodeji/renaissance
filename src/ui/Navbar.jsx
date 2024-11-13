import { createContext, useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PartialOverlay from './PartialOverlay';

const NavbarContext = createContext();

// # NAVBAR
function Navbar({ children }) {
  const location = useLocation();
  const [openName, setOpenName] = useState('');
  const close = () => setOpenName('');
  const open = setOpenName;

  useEffect(
    function () {
      close();
    },
    [location.pathname, location.search],
  );

  return (
    <NavbarContext.Provider value={{ openName, close, open }}>
      <header className={`fixed z-20 w-full`} onMouseLeave={close}>
        {children}
      </header>
    </NavbarContext.Provider>
  );
}

// # NAV
function Nav({ children }) {
  const location = useLocation();
  const { openName } = useContext(NavbarContext);

  // Dynamically set transparency on Nav
  const onProductPage = location.pathname.split('/').includes('product');
  let navBgClassName = 'bg-white';
  if (onProductPage) {
    navBgClassName = 'bg-transparent';
  }

  if (onProductPage && openName) {
    navBgClassName = 'bg-white';
  }

  return (
    <nav
      className={`flex h-16 items-center px-8 xl:px-10 2xl:h-20 2xl:px-12 ${navBgClassName}`}
    >
      {children}
    </nav>
  );
}

// # LINKS
function Links({ children }) {
  return <ul className="flex flex-1 gap-x-8">{children}</ul>;
}

// # LINK
function Link({ children, to, opens: opensBodyName }) {
  const { openName, open } = useContext(NavbarContext);

  function handleHover(opensBodyName) {
    if (openName === opensBodyName) return;
    open(opensBodyName);
  }

  return (
    <li>
      <NavLink to={to} onMouseEnter={() => handleHover(opensBodyName)}>
        {children}
      </NavLink>
    </li>
  );
}

// # BODY
function Body({ children, name }) {
  const { openName, close } = useContext(NavbarContext);

  if (name !== openName) return null;
  return (
    <article className="flex h-[calc(100vh-4rem)] flex-col 2xl:h-[calc(100vh-5rem)]">
      {children}
      <PartialOverlay onMouseEnter={close} />
    </article>
  );
}

// * Set each component to be property of Navbar
Navbar.Nav = Nav;
Navbar.Links = Links;
Navbar.Link = Link;
Navbar.Body = Body;

export default Navbar;
