import { Link } from 'react-router-dom';

function AccountOrders() {
  return (
    <div className="bg-yellow-30 text-center">
      <h2 className="mb-20 text-center text-3xl font-semibold">
        Order History
      </h2>

      <div className="mb-6 flex flex-col items-center space-y-4">
        <img src="/exclamation.svg" alt="Exclamation!" className="w-14" />

        <p className="text-center text-base font-semibold">
          You don&#39;t currently have any orders
        </p>

        <p className="text-center">
          Once you have checked out, you can view and <br /> track your order
          here
        </p>
      </div>

      <Link to="/products" className="underline decoration-[0.99px]">
        Shop Products
      </Link>
    </div>
  );
}

export default AccountOrders;
