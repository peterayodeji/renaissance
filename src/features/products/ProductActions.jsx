import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  getCartItemById,
  increaseItemQuantity,
  addItem,
} from '../cart/cartSlice';

import WishlistAction from '../wishlist/WishlistAction';
import Modal from '../../ui/Modal';

const placeHolder = {
  id: 5,
  name: 'Multicolor Stuart Sweater',
  price: 660,
  description: 'Knit nylon - and alpaca-blend sweater.',
  features: [
    'Rib knit crewneck, hem, and cuffs',
    'Logo graphic printed at front',
    'Dropped shoulders',
    'Button fastening at rolled cuffs',
  ],
  color: {
    name: 'Black diamond',
    value: '#000',
  },
  colorOptions: [
    {
      name: 'Yellow summer',
      value: '#ff4',
      productId: '234',
    },
    {
      name: 'Green lemonade',
      value: '#379e3e',
      productId: '345',
    },
    {
      name: 'Sky blue',
      value: '#ac99ee',
      productId: '444',
    },
  ],
  composition: '30% polyamide, 28% alpaca, 19% wool, 16% cotton, 7% polyester.',
  sizes: [
    { label: 'XS-S = XS', value: 'XS', quantity: 3 },
    { label: 'S-M = S', value: 'S', quantity: 0 },
    { label: 'M-L = M', value: 'M', quantity: 1 },
    { label: 'L-XL = L', value: 'L', quantity: null },
  ],
  model: 'Model is 6ft 2" and wears size M-L.',
  country: 'Italy',
  images: [
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
    '/vivienne-westwood-multicolor-stuart-sweater.webp',
  ],
};

function ProductActions({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentSize, setCurrentSize] = useState({ value: '', quantity: null });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  // const { id, name, description, color, price, sizes, model } = product;

  const { id, name, price } = product;
  const { description, color, sizes, model } = placeHolder;

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
      setShowSuccessModal(true);
      return;
    }

    const newItem = {
      id,
      cartItemId,
      name,
      description,
      color,
      size: currentSize.value,
      quantity: 1,
      maxQuantity: currentSize.quantity,
      price,
      unitPrice: price,
      totalPrice: price * 1,
    };

    dispatch(addItem(newItem));
    setShowSuccessModal(true);
  }

  return (
    <>
      <article className="bg-blue-20 flex items-center lg:sticky lg:bottom-0 lg:h-[calc(100vh-4rem)] lg:pr-8 xl:px-10 2xl:h-[calc(100vh-5rem)] 2xl:px-12">
        <form
          onSubmit={handleAddToCart}
          className="bg-cyan-20 w-full space-y-4 text-sm"
        >
          <div className="flex justify-between">
            <h3 className="w-40 uppercase lg:hidden">{name}</h3>
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
                disabled={size.quantity === 0}
                data-quantity={size.quantity}
              >
                {size.label}{' '}
                {size.quantity === 0
                  ? '- Sold Out'
                  : size.quantity
                    ? `Only ${size.quantity} remaining`
                    : ''}
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

            <WishlistAction product={product} mode="primary" />
          </div>

          <p>{model}</p>
        </form>
      </article>

      {showSuccessModal && (
        <Modal close={() => setShowSuccessModal(false)}>
          <h3>ITEM ADDED TO BAG</h3>
          <p>
            Item successfully added! Continue shopping or review selections by
            clicking proceed to bag.
          </p>
          <button
            onClick={() => navigate('/cart')}
            className="bg-black px-5 py-3 text-xs text-white"
          >
            PROCEED TO BAG
          </button>
        </Modal>
      )}
    </>
  );
}

export default ProductActions;
