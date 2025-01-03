import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addToWishlist } from '../../services/apiWishlist';

export function useAddToWishlist() {
  const queryClient = useQueryClient();

  const {
    isPending: isAdding,
    mutate: addProduct,
    error,
  } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: (_, { userId, productId }) => {
      // Invalidate the user wishlist queries to refresh data
      queryClient.invalidateQueries(['userWishlist', userId]);
      queryClient.invalidateQueries(['isProductInWishlist', userId, productId]);
    },
  });

  return { isAdding, addProduct, error };
}
