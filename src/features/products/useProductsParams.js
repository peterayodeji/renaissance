import { useSearchParams } from 'react-router-dom';

export function useProductsParams() {
  const [searchParams] = useSearchParams();

  // * FILTER
  const categoryParam = searchParams.get('category');
  const category =
    !categoryParam || categoryParam === 'all'
      ? null
      : decodeURIComponent(searchParams.get('category'));

  const subCategoryParam = searchParams.get('subcategory');
  const subCategory =
    !subCategoryParam || subCategoryParam === 'all'
      ? null
      : decodeURIComponent(searchParams.get('subcategory'));

  const tagsParam = searchParams.get('tags');
  const tags =
    !tagsParam || tagsParam === 'all'
      ? null
      : decodeURIComponent(searchParams.get('tags'));

  // * SORT

  // * PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  return { category, subCategory, tags, page };
}
