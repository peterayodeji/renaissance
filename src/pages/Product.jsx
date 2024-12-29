import ProductMain from '../features/products/ProductMain';
import ProductSuggestion from '../features/products/ProductSuggestion';
import ProductRecentView from '../features/products/ProductRecentView';

// import { useProduct } from '../features/products/useProduct';

const productSample = {
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
  // const { isLoading, product, similarProducts, error } = useProduct();

  // console.log({ isLoading, error });
  // console.log({ product, similarProducts });

  return (
    <>
      <ProductView>
        {/* {isLoading && <p>LOADING...</p>}
        {error && <p>{error.message}</p>} */}

        <ProductMain product={productSample} />
        <ProductSuggestion />

        {/* {product && <ProductMain product={product} />} */}
        {/* {similarProducts && (
          <ProductSuggestion similarProducts={similarProducts} />
        )} */}
      </ProductView>

      <ProductRecentView />
    </>
  );
}

export default Product;

function ProductView({ children }) {
  return (
    <div className="bg-whit bg-purple-40 min-h-[calc(100vh-3.5rem)] lg:min-h-[calc(100vh-4rem)] 2xl:min-h-[calc(100vh-5rem)]">
      {children}
    </div>
  );
}
