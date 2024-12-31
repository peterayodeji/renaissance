import {
  useQuery,
  useQueryClient,
  keepPreviousData,
} from '@tanstack/react-query';
import { useProductsParams } from './useProductsParams';
import { getProducts } from '../../services/apiProducts';
import { PAGE_SIZE } from '../../utils/constants';

export function useProducts() {
  const queryClient = useQueryClient();
  const { category, subcategory, tags, sort, page } = useProductsParams();

  // * QUERY
  const {
    isFetching,
    data: { data: products, count } = {},
    error,
  } = useQuery({
    queryKey: ['products', category, subcategory, tags, sort, page],
    queryFn: () => getProducts({ category, subcategory, tags, sort, page }),
    placeholderData: keepPreviousData,
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

  return { isFetching, products, pageCount, error };
}
