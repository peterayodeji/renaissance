import CartItem from './CartItem';

const productSample = {
  id: 'K783654MOV-TEST',
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
    { label: 'L-XL = L', value: 'L', quantity: 0 },
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

function CartTableBody() {
  return (
    <div className="divide-y border-y">
      <CartItem product={productSample} />

      {/* <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem /> */}
    </div>
  );
}

export default CartTableBody;
