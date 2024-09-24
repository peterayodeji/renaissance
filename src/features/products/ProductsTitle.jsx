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
    <h2 className="mb-6 text-2xl font-semibold uppercase tracking-tight sm:text-3xl md:text-4xl lg:mb-8">
      {title}
    </h2>
  );
}

export default ProductsTitle;
