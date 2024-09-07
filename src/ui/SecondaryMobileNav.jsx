import { Fragment } from 'react';
import MobileNavActions from './MobileNavActions';
import NavLinksList from './NavLinksList';
import EnclosedLink from './EnclosedLink';

const SECONDARY_LINKS = {
  women: [
    {
      name: 'Latest Arrivals',
      to: '/latest-arrivals-women',
      isEnclosed: false,
    },
    { name: 'Trending', to: '/trending-women', isEnclosed: false },
    {
      name: 'Clothing',
      to: 'clothing-women',
      isEnclosed: true,
      from: { name: 'Women', to: 'women' },
    },
    {
      name: 'Trousers',
      to: 'trousers-women',
      isEnclosed: true,
      from: { name: 'Women', to: 'women' },
    },
    {
      name: 'Shoes',
      to: 'shoes-women',
      isEnclosed: true,
      from: { name: 'Women', to: 'women' },
    },
  ],

  men: [
    { name: 'Latest Arrivals', to: '/latest-arrivals-men', isEnclosed: false },
    { name: 'Trending', to: '/trending-men', isEnclosed: false },
    {
      name: 'Clothing',
      to: 'clothing-men',
      isEnclosed: true,
      from: { name: 'Men', to: 'men' },
    },
    {
      name: 'Trousers',
      to: 'trousers-men',
      isEnclosed: true,
      from: { name: 'Men', to: 'men' },
    },
    {
      name: 'Shoes',
      to: 'shoes-men',
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
        <a href={activeOption.to}>{activeOption.name}</a>
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
                <a href={to}>{name}</a>
              </li>
            )}
          </Fragment>
        ))}
      </NavLinksList>

      <div className="mb-8 space-y-3 px-8 text-center font-medium">
        <img src={NAV_POSTER[activeOption.to]} alt="Navigation Poster" />
        <a href="/essentials" className="inline-block">
          Essentials
        </a>
      </div>
    </>
  );
}

export default SecondaryMobileNav;
