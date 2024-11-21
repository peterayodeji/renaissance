import { useQuery } from '@tanstack/react-query';
import { isProductInWishlist } from '../../services/apiWishlist';

export function useProductInWishlist() {
  const productId = 3;
  const userId = '3ee5df82-9163-4e6a-923b-e8ee99b23933';

  // console.log({ productId, userId });

  const { isLoading, data, error } = useQuery({
    queryKey: ['isProductInWishlist', userId, productId],
    queryFn: () => isProductInWishlist({ userId, productId }),
    enabled: !!userId && !!productId,
  });

  // console.log(data);
  return { isLoading, data, error };
}
