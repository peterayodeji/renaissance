import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useProductsParams } from './useProductsParams';
import { getProducts } from '../../services/apiProducts';
import { PAGE_SIZE } from '../../utils/constants';

export function useProducts() {
  const queryClient = useQueryClient();
  const { category, subCategory, tags, page } = useProductsParams();

  // * QUERY
  const {
    isLoading,
    data: { data: products, count } = {},
    error,
  } = useQuery({
    queryKey: ['products', category, subCategory, tags, page],
    queryFn: () => getProducts({ category, subCategory, tags, page }),
  });

  // * PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['products', category, subCategory, tags, page + 1],
      queryFn: () =>
        getProducts({ category, subCategory, tags, page: page + 1 }),
    });

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['products', category, subCategory, tags, page - 1],
      queryFn: () =>
        getProducts({ category, subCategory, tags, page: page - 1 }),
    });

  return { isLoading, products, pageCount, error };
}
