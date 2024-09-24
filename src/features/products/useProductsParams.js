import { useSearchParams } from 'react-router-dom';

export function useProductsParams() {
  const [searchParams] = useSearchParams();

  // LATER Decode URL to be plain string - make hook
  const category = searchParams.get('category');
  const subCategory = searchParams.get('subcategory');
  const tags = searchParams.get('tags');

  return { category, subCategory, tags };
}
