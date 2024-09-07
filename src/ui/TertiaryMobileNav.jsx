import MobileNavActions from './MobileNavActions';
import NavLinksList from './NavLinksList';

const TERTIARY_LINKS = {
  'trousers-women': [
    { name: 'Pants', to: '/pants' },
    { name: 'Jeans', to: '/jeans' },
    { name: 'Ripped', to: '/ripped' },
    { name: 'Rogue', to: '/rogue' },
    { name: 'Cotton', to: '/cotton' },
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
        <a href={activeOption.to}>{activeOption.name}</a>
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
