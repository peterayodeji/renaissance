import { useQuery } from '@tanstack/react-query';
import { useProductsParams } from './useProductsParams';
import { getProductsFilters } from '../../services/apiProducts';

export function useProductsFilters() {
  const { category, subcategory } = useProductsParams();

  // * QUERY
  const {
    isLoading,
    data: { data: filters } = {},
    error,
  } = useQuery({
    queryKey: ['productsFilters', category, subcategory],
    queryFn: () => getProductsFilters({ category, subcategory }),
  });

  return { isLoading, filters, error };
}
