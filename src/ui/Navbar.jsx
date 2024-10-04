import { createContext, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';

const NavbarContext = createContext();

// # NAVBAR
function Navbar({ children }) {
  const [openName, setOpenName] = useState('');
  const location = useLocation();
  const close = () => setOpenName('');
  const open = setOpenName;

  useEffect(
    function () {
      close();
    },
    [location.pathname, location.search],
  );

  // Dynamically set transparency on header
  const onProduct = false;
  let headerBgClassName = 'bg-white';
  if (onProduct) {
    headerBgClassName = 'bg-transparent';
  }

  if (onProduct && openName) {
    headerBgClassName = 'bg-white';
  }

  return (
    <NavbarContext.Provider value={{ openName, close, open }}>
      <header
        className={`fixed z-20 w-full ${headerBgClassName}`}
        onMouseLeave={close}
      >
        {children}
      </header>
    </NavbarContext.Provider>
  );
}

// # NAV
function Nav({ children }) {
  return (
    <nav className="flex h-16 items-center px-8 xl:px-10 2xl:h-20 2xl:px-12">
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
  const { openName } = useContext(NavbarContext);

  if (name !== openName) return null;
  return <article>{children}</article>;
}

function NavOverlay() {
  const { openName, close } = useContext(NavbarContext);

  if (!openName) return null;

  return createPortal(
    <div
      onMouseEnter={close}
      className="fixed inset-0 z-10 h-[100vh] w-[100vw] bg-stone-50/20"
    ></div>,
    document.body,
  );
}

// * Set each component to be property of Navbar
Navbar.Nav = Nav;
Navbar.Links = Links;
Navbar.Link = Link;
Navbar.Body = Body;
Navbar.NavOverlay = NavOverlay;

export default Navbar;
