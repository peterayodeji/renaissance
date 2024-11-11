function CustomListItem({ children }) {
  return (
    <li className="flex items-center gap-x-3">
      <img src="/check-1.svg" alt="Check" className="w-5" />
      <span>{children}</span>
    </li>
  );
}

export default CustomListItem;
