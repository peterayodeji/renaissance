import { useQuery } from '@tanstack/react-query';
import { getProductsSearch } from '../../services/apiProducts';
import { removeDuplicates } from '../../utils/helpers';

export function useSearch({ debouncedQuery: searchValue, category }) {
  // * QUERY
  const {
    isLoading,
    data: { subcategory, name } = {},
    error,
  } = useQuery({
    queryKey: ['productsSearch', searchValue, category],
    queryFn: () => getProductsSearch({ searchValue, category }),
    enabled: searchValue?.length >= 2,
  });

  // console.log({ subcategory });
  // console.log({ name });

  const subcategoryMatches = removeDuplicates(subcategory, 'subcategory');
  const nameMatches = removeDuplicates(name, 'name');

  return { isLoading, subcategoryMatches, nameMatches, error };
}
