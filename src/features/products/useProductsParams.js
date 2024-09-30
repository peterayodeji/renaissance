import { useSearchParams } from 'react-router-dom';

export function useProductsParams() {
  const [searchParams] = useSearchParams();

  // LATER Decode URL to be plain string - make hook
  // * FILTER
  const category = searchParams.get('category');
  const subCategory = searchParams.get('subcategory');
  const tags = searchParams.get('tags');

  // * SORT

  // * PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  return { category, subCategory, tags, page };
}
