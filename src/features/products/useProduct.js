import { useQuery } from '@tanstack/react-query';
import { getProductById } from '../../services/apiProducts';
import { useParams } from 'react-router-dom';

export function useProduct() {
  const { productId } = useParams();

  // * QUERY
  const {
    isLoading,
    data: { product, similarProducts } = {},
    // data,
    error,
  } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById({ productId }),
  });

  return { isLoading, product, similarProducts, error };
}
