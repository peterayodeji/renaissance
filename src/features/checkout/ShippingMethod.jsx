import CheckBox from '../../ui/CheckBox';

function ShippingMethod() {
  return (
    <div className="space-y-4">
      <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
        SHIPPING METHOD
      </h4>

      <p>
        You are eligible for free shipping for a limited time on full-price
        merchandise totaling over $500 USD.
      </p>

      <CheckBox value={true} name="shipping">
        <p className="bg-purple-30 -mt-[2px]">
          $0.00 USD | Express <br /> Delivered by Wednesday, February 5 -
          Friday, February 7
        </p>
      </CheckBox>
    </div>
  );
}

export default ShippingMethod;
