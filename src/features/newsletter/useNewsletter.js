import { useQuery } from '@tanstack/react-query';
import { getNewsletterPreferences } from '../../services/apiNewsletter';

export function useNewsletter({ email }) {
  const { isLoading, data, error } = useQuery({
    queryKey: ['newsletter', email],
    queryFn: () => getNewsletterPreferences({ email }),
  });

  return { isLoading, data, error };
}
