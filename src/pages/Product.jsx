import ProductMain from '../features/products/ProductMain';
import ProductSuggestion from '../features/products/ProductSuggestion';
import ProductRecentView from '../features/products/ProductRecentView';

const productSample = {
  name: 'Multicolor Stuart Sweater',
  price: 660,
  description: 'Knit nylon - and alpaca-blend sweater.',
  features: [
    'Rib knit crewneck, hem, and cuffs',
    'Logo graphic printed at front',
    'Dropped shoulders',
    'Button fastening at rolled cuffs',
  ],
  color: 'Multi',
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

function Product() {
  return (
    <div className="bg-purple-40 grow bg-white">
      <ProductMain product={productSample} />
      <ProductSuggestion />
      <ProductRecentView />
    </div>
  );
}

export default Product;
