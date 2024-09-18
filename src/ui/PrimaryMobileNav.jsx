import { Fragment } from 'react';
import MobileNavActions from './MobileNavActions';
import NavLinksList from './NavLinksList';
import EnclosedLink from './EnclosedLink';
import { NavLink } from 'react-router-dom';

const PRIMARY_LINKS = [
  { name: 'Women', to: 'women', isEnclosed: true },
  { name: 'Men', to: 'men', isEnclosed: true },
  { name: 'Lifestyle', to: '/lifestyle', isEnclosed: false },
  { name: 'Wishlist', to: '/wishlist', isEnclosed: false },
  { name: 'Locations', to: '/locations', isEnclosed: false },
  { name: 'Customer Care', to: '/customer-care', isEnclosed: false },
  { name: 'Live Assistance', to: 'live-assistance', isEnclosed: false },
];

function PrimaryMobileNav({ activeOption, setActiveOption, onClose }) {
  if (activeOption) return null;

  return (
    <>
      <MobileNavActions>
        <button onClick={onClose}>Close</button>
      </MobileNavActions>

      <NavLinksList>
        {PRIMARY_LINKS.map(({ name, to, isEnclosed }) => (
          <Fragment key={name}>
            {isEnclosed && (
              <EnclosedLink
                name={name}
                clickHandler={() =>
                  setActiveOption(opt => ({ ...opt, name, to }))
                }
              />
            )}

            {!isEnclosed && (
              <li>
                <NavLink to={to}>{name}</NavLink>
              </li>
            )}
          </Fragment>
        ))}
      </NavLinksList>
    </>
  );
}

export default PrimaryMobileNav;
