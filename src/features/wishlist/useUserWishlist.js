import { useQuery } from '@tanstack/react-query';
import { fetchUserWishlist } from '../../services/apiWishlist';
// import { useUser } from '../auth/useUser';
// import { useProductsParams } from './useProductsParams';

export function useUserWishlist() {
  // const { user } = useUser();
  // const userId = user.id;

  const userId = '3ee5df82-9163-4e6a-923b-e8ee99b23933';

  // console.log(userId);

  const { isLoading, data, error } = useQuery({
    queryKey: ['userWishlist', userId],
    queryFn: () => fetchUserWishlist(userId),
    enabled: !!userId,
  });

  // console.log(data);
  return { isLoading, data, error };
}
