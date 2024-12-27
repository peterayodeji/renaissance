import { useNavigate } from 'react-router-dom';

function ProductDisplay({ product, children }) {
  const navigate = useNavigate();
  const { id, image, name, price } = product;

  return (
    <li onClick={() => navigate(`/product/${id}`)} className="cursor-pointer">
      <img
        // src={image}
        src="/vivienne-westwood-multicolor-stuart-sweater.webp"
        alt={name}
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
