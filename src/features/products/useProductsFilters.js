import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useProductsParams } from './useProductsParams';
import { getProductsFilters } from '../../services/apiProducts';

export function useProductsFilters() {
  const { category, subcategory } = useProductsParams();

  // * QUERY
  const {
    isFetching,
    data: { data: filters } = {},
    error,
  } = useQuery({
    queryKey: ['productsFilters', category, subcategory],
    queryFn: () => getProductsFilters({ category, subcategory }),
    placeholderData: keepPreviousData,
  });

  return { isFetching, filters, error };
}
