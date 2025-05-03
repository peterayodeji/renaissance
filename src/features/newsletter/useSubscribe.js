import { useMutation, useQueryClient } from '@tanstack/react-query';
import { subscribe } from '../../services/apiNewsletter';

export function useSubscribe(email) {
  const queryClient = useQueryClient();

  const {
    isPending: isPendingSubscribe,
    mutate: subscribeNewsletter,
    error: errorSubscribe,
  } = useMutation({
    mutationFn: subscribe,
    onSuccess: updatedPreference => {
      queryClient.setQueryData(['newsletter', email], updatedPreference);
      // queryClient.invalidateQueries({ queryKey: ['newsletter', email] });
    },
  });

  return { isPendingSubscribe, subscribeNewsletter, errorSubscribe };
}
