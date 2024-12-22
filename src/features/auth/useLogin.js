import { useMutation, useQueryClient } from '@tanstack/react-query';
// import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const {
    mutate: login,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: user => {
      console.log(user);
      queryClient.setQueryData(['user'], user.user);
      // navigate('/dashboard', { replace: true });
    },
  });

  return { login, isLoading, error };
}
