import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeFromWishlist } from '../../services/apiWishlist';

export function useRemoveFromWishlist() {
  const queryClient = useQueryClient();
  // const productId = 3;

  const {
    isPending,
    mutate: removeProduct,
    error,
  } = useMutation({
    mutationFn: removeFromWishlist,
    // onSuccess: (_, { userId }) => {
    onSettled: (a, b, c) => {
      console.log({ a, b, c });

      // Invalidate the user wishlist query to refresh data
      // queryClient.invalidateQueries(['userWishlist', userId]);
      // queryClient.invalidateQueries(['isProductInWishlist', userId, productId]);
    },
  });

  // Ensure these three for mutation
  return { isPending, removeProduct, error };
}
