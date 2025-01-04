import { Navigate } from 'react-router-dom';
import { usePageAccess } from '../../hooks/usePageAccess';

function Checkout() {
  const { accessible } = usePageAccess();

  if (!accessible) return <Navigate to="/cart" />;

  return (
    <div className="bg-blue-40 flex grow items-center justify-center">
      {/* COMP. POTENTIAL */}
      <div className="bg-green-40 mb-14 text-center md:mb-16 2xl:mb-20">
        <h3 className="mb-6 text-2xl font-semibold md:text-3xl">
          WORK IN PROGRESS!
        </h3>
        <p>
          The page you&#39;re looking for <br /> is currently under maintenance.
        </p>
      </div>
    </div>
  );
}

export default Checkout;
