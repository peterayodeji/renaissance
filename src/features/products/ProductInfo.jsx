import ProductColor from './ProductColor';

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

function ProductInfo({ product }) {
  const { id, name } = product;
  const { description, features, color, colorOptions, composition } =
    placeHolder;

  return (
    <article className="bg-blue-40 flex items-center lg:sticky lg:bottom-0 lg:h-[calc(100vh-4rem)] lg:pl-8 xl:px-10 2xl:h-[calc(100vh-5rem)] 2xl:px-12">
      <div className="bg-cyan-40 w-full space-y-4 text-sm">
        <h3 className="font-mediu hidden uppercase lg:block">{name}</h3>

        <h3 className="lg:hidden">ITEM INFO</h3>

        <p>{description}</p>

        <ul>
          {features.map(feature => (
            <li key={feature}>· {feature}</li>
          ))}
        </ul>

        <div className="bg-amber-30">
          <p className="mb-2">{composition}</p>
        </div>

        <ProductColor
          productId={id}
          productColor={color}
          colorOptions={colorOptions}
        />
      </div>
    </article>
  );
}

export default ProductInfo;
