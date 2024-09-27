import { Link } from 'react-router-dom';
import { useProductsParams } from './useProductsParams';

function ProductsMap() {
  const { category, subCategory } = useProductsParams();

  if (!category && !subCategory) return null;

  return (
    <div className="py-8 uppercase tracking-tight">
      <Link to="/products" className="font-medium text-stone-500">
        SHOP
      </Link>

      {category && (
        <span>
          <Separator />
          {subCategory ? (
            <Link
              to={`/products?category=${category}`}
              className="font-medium text-stone-500"
            >
              {category}
            </Link>
          ) : (
            <span className="text-stone-900">{category}</span>
          )}
        </span>
      )}

      {subCategory && (
        <span>
          <Separator />
          <span className="text-stone-900">{subCategory}</span>
        </span>
      )}
    </div>
  );
}

export default ProductsMap;

function Separator() {
  return (
    <span className="mx-2 inline-block -translate-y-[1px] rotate-[8deg] transform text-stone-400">
      /
    </span>
  );
}
