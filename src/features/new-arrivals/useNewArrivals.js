import { useQuery } from '@tanstack/react-query';
import { getNewArrivalProducts } from '../../services/apiProducts';

export function useNewArrivals({ category }) {
  const { isLoading, data, error } = useQuery({
    queryKey: [`${category}NewArrivals`],
    queryFn: () => getNewArrivalProducts({ category }),
  });

  return { isLoading, data, error };
}
