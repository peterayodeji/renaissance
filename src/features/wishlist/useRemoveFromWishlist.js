import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeFromWishlist } from '../../services/apiWishlist';

export function useRemoveFromWishlist() {
  const queryClient = useQueryClient();

  const {
    isPending: isRemoving,
    mutate: removeProduct,
    error,
  } = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: (_, { userId, productId }) => {
      // Invalidate the user wishlist queries to refresh data
      queryClient.invalidateQueries(['userWishlist', userId]);
      queryClient.invalidateQueries(['isProductInWishlist', userId, productId]);
    },
  });

  return { isRemoving, removeProduct, error };
}
