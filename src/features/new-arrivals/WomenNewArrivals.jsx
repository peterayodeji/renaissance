import { useNewArrivals } from './useNewArrivals';

import NewArrivals from './NewArrivals';
import NewArrivalsList from './NewArrivalsList';

function WomenNewArrivals() {
  const { isLoading, data, error } = useNewArrivals({ category: 'women' });

  return (
    <NewArrivals>
      {/* Later: Potential component (Heading) */}
      <h2 className="mb-10 text-center text-xl tracking-wide md:mb-12 md:text-2xl lg:text-3xl">
        NEW ARRIVALS
      </h2>

      {!isLoading && !error ? (
        <NewArrivalsList newArrivalsItems={data} />
      ) : null}
    </NewArrivals>
  );
}

export default WomenNewArrivals;
