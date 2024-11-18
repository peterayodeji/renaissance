import { useNavigate } from 'react-router-dom';
import HeadingPrimary from '../../ui/HeadingPrimary';
import CartTable from './CartTable';

function Cart() {
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-20 grow px-2 pb-12 pt-10 sm:px-4 md:px-8">
      <HeadingPrimary>Shopping bag</HeadingPrimary>

      <div className="bg-orange-30 grid grid-cols-1 items-end justify-between gap-y-8 md:grid-cols-[320px_250px] md:gap-y-0 lg:grid-cols-1">
        <CartTable />

        {/* CART SUMMARY */}
        <div className="bg-amber-30 bottom-10 md:sticky lg:static lg:w-[30%] lg:place-self-end">
          <div className="space-y-4">
            <h5 className="lg:hidden">CART SUMMARY</h5>

            <div>
              <CartSummaryItem>
                <p>Original price</p>

                <CartSummaryValue>
                  <span>$</span>
                  <span>149.97</span>
                </CartSummaryValue>
              </CartSummaryItem>

              <CartSummaryItem>
                <p>Promotion</p>

                <CartSummaryValue>
                  <span>-$</span>
                  <span>37.47</span>
                </CartSummaryValue>
              </CartSummaryItem>

              <CartSummaryItem>
                <p>Delivery fee</p>

                <CartSummaryValue>
                  <span>&nbsp;</span>
                  <span>Free</span>
                </CartSummaryValue>
              </CartSummaryItem>
            </div>

            <CartSummaryItem>
              <p>TOTAL</p>
              <CartSummaryValue>
                <span>$</span>
                <span>112.50</span>
              </CartSummaryValue>
            </CartSummaryItem>
          </div>

          {/* CART SUMMARY BUTTONS */}
          <div className="my-8 space-y-4">
            <button
              onClick={() => navigate('/checkout-r')}
              className="block w-full bg-black py-2 uppercase text-white"
            >
              Continue to Checkout
            </button>

            <button
              onClick={() => navigate('/account/sign-in')}
              className="block w-full border border-black py-2 uppercase"
            >
              Sign In
            </button>
          </div>

          <p className="text-sm">
            Final prices and shipping costs are confirmed at checkout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;

function CartSummaryItem({ children }) {
  return <div className="flex justify-between">{children}</div>;
}

function CartSummaryValue({ children }) {
  return (
    <div className="uppercase [&>*:nth-child(2)]:font-semibold">{children}</div>
  );
}
