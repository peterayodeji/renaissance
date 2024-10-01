import { useSearchParams } from 'react-router-dom';

export function useProductsParams() {
  const [searchParams] = useSearchParams();

  // * FILTER
  const categoryParam = searchParams.get('category');
  const category =
    !categoryParam || categoryParam === 'all'
      ? null
      : decodeURIComponent(categoryParam);

  const subcategoryParam = searchParams.get('subcategory');
  const subcategory =
    !subcategoryParam || subcategoryParam === 'all'
      ? null
      : decodeURIComponent(subcategoryParam);

  const tagsParam = searchParams.get('tags');
  const tags =
    !tagsParam || tagsParam === 'all' ? null : decodeURIComponent(tagsParam);

  // * SORT
  const sortValue = searchParams.get('sort') || 'created_at-asc';
  const [field, direction] = sortValue.split('-');
  const sort = { field, direction };

  // * PAGINATION
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  return { category, subcategory, tags, sortValue, sort, page };
}
