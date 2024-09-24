import { useProductsParams } from './useProductsParams';

function ProductsTitle() {
  const { category, subCategory } = useProductsParams();

  let title = 'Shop Products';

  if (category) {
    title = `${category}'s products`;
  }

  if (category && subCategory) {
    title = `${category}'s ${subCategory}`;
  }

  return (
    <h2 className="bg-yellow-40 mb-6 text-4xl font-semibold uppercase tracking-tight">
      {title}
    </h2>
  );
}

export default ProductsTitle;
