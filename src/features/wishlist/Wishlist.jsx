import HeadingPrimary from '../../ui/HeadingPrimary';
import WishlistFeed from './WishlistFeed';
import WishlistInfo from './WishlistInfo';

const ITEMS = [
  {
    id: '001',
    name: 'Vienne Men Sweater',
    price: '50',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
    color: {
      name: 'Black diamond',
      value: '#000',
    },
    colorOptions: [
      {
        name: 'Yellow summer',
        value: '#ff4',
        productId: '234',
      },
      {
        name: 'Green lemonade',
        value: '#379e3e',
        productId: '345',
      },
      {
        name: 'Sky blue',
        value: '#ac99ee',
        productId: '444',
      },
    ],
  },
  {
    id: '002',
    name: 'Denim Multi-color Sweater',
    price: '50',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
    color: {
      name: 'Black diamond',
      value: '#000',
    },
    colorOptions: [
      {
        name: 'Yellow summer',
        value: '#ff4',
        productId: '234',
      },
      {
        name: 'Green lemonade',
        value: '#379e3e',
        productId: '345',
      },
      {
        name: 'Sky blue',
        value: '#ac99ee',
        productId: '444',
      },
    ],
  },
  {
    id: '003',
    name: 'Black Belted Trench Coat',
    price: '50',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
    color: {
      name: 'Black diamond',
      value: '#000',
    },
    colorOptions: [
      {
        name: 'Yellow summer',
        value: '#ff4',
        productId: '234',
      },
      {
        name: 'Green lemonade',
        value: '#379e3e',
        productId: '345',
      },
      {
        name: 'Sky blue',
        value: '#ac99ee',
        productId: '444',
      },
    ],
  },
  {
    id: '004',
    name: 'Gray Brushed Turtleneck',
    price: '50',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
    color: {
      name: 'Black diamond',
      value: '#000',
    },
    colorOptions: [
      {
        name: 'Yellow summer',
        value: '#ff4',
        productId: '234',
      },
      {
        name: 'Green lemonade',
        value: '#379e3e',
        productId: '345',
      },
      {
        name: 'Sky blue',
        value: '#ac99ee',
        productId: '444',
      },
    ],
  },
  {
    id: '005',
    name: 'Straight Regular Jean',
    price: '50',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
    color: {
      name: 'Black diamond',
      value: '#000',
    },
    colorOptions: [
      {
        name: 'Yellow summer',
        value: '#ff4',
        productId: '234',
      },
      {
        name: 'Green lemonade',
        value: '#379e3e',
        productId: '345',
      },
      {
        name: 'Sky blue',
        value: '#ac99ee',
        productId: '444',
      },
    ],
  },
  {
    id: '006',
    name: 'Single-Breasted Wool Coat',
    price: '50',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
    color: {
      name: 'Black diamond',
      value: '#000',
    },
    colorOptions: [
      {
        name: 'Yellow summer',
        value: '#ff4',
        productId: '234',
      },
      {
        name: 'Green lemonade',
        value: '#379e3e',
        productId: '345',
      },
      {
        name: 'Sky blue',
        value: '#ac99ee',
        productId: '444',
      },
    ],
  },
  {
    id: '007',
    name: 'Vienne Multi-color Sweater',
    price: '50',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
    color: {
      name: 'Black diamond',
      value: '#000',
    },
    colorOptions: [
      {
        name: 'Yellow summer',
        value: '#ff4',
        productId: '234',
      },
      {
        name: 'Green lemonade',
        value: '#379e3e',
        productId: '345',
      },
      {
        name: 'Sky blue',
        value: '#ac99ee',
        productId: '444',
      },
    ],
  },
  {
    id: '008',
    name: 'Regular Fit',
    price: '50',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
    color: {
      name: 'Black diamond',
      value: '#000',
    },
    colorOptions: [
      {
        name: 'Yellow summer',
        value: '#ff4',
        productId: '234',
      },
      {
        name: 'Green lemonade',
        value: '#379e3e',
        productId: '345',
      },
      {
        name: 'Sky blue',
        value: '#ac99ee',
        productId: '444',
      },
    ],
  },
];

function Wishlist() {
  const wishlistItems = ITEMS;
  const isEmptyWishlist = false;

  return (
    <div className="bg-orange-20 grow px-2 py-10 sm:px-4 md:px-8">
      <HeadingPrimary>WISHLIST</HeadingPrimary>
      <WishlistFeed wishlistItems={wishlistItems} />
      <WishlistInfo isEmptyWishlist={isEmptyWishlist} />
    </div>
  );
}

export default Wishlist;
