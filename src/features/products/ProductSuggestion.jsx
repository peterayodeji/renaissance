import { useScreenLessThan } from '../../hooks/useScreenLessThan';
import ProductDisplay from './ProductDisplay';

const similarProducts = [
  { id: 13, name: 'High-Heel Sandals', price: 69 },
  { id: 14, name: 'Skinny Jeans', price: 54.99 },
  { id: 15, name: 'Floral Blouse', price: 27 },
  { id: 16, name: 'Midi Skirt', price: 39 },
  { id: 17, name: 'Ankle Boots', price: 89.99 },
  { id: 18, name: 'Satin Dress', price: 74 },
  { id: 19, name: 'Cardigan Sweater', price: 50 },
  { id: 20, name: 'Puffer Jacket', price: 109.99 },
  { id: 21, name: 'Biker Leather Jacket', price: 129.99 },
  { id: 3, name: 'Slim Fit Jeans', price: 49.99 },
  { id: 4, name: 'Classic Oxford Shirt', price: 29.99 },
  { id: 22, name: 'Graphic Tee', price: 14.5 },
  { id: 23, name: 'Pleated Skirt', price: 32.99 },
  { id: 24, name: 'Boogie Boogie', price: 99.99 },
  { id: 6, name: 'Cargo Pants', price: 39 },
  { id: 7, name: 'Polo T-Shirt', price: 19 },
  { id: 8, name: 'Running Sneakers', price: 59.5 },
  { id: 9, name: 'Chinos', price: 44 },
  { id: 10, name: 'Denim Jackets', price: 89.99 },
  { id: 11, name: 'V-Neck Sweater', price: 34 },
  { id: 12, name: 'Striped Designer Shirt', price: 25.99 },
];

function ProductSuggestion() {
  const isMobile = useScreenLessThan(768);
  const suggestionProducts = similarProducts.slice(0, isMobile ? 10 : 12);

  return (
    <div className="bg-cyan-40 overflow-hidden py-8 text-sm lg:pb-16 lg:pt-0">
      <h3 className="mb-4 px-2 sm:px-4 md:px-8 xl:px-10 2xl:px-12">
        YOU MAY ALSO LIKE
      </h3>

      <ul className="remove-scrollbar bg-yellow-40 grid grid-cols-2 items-end gap-x-4 gap-y-10 overflow-x-scroll px-2 sm:grid-cols-3 sm:px-4 md:flex md:gap-x-6 md:px-8 xl:px-10 2xl:px-12 [&>*]:shrink-0">
        {suggestionProducts.map(product => (
          <ProductDisplay
            key={product.id}
            product={product}
            imgClasses="w-full md:w-48"
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductSuggestion;
