import { useSelector } from 'react-redux';
import { useUser } from '../auth/useUser';
import { getWishlist } from './wishlistSlice';
import { useProductsParams } from '../products/useProductsParams';
import { PAGE_SIZE } from '../../utils/constants';

export function useAnonWishlist() {
  const { isAuthenticated } = useUser();
  const { page } = useProductsParams();
  const anonWishlist = useSelector(getWishlist);

  if (isAuthenticated) return;

  const count = anonWishlist.length;
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE;
  const wishlist = anonWishlist.slice(from, to);
  const pageCount = Math.ceil(count / PAGE_SIZE);

  return { wishlist, count, pageCount };
}
