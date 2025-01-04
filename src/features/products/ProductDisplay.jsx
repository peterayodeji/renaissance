import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ProductDisplay({ product, children, imgClasses = '' }) {
  const [imgLoadErr, setImgLoadErr] = useState(false);
  const navigate = useNavigate();
  const { id, image, name, price } = product;

  return (
    <li
      onClick={() => navigate(`/product/${id}`)}
      className={`bg-purple-30 cursor-pointer ${imgLoadErr ? 'self-end' : ''}`}
    >
      {!imgLoadErr ? (
        <img
          onError={() => setImgLoadErr(true)}
          // src={image}
          src="/vivienne-westwood-multicolor-stuart-sweater.webp"
          alt={name}
          className={`${imgClasses}`}
        />
      ) : null}

      <p>{name}</p>
      <div className="bg-green-30 px- w-full justify-between">
        $<span className="font-mediu">{price}</span>
      </div>

      {children}
    </li>
  );
}

export default ProductDisplay;
