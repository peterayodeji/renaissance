import { useQuery } from '@tanstack/react-query';
import { useProductsParams } from './useProductsParams';
import { getProducts } from '../../services/apiProducts';

export function useProducts() {
  const { category, subCategory, tags } = useProductsParams();

  // * QUERY
  const { isLoading, data, error } = useQuery({
    queryKey: ['products', category, subCategory, tags],
    queryFn: () => getProducts({ category, subCategory, tags }),
  });

  return { isLoading, data, error };
}
