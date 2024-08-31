import { createContext, useContext, useState } from 'react';

const NavExtensionContext = createContext();

// # NAVEXTENSION
function NavExtension({ children, activeDefault }) {
  const [openName, setOpenName] = useState(activeDefault);
  const open = setOpenName;
  const close = () => setOpenName('');

  return (
    <NavExtensionContext.Provider value={{ openName, open, close }}>
      <div className="flex">{children}</div>
    </NavExtensionContext.Provider>
  );
}

// # LINKS
function Links({ children }) {
  return (
    <ul className="flex w-48 flex-col gap-y-4 pt-4 text-lg tracking-wide lg:w-64 lg:text-xl 2xl:w-80 2xl:text-2xl">
      {children}
    </ul>
  );
}

// # LINK
function Link({ children, to, opens: opensLinkName }) {
  const { openName, open } = useContext(NavExtensionContext);

  function handleHover(opensLinkName) {
    if (openName === opensLinkName) return;
    open(opensLinkName);
  }

  return (
    <li>
      <a href={to} onMouseEnter={() => handleHover(opensLinkName)}>
        {children}
      </a>{' '}
      {opensLinkName && openName === opensLinkName && (
        <span className="inline-block animate-SlideInShort">&rarr;</span>
      )}
    </li>
  );
}

// # SUB-LINKS
function SubLinks({ children, name }) {
  const { openName } = useContext(NavExtensionContext);

  if (name !== openName) return null;

  return children;
}

// * Compound components to be property of NavExtension
NavExtension.Links = Links;
NavExtension.Link = Link;
NavExtension.SubLinks = SubLinks;

export default NavExtension;
