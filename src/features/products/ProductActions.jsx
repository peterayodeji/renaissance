import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getCartItemById,
  increaseItemQuantity,
  addItem,
} from '../cart/cartSlice';

// import Modal from '../../ui/Modal';

function ProductActions({ product }) {
  const dispatch = useDispatch();
  const [currentSize, setCurrentSize] = useState({ value: '', quantity: null });
  // const [showSuccessModal, setShowSuccessModal] = useState(true);
  const { id, name, description, color, price, sizes, model } = product;

  // Create unique id for cart item using id, size
  const cartItemId = id + currentSize.value;

  // Get cartItem that matches current id, size
  const cartItem = useSelector(getCartItemById(cartItemId));

  function handleInputChange(e) {
    const value = e.target.value;
    const quantity = +e.target.selectedOptions[0].dataset.quantity;

    setCurrentSize(size => ({ ...size, value, quantity }));
  }

  function handleAddToCart(e) {
    e.preventDefault();

    if (cartItem) {
      dispatch(increaseItemQuantity(cartItemId));
      console.log('ADDED TO CART!');
      return;
    }

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
    console.log('ADDED TO CART!');
  }

  return (
    <>
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
              onClick={() => console.log('ADDED TO WISHLIST')}
              className="px-4 py-2 uppercase md:flex-1 md:px-0"
            >
              <span className="hidden md:inline-block">Add To Wishlist</span>
              <img src="/heart.svg" alt="Favourite" className="md:hidden" />
            </button>
          </div>

          <p>{model}</p>
        </form>
      </article>

      {/* <Modal>
        <p className="bg-fuchsia-40 h-[150px] w-[400px] py-4">
          YOU HAVE SUCCESSFULLY ADDED ITEM TO CART!
        </p>
      </Modal> */}
    </>
  );
}

export default ProductActions;
