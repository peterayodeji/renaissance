import { useMutation } from '@tanstack/react-query';
import { subscribe } from '../../services/apiNewsletter';

export function useSubscribe() {
  const {
    isPending,
    mutate: subscribeNewsletter,
    error,
  } = useMutation({
    mutationFn: subscribe,
  });

  return { isPending, subscribeNewsletter, error };
}
