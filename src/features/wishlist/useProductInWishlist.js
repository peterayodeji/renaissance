import { useQuery } from '@tanstack/react-query';
import { isProductInWishlist } from '../../services/apiWishlist';

export function useProductInWishlist({ userId, productId }) {
  const {
    isLoading,
    data: isInUserWishlist,
    error,
  } = useQuery({
    queryKey: ['isProductInWishlist', userId, productId],
    queryFn: () => isProductInWishlist({ userId, productId }),
    enabled: !!userId && !!productId,
  });

  return { isLoading, isInUserWishlist, error };
}
