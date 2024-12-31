import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchUserWishlist } from '../../services/apiWishlist';
import { useUser } from '../auth/useUser';
import { useProductsParams } from '../products/useProductsParams';
import { PAGE_SIZE } from '../../utils/constants';

export function useUserWishlist() {
  const queryClient = useQueryClient();
  const { user } = useUser();
  const userId = user?.id;
  const { page } = useProductsParams();

  const {
    isFetching,
    data: { wishlist, count } = {},
    error,
  } = useQuery({
    queryKey: ['userWishlist', userId, page],
    queryFn: () => fetchUserWishlist({ userId, page }),
    enabled: !!userId,
  });

  // * PRE-FETCHING
  const pageCount = Math.ceil(count / PAGE_SIZE);
  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['userWishlist', userId, page + 1],
      queryFn: () =>
        fetchUserWishlist({
          userId,
          page: page + 1,
        }),
      enabled: !!userId,
    });

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ['userWishlist', userId, page - 1],
      queryFn: () =>
        fetchUserWishlist({
          userId,
          page: page - 1,
        }),
      enabled: !!userId,
    });

  const userWishlist = { wishlist, count, pageCount };
  return { isFetching, userWishlist, error };
}
