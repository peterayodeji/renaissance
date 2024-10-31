import { useProductsParams } from './useProductsParams';
import HeadingPrimary from '../../ui/HeadingPrimary';

function ProductsTitle() {
  const { category, subcategory } = useProductsParams();

  let title = 'Shop Products';

  if (category) {
    title = `Shop ${category}'s `;
  }

  if (category && subcategory) {
    title = subcategory;
  }

  return <HeadingPrimary>{title}</HeadingPrimary>;
}

export default ProductsTitle;
