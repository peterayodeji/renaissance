import { useLocation } from 'react-router-dom';

export function usePageAccess() {
  const { state } = useLocation();
  const accessible = state?.accessible;

  // console.log(accessible);

  return { accessible };
}
