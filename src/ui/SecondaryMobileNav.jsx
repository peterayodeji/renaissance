import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import MobileNavActions from './MobileNavActions';
import NavLinksList from './NavLinksList';
import EnclosedLink from './EnclosedLink';

const SECONDARY_LINKS = {
  women: [
    {
      name: 'New Arrivals',
      to: '/women#new-arrivals',
      isEnclosed: false,
    },
    // { name: 'Trending', to: '/women#trending', isEnclosed: false },
    {
      name: 'Featured',
      to: 'featured-women',
      isEnclosed: true,
      from: { name: 'Women', to: 'women' },
    },
    {
      name: 'Western Collection',
      to: 'western-collection-women',
      isEnclosed: true,
      from: { name: 'Women', to: 'women' },
    },
    {
      name: 'Clothing',
      to: 'clothing-women',
      isEnclosed: true,
      from: { name: 'Women', to: 'women' },
    },

    {
      name: 'Shoes and Accessories',
      to: 'shoes-and-accessories-women',
      isEnclosed: true,
      from: { name: 'Women', to: 'women' },
    },
  ],

  men: [
    { name: 'New Arrivals', to: '/men#new-arrivals', isEnclosed: false },
    // { name: 'Trending', to: '/men#trending', isEnclosed: false },
    {
      name: 'Featured',
      to: 'featured-men',
      isEnclosed: true,
      from: { name: 'Men', to: 'men' },
    },
    {
      name: 'Western Collection',
      to: 'western-collection-men',
      isEnclosed: true,
      from: { name: 'Men', to: 'men' },
    },
    {
      name: 'Clothing',
      to: 'clothing-men',
      isEnclosed: true,
      from: { name: 'Men', to: 'men' },
    },

    {
      name: 'Shoes and Accessories',
      to: 'shoes-and-accessories-men',
      isEnclosed: true,
      from: { name: 'Men', to: 'men' },
    },
  ],
};

const NAV_POSTER = {
  women: '/women-nav-poster.jpg',
  men: '/women-nav-poster.jpg',
};

function SecondaryMobileNav({ activeOption, setActiveOption, onClose }) {
  const selectedLinks = SECONDARY_LINKS[activeOption?.to];
  if (!selectedLinks) return null;

  return (
    <>
      <MobileNavActions>
        <button onClick={() => setActiveOption(null)}>Back</button>
        <NavLink onClick={onClose} to={activeOption.to}>
          {activeOption.name}
        </NavLink>
        <button onClick={onClose}>Close</button>
      </MobileNavActions>

      <NavLinksList>
        {selectedLinks.map(({ name, to, from, isEnclosed }) => (
          <Fragment key={name}>
            {isEnclosed && (
              <EnclosedLink
                name={name}
                clickHandler={() =>
                  setActiveOption(opt => ({ ...opt, name, to, from }))
                }
              />
            )}

            {!isEnclosed && (
              <li>
                <NavLink onClick={onClose} to={to}>
                  {name}
                </NavLink>
              </li>
            )}
          </Fragment>
        ))}
      </NavLinksList>

      <div className="mb-8 space-y-3 px-8 text-center font-medium">
        <img src={NAV_POSTER[activeOption.to]} alt="Navigation Poster" />
        <NavLink
          onClick={onClose}
          to={`/${activeOption.to}#shop-by-essentials`}
          className="inline-block"
        >
          Essentials
        </NavLink>
      </div>
    </>
  );
}

export default SecondaryMobileNav;
