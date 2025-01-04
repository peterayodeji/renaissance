import { NavLink } from 'react-router-dom';
import MobileNavActions from './MobileNavActions';
import NavLinksList from './NavLinksList';

const TERTIARY_LINKS = {
  'featured-women': [
    { name: 'Bags', to: '/bags' },
    { name: 'Shoes', to: '/shoes' },
    { name: 'Jewellery', to: '/jewellery' },
    { name: 'Wallets and cases', to: '/wallets-and-cases' },
    { name: 'Belts', to: '/belts' },
    { name: 'Sunglasses', to: '/sunglasses' },
  ],
  'western-collection-women': [
    { name: 'Foulards and caps', to: '/foulards-and-caps' },
    { name: 'Sunglasses', to: '/sunglasses' },
    { name: 'Pants', to: '/pants' },
    { name: 'Fragrances', to: '/fragrances' },
    { name: 'Jeans', to: '/jeans' },
  ],
  'clothing-women': [
    { name: 'Pants', to: '/pants' },
    { name: 'Cardigan', to: '/cardigan' },
    { name: 'Jeans', to: '/jeans' },
    { name: 'Ripped', to: '/ripped' },
    { name: 'Knit wears', to: '/knit-wears' },
    { name: 'Rogue', to: '/rogue' },
    { name: 'Cotton', to: '/cotton' },
  ],
  'shoes-and-accessories-women': [
    { name: 'Shoes', to: '/shoes' },
    { name: 'Fragrances', to: '/fragrances' },
    { name: 'Hats', to: '/hats' },
    { name: 'Necklaces', to: '/necklaces' },
    { name: 'Foulards and caps', to: '/foulards-and-caps' },
    { name: 'More accessories', to: '/more-accessories' },
  ],

  'clothing-men': [
    { name: 'Jackets', to: '/jackets' },
    { name: 'Pants', to: '/pants' },
    { name: 'Cardigan', to: '/cardigan' },
    { name: 'Jeans', to: '/jeans' },
    { name: 'Ripped', to: '/ripped' },
    { name: 'Rogue', to: '/rogue' },
    { name: 'Cotton', to: '/cotton' },
  ],
  'shoes-and-accessories-men': [
    { name: 'Shoes', to: '/shoes' },
    { name: 'Belts', to: '/belts' },
    { name: 'Caps', to: '/caps' },
    { name: 'Necklaces', to: '/necklaces' },
    { name: 'Wrist watches', to: '/wrist-watches' },
    { name: 'Foulards and caps', to: '/foulards-and-caps' },
    { name: 'Fragrances', to: '/fragrances' },
    { name: 'More accessories', to: '/more-accessories' },
  ],
  'western-collection-men': [
    { name: 'Sunglasses', to: '/sunglasses' },
    { name: 'Foulards and caps', to: '/foulards-and-caps' },
    { name: 'Fragrances', to: '/fragrances' },
    { name: 'Pants', to: '/pants' },
    { name: 'Jeans', to: '/jeans' },
  ],
  'featured-men': [
    { name: 'Shoes', to: '/shoes' },
    { name: 'Bags', to: '/bags' },
    { name: 'Jewellery', to: '/jeweelery' },
    { name: 'Wallets and cases', to: '/wallets-and-cases' },
    { name: 'Belts', to: '/belts' },
    { name: 'Sunglasses', to: '/sunglasses' },
  ],
};

function TertiaryMobileNav({ activeOption, setActiveOption, onClose }) {
  const selectedLinks = TERTIARY_LINKS[activeOption?.to];
  if (!selectedLinks) return null;

  return (
    <>
      <MobileNavActions>
        <button
          onClick={() =>
            setActiveOption(opt => ({
              ...opt,
              name: activeOption.from.name,
              to: activeOption.from.to,
            }))
          }
        >
          Back
        </button>
        <NavLink onClick={onClose} to={activeOption.to}>
          {activeOption.name}
        </NavLink>
        <button onClick={onClose}>Close</button>
      </MobileNavActions>

      <NavLinksList>
        {selectedLinks.map(({ name, to }) => (
          <li key={name}>
            <a href={to}>{name}</a>
          </li>
        ))}
      </NavLinksList>
    </>
  );
}

export default TertiaryMobileNav;
