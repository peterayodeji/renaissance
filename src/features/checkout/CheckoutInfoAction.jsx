import CartSummary from '../cart/CartSummary';
import CartTableBody from '../cart/CartTableBody';

function CheckoutInfoAction({ shippingCost }) {
  return (
    <>
      <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
        ORDER SUMMARY - (3) ITEMS
      </h4>

      <div className="bg-gray-30 mb-6 md:max-h-[400px] md:overflow-y-auto">
        <CartTableBody biteSize={true} />
      </div>

      <CartSummary shippingCost={shippingCost}>
        <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
          FINAL PRICES
        </h4>
      </CartSummary>

      <p className="bg-red-20 my-8">
        Important Notice <br />
        Our prices do not include Duty and VAT. Please consult your
        country/region’s customs legislation for more information about
        potential additional charges.
      </p>
    </>
  );
}

export default CheckoutInfoAction;
