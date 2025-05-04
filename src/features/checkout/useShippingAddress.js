import { useQuery } from '@tanstack/react-query';
import { useUser } from '../auth/useUser';
import { getShippingAddresses } from '../../services/apiShippingAddresses';

export function useShippingAddress() {
  const { user } = useUser();
  const userId = user?.id ?? null;

  const { isLoading, data, error } = useQuery({
    queryKey: ['shippingAddress', userId],
    queryFn: () => getShippingAddresses({ userId }),
    enabled: !!userId,
  });

  return { isLoading, data, error };
}
