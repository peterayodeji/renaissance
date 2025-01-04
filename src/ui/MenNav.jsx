import NavExtension from './NavExtension';
import NavSubLinks from './NavSubLinks';
import NavTray from './NavTray';

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

function MenNav() {
  return (
    <NavTray>
      <NavExtension activeDefault="clothing">
        <NavExtension.Links>
          <NavExtension.Link to="/featured" opens="featured">
            <span className="font-semibold">Featured</span>
          </NavExtension.Link>

          <NavExtension.Link
            to="/western-collection"
            opens="western-collection"
          >
            <span className="font-semibold">
              WESTERN <br /> COLLECTION
            </span>
          </NavExtension.Link>

          <NavExtension.Link to="/promotion">Promotion</NavExtension.Link>

          <NavExtension.Link to="/clothing" opens="clothing">
            <span>Clothing</span>
          </NavExtension.Link>

          <NavExtension.Link
            to="/shoes-and-accesories"
            opens="shoes-and-accesories"
          >
            <span>
              Shoes and <br /> accesories
            </span>
          </NavExtension.Link>
        </NavExtension.Links>

        {/* NAVIGATION SUB-LINKS */}
        <NavExtension.SubLinks name="featured">
          <NavSubLinks links={TERTIARY_LINKS['featured-men']}>
            FEATURED
          </NavSubLinks>
        </NavExtension.SubLinks>

        <NavExtension.SubLinks name="western-collection">
          <NavSubLinks links={TERTIARY_LINKS['western-collection-men']}>
            WESTERN <br /> COLLECTION
          </NavSubLinks>
        </NavExtension.SubLinks>

        <NavExtension.SubLinks name="clothing">
          <NavSubLinks links={TERTIARY_LINKS['clothing-men']}>
            CLOTHING
          </NavSubLinks>
        </NavExtension.SubLinks>

        <NavExtension.SubLinks name="shoes-and-accesories">
          <NavSubLinks links={TERTIARY_LINKS['shoes-and-accessories-men']}>
            SHOES AND <br /> ACCESSORIES
          </NavSubLinks>
        </NavExtension.SubLinks>
      </NavExtension>

      <img
        className="lg:h-96"
        src="/women-nav-poster.jpg"
        alt="Women Poster Image"
      />
    </NavTray>
  );
}

export default MenNav;
