import { useProductsParams } from './useProductsParams';

function ProductsTitle() {
  const { category, subcategory } = useProductsParams();

  let title = 'Shop Products';

  if (category) {
    title = `Shop ${category}'s `;
  }

  if (category && subcategory) {
    title = subcategory;
  }

  return (
    <h2 className="mb-12 text-2xl font-semibold uppercase tracking-tight sm:text-3xl md:text-4xl">
      {title}
    </h2>
  );
}

export default ProductsTitle;
