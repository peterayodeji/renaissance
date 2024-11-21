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
    // onSuccess: (_, { userId }) => {
    onSettled: (a, b, c) => {
      console.log({ a, b, c });
      // Invalidate the user wishlist query to refresh data
      // queryClient.invalidateQueries(['userWishlist', userId]);
    },
  });

  // Ensure these three for mutation
  return { isAdding, addProduct, error };
}
