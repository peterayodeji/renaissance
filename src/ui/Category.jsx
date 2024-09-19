import { usePathFinder } from '../hooks/usePathFinder';

const META_CATEGORIES = {
  women: [
    {
      name: 'Tops',
      url: '#',
      image: '/women-startpage-3.webp',
    },
    {
      name: 'Knitwears',
      url: '#',
      image: '/women-startpage-1.webp',
    },
    {
      name: 'Pants',
      url: '#',
      image: '/women-startpage-2.webp',
    },
    {
      name: 'Dresses',
      url: '#',
      image: '/women-startpage-3.webp',
    },
  ],

  men: [
    {
      name: 'Shirts',
      url: '#',
      image: '/women-startpage-3.webp',
    },
    {
      name: 'Trousers',
      url: '#',
      image: '/women-startpage-2.webp',
    },
    {
      name: 'Jackets',
      url: '#',
      image: '/women-startpage-2.webp',
    },
    {
      name: 'Shoes',
      url: '#',
      image: '/women-startpage-1.webp',
    },
  ],
};

function Category() {
  const path = usePathFinder();
  const categories = META_CATEGORIES[path];

  return (
    <div className="bg-green-30 pb-10 pt-4 sm:pb-12 md:pb-16 xl:pt-8">
      <h2 className="bg-yellow-30 mb-10 text-center text-xl tracking-wide md:mb-12 md:text-2xl lg:text-3xl">
        SHOP BY ESSENTIALS
      </h2>

      <div className="grid grid-cols-2 gap-y-10 md:gap-y-12">
        {categories.map(category => (
          <div key={category.name}>
            <img src={category.image} alt="Women Category" />
            <div className="bg-gray-40 pl-2 pt-2 text-sm sm:pl-4 sm:text-base md:pl-8 md:pt-3">
              <h5 className="font-semibold uppercase">{category.name}</h5>
              <a href={category.url}>EXPLORE</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
