import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCartItemById } from '../cart/cartSlice';

function ProductActions({ product }) {
  const dispatch = useDispatch();
  const [currentSize, setCurrentSize] = useState({ value: '', quantity: null });

  const { id, name, description, color, price, sizes, model } = product;
  const cartItemId = id + currentSize.value + color;

  // Get cartItem from cart that matches (id, size, color)
  const cartItem = useSelector(getCartItemById(cartItemId));

  function handleInputChange(e) {
    const value = e.target.value;
    const quantity = +e.target.selectedOptions[0].dataset.quantity;

    setCurrentSize(size => ({ ...size, value, quantity }));
  }

  function handleAddToCart(e) {
    e.preventDefault();

    const newItem = {
      itemId: cartItemId,
      name,
      description,
      color,
      size: currentSize.value,
      quantity: 1,
      maxQuantity: currentSize.quantity,
      unitPrice: price,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <article className="bg-blue-20 flex items-center lg:sticky lg:bottom-0 lg:h-[calc(100vh-4rem)] lg:pr-8 xl:px-10 2xl:h-[calc(100vh-5rem)] 2xl:px-12">
      <form
        onSubmit={handleAddToCart}
        className="bg-cyan-20 w-full space-y-4 text-sm"
      >
        <div className="flex justify-between">
          <h3 className="w-40 uppercase lg:hidden">{product.name}</h3>
          <p>${price} USD</p>
        </div>

        <select
          value={currentSize.value}
          onChange={handleInputChange}
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
              data-quantity={size.quantity}
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
            disabled={
              cartItem ? cartItem.quantity >= currentSize.quantity : false
            }
            className="flex-1 bg-black py-2 uppercase text-white disabled:cursor-not-allowed disabled:bg-stone-900"
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
