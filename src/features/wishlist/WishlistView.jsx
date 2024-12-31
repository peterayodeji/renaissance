import { useUser } from '../auth/useUser';
import { useAnonWishlist } from './useAnonWishlist';
import { useUserWishlist } from './useUserWishlist';

import WishlistFeed from './WishlistFeed';
import WishlistInfo from './WishlistInfo';
import StatusFeedbackWrapper from '../../ui/StatusFeedbackWrapper';
import Loader from '../../ui/Loader';

function WishlistView() {
  const { isAuthenticated } = useUser();
  const anonWishlist = useAnonWishlist();
  const { isFetching, userWishlist, error } = useUserWishlist();

  const wishlistData = isAuthenticated ? userWishlist : anonWishlist;
  const { wishlist, count, pageCount } = wishlistData;

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
      {isFetching && <Loader />}
    </>
  );
}

export default WishlistView;
