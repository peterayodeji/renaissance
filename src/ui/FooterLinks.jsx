function FooterLinks({ links, title }) {
  return (
    <div className="w-36 sm:w-auto">
      <h3 className="mb-4 uppercase">{title}</h3>

      <ul className="space-y-2 text-sm">
        {links.map(link => (
          <li key={link.name}>
            <a href="#">{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
