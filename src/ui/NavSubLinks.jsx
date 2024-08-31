const links = [
  { name: 'Shoes', to: '/shoes' },
  { name: 'Bags', to: '/bags' },
  { name: 'Jewellery', to: '/jewellery' },
  { name: 'Wallets and cases', to: '/wallets-and-cases' },
  { name: 'Belts', to: '/belts' },
  { name: 'Sunglasses', to: '/sunglasses' },
  { name: 'Foulards and caps', to: '/foulards-and-caps' },
  { name: 'Fragrances', to: '/fragrances' },
  { name: 'More accessories', to: '/more-accessories' },
];

function NavSubLinks() {
  return (
    <div className="animate-SlideInLong pt-2">
      <h6 className="mb-4 text-sm tracking-wide lg:text-base 2xl:text-lg">
        SHOES AND <br /> ACCESSORIES
      </h6>

      <ul className="space-y-1 text-sm 2xl:text-base">
        {links.map(link => (
          <li key={link.name}>
            <a href={link.to}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavSubLinks;
