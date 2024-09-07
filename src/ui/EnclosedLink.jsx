function EnclosedLink({ clickHandler, name }) {
  return (
    <li onClick={clickHandler} className="flex cursor-pointer justify-between">
      <span>{name}</span>
      <img src="/chevron-right.svg" alt="Right arrow" className="w-4" />
    </li>
  );
}

export default EnclosedLink;
