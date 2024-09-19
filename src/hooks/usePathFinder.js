import { useLocation } from 'react-router-dom';

export function usePathFinder() {
  const { pathname } = useLocation();
  const path = pathname.slice(1) || 'women';

  return path;
}
