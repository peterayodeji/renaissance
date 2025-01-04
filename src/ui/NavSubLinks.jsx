function NavSubLinks({ links, children }) {
  return (
    <div className="animate-SlideInLong pt-4">
      <h6 className="mb-4 text-sm tracking-wide lg:text-base 2xl:text-lg">
        {children}
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
