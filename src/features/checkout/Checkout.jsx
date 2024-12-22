import { Navigate } from 'react-router-dom';
import { usePageAccess } from '../../hooks/usePageAccess';

function Checkout() {
  const { accessible } = usePageAccess();

  if (!accessible) return <Navigate to="/cart" />;

  return <div>Checkout</div>;
}

export default Checkout;
