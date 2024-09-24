import { useQuery } from '@tanstack/react-query';
import { useProductsParams } from './useProductsParams';
import { getProductsFilters } from '../../services/apiProducts';

export function useProductsFilters() {
  const { category, subCategory } = useProductsParams();

  // * QUERY
  const {
    isLoading,
    data: { data: filters } = {},
    error,
  } = useQuery({
    queryKey: ['productsFilters', category, subCategory],
    queryFn: () => getProductsFilters({ category, subCategory }),
  });

  return { isLoading, filters, error };
}
