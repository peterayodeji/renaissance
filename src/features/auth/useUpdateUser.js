import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateCurrentUser } from '../../services/apiAuth';

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(['user'], user);
      // queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    // onError: err => console.error(err.message),
  });

  return { updateUser, isUpdating };
}
