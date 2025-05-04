import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from '../auth/useUser';
import { addShippingAddresses } from '../../services/apiShippingAddresses';

export function useUpdateShippingAddress() {
  const {
    user: { id: userId },
  } = useUser();
  const queryClient = useQueryClient();

  const {
    isPending,
    mutate: updateShippingAddress,
    error,
  } = useMutation({
    mutationFn: addShippingAddresses,
    onSuccess: updatedAddress => {
      // console.log(updatedAddress);
      queryClient.setQueryData(['shippingAddress', userId], updatedAddress);
    },
  });

  return { isPending, updateShippingAddress, error };
}
