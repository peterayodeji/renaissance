import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useProductsParams } from './useProductsParams';
import { getProducts } from '../../services/apiProducts';
import { PAGE_SIZE } from '../../utils/constants';

export function useProducts() {
  const queryClient = useQueryClient();
  const { category, subcategory, tags, sort, page } = useProductsParams();

  // * QUERY
  const {
    isLoading,
    data: { data: products, count } = {},
    error,
  } = useQuery({
    queryKey: ['products', category, subcategory, tags, sort, page],
    queryFn: () => getProducts({ category, subcategory, tags, sort, page }),
  });

  // * PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['products', category, subcategory, tags, sort, page + 1],
      queryFn: () =>
        getProducts({ category, subcategory, tags, sort, page: page + 1 }),
    });

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['products', category, subcategory, tags, sort, page - 1],
      queryFn: () =>
        getProducts({ category, subcategory, tags, sort, page: page - 1 }),
    });

  return { isLoading, products, pageCount, error };
}
