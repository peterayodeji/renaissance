import { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

const NavbarContext = createContext();

// # NAVBAR
function Navbar({ children }) {
  const [openName, setOpenName] = useState('');
  const close = () => setOpenName('');
  const open = setOpenName;

  return (
    <NavbarContext.Provider value={{ openName, close, open }}>
      <header
        // className="h-80 transition-all has-[:empty]:h-20"
        className="fixed z-20 w-full bg-white"
        onMouseLeave={close}
      >
        {children}
      </header>
    </NavbarContext.Provider>
  );
}

// # NAV
function Nav({ children }) {
  return <nav className="flex items-center px-8 py-4">{children}</nav>;
}

// # NAVLINKS
function NavLinks({ children }) {
  return <ul className="flex flex-1 gap-x-8">{children}</ul>;
}

// # NAVLINK
function NavLink({ children, to, opens: opensBodyName }) {
  const { openName, open } = useContext(NavbarContext);

  function handleHover(opensBodyName) {
    if (openName === opensBodyName) return;
    open(opensBodyName);
  }

  return (
    <li onMouseEnter={() => handleHover(opensBodyName)}>
      <a href={to}>{children}</a>
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
      className="fixed inset-0 z-10 h-[100vh] w-[100vw] bg-yellow-300"
    ></div>,
    document.body,
  );
}

// * Set each component to be property of Navbar
Navbar.Nav = Nav;
Navbar.NavLinks = NavLinks;
Navbar.NavLink = NavLink;
Navbar.Body = Body;
Navbar.NavOverlay = NavOverlay;

export default Navbar;
