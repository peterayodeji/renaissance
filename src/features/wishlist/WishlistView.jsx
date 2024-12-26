import { useUser } from '../auth/useUser';
import { useAnonWishlist } from './useAnonWishlist';
import { useUserWishlist } from './useUserWishlist';

import WishlistFeed from './WishlistFeed';
import WishlistInfo from './WishlistInfo';
import StatusFeedbackWrapper from '../../ui/StatusFeedbackWrapper';

function WishlistView() {
  const { isAuthenticated } = useUser();
  const anonWishlist = useAnonWishlist();
  const { isLoading, userWishlist, error } = useUserWishlist();

  const wishlistData = isAuthenticated ? userWishlist : anonWishlist;
  const { wishlist, count, pageCount } = wishlistData;

  if (isLoading)
    return (
      <StatusFeedbackWrapper>
        <p>LOADING...</p>
      </StatusFeedbackWrapper>
    );

  if (error)
    return (
      <StatusFeedbackWrapper>
        <p>{error.message}</p>
      </StatusFeedbackWrapper>
    );

  return (
    <>
      <WishlistFeed wishlist={wishlist} count={count} pageCount={pageCount} />
      <WishlistInfo count={count} isAuthenticated={isAuthenticated} />
    </>
  );
}

export default WishlistView;
