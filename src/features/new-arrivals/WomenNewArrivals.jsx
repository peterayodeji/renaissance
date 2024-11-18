import NewArrivals from './NewArrivals';
import NewArrivalsList from './NewArrivalsList';

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

function WomenNewArrivals() {
  // Load up items from backend when component mounts

  return (
    <NewArrivals>
      {/* Later: Potential component (Heading) */}
      <h2 className="mb-10 text-center text-xl tracking-wide md:mb-12 md:text-2xl lg:text-3xl">
        NEW ARRIVALS
      </h2>

      {/* <p className="text-center">Loading...</p> */}
      <NewArrivalsList newArrivalsItems={ITEMS} />
    </NewArrivals>
  );
}

export default WomenNewArrivals;
