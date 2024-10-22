import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { getProductsSearch } from '../../services/apiProducts';
import {
  collectUniqueTags,
  isValidRes,
  removeDuplicates,
} from '../../utils/helpers';

export function useSearch({
  debouncedQuery: searchValue,
  category,
  isValidInput,
}) {
  // * QUERY
  const { data: { subcategory, name, tags } = {}, error } = useQuery({
    queryKey: ['productsSearch', searchValue, category],
    queryFn: () => getProductsSearch({ searchValue, category }),
    placeholderData: keepPreviousData,
    enabled: isValidInput,
    // enabled: !!searchValue,
  });

  const subcategoryMatches = removeDuplicates(subcategory, 'subcategory');
  const nameMatches = removeDuplicates(name, 'name');
  const tagsMatches = collectUniqueTags(tags, searchValue);
  const isValid = isValidRes([subcategoryMatches, nameMatches, tagsMatches]);

  return {
    subcategoryMatches,
    nameMatches,
    tagsMatches,
    isValid,
    error,
  };
}
