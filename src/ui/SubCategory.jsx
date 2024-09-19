import { usePathFinder } from '../hooks/usePathFinder';
import ScrollableListContainer from './ScrollableListContainer';

const META_SUB_CATEGORIES = {
  women: [
    {
      name: 'Gowns',
      url: '#',
    },
    {
      name: 'Clothing',
      url: '#',
    },
    {
      name: 'Belts',
      url: '#',
    },
    {
      name: 'Caps & Hats',
      url: '#',
    },
    {
      name: 'Underwears',
      url: '#',
    },
    {
      name: 'Necklace',
      url: '#',
    },
    {
      name: 'Shirts',
      url: '#',
    },
    {
      name: 'Trousers',
      url: '#',
    },
    {
      name: 'Shorts',
      url: '#',
    },
    {
      name: 'Skirts',
      url: '#',
    },
    {
      name: 'Cardigan & Hoodies',
      url: '#',
    },
    {
      name: 'Joggers',
      url: '#',
    },
    {
      name: 'Shoes',
      url: '#',
    },
    {
      name: 'Knit wears',
      url: '#',
    },
  ],

  men: [
    {
      name: 'Clothing',
      url: '#',
    },
    {
      name: 'Belts',
      url: '#',
    },
    {
      name: 'Caps & Hats',
      url: '#',
    },
    {
      name: 'Underwears',
      url: '#',
    },
    {
      name: 'Necklace',
      url: '#',
    },
    {
      name: 'Shirts',
      url: '#',
    },
    {
      name: 'Trousers',
      url: '#',
    },
    {
      name: 'Shorts',
      url: '#',
    },
    {
      name: 'Gowns',
      url: '#',
    },
    {
      name: 'Skirts',
      url: '#',
    },
    {
      name: 'Cardigan & Hoodies',
      url: '#',
    },
    {
      name: 'Joggers',
      url: '#',
    },
    {
      name: 'Shoes',
      url: '#',
    },
    {
      name: 'Knit wears',
      url: '#',
    },
  ],
};

function SubCategory() {
  const path = usePathFinder();
  const subCategories = META_SUB_CATEGORIES[path];

  return (
    <div className="bg-blue-30 mb-8 h-36 px-2 pt-8 sm:px-4 md:h-40 md:px-8">
      {/* Later: Potential component (Heading - secondary/tertiary) */}
      <h3 className="mb-4 text-sm sm:text-base">WOMAN</h3>

      <ScrollableListContainer>
        {subCategories.map(sub => (
          <li
            key={sub.name}
            className="text-xs uppercase tracking-wider sm:text-sm"
          >
            <a href={sub.url}>{sub.name}</a>
          </li>
        ))}
      </ScrollableListContainer>
    </div>
  );
}

export default SubCategory;
