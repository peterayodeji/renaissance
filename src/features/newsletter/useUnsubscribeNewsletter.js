import { useMutation } from '@tanstack/react-query';
import { unSubscribe } from '../../services/apiNewsletter';

export function useUnSubscribeNewsletter(email) {
  const {
    isPending: isPendingUnSubscribe,
    mutate: unSubscribeNewsletter,
    error: errorUnSubscribe,
  } = useMutation({
    mutationFn: () => unSubscribe({ email }),
  });

  return { isPendingUnSubscribe, unSubscribeNewsletter, errorUnSubscribe };
}
