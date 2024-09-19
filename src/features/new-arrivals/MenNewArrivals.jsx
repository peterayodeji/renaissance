import NewArrivals from './NewArrivals';
import NewArrivalsList from './NewArrivalsList';

const ITEMS = [
  {
    id: '001',
    name: 'Vienne Men Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '002',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '003',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '004',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '005',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '006',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '007',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
  {
    id: '008',
    name: 'Vienne Multi-color Sweater',
    price: '$50.00',
    image: '/vivienne-westwood-multicolor-stuart-sweater.webp',
  },
];

function MenNewArrivals() {
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

export default MenNewArrivals;
