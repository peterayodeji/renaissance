import { useState } from 'react';

function ProductActions({ product }) {
  const [size, setSize] = useState('');
  const { price, sizes, model } = product;

  return (
    <article className="bg-blue-20 flex items-center lg:sticky lg:bottom-0 lg:h-[calc(100vh-4rem)] lg:pr-8 xl:px-10 2xl:h-[calc(100vh-5rem)] 2xl:px-12">
      <form className="bg-cyan-20 w-full space-y-4 text-sm">
        <div className="flex justify-between">
          <h3 className="w-40 uppercase lg:hidden">{product.name}</h3>
          <p>${price} USD</p>
        </div>

        <select
          value={size}
          onChange={e => setSize(e.target.value)}
          required
          className="w-full border border-black bg-white px-1 py-2 shadow-sm focus:outline-none"
        >
          <option value="" disabled>
            SELECT A SIZE
          </option>
          {sizes.map(size => (
            <option
              key={size.value}
              value={size.value}
              disabled={size.quantity < 1}
            >
              {size.label} -{' '}
              {size.quantity < 1
                ? 'Sold Out'
                : `Only ${size.quantity} remaining`}
            </option>
          ))}
        </select>

        <div className="flex justify-between">
          <button
            type="submit"
            className="flex-1 bg-black py-2 uppercase text-white"
          >
            Add To Bag
          </button>
          <button
            type="button"
            className="px-4 py-2 uppercase md:flex-1 md:px-0"
          >
            <span className="hidden md:inline-block">Add To Wishlist</span>
            <img src="/heart.svg" alt="Favourite" className="md:hidden" />
          </button>
        </div>

        <p>{model}</p>
      </form>
    </article>
  );
}

export default ProductActions;
