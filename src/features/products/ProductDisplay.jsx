function ProductDisplay({ product, children }) {
  const { id, image, name, price } = product;

  return (
    <li className="bg-red-30">
      <img
        // src={image}
        src="/vivienne-westwood-multicolor-stuart-sweater.webp"
        alt={name}
        className="cursor-pointer"
        onClick={() => console.log(id)}
      />
      <p>{name}</p>
      <div className="bg-green-30 px- w-full justify-between">
        $<span className="font-mediu">{price}</span>
      </div>

      {children}
    </li>
  );
}

export default ProductDisplay;
