import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { usePageAccess } from '../../hooks/usePageAccess';
// import { useSelector } from 'react-redux';
// import { getTotalCartPrice } from '../cart/cartSlice';
// import { calcPay } from '../../utils/helpers';

import HeadingPrimary from '../../ui/HeadingPrimary';
import ShippingMethod from './ShippingMethod';
import Payment from '../payment/Payment';
import ShippingAddress from './ShippingAddress';
import CheckoutInfoAction from './CheckoutInfoAction';

function Checkout() {
  const { accessible } = usePageAccess();
  const [selectedOption, setSelectedOption] = useState('creditDebitCard');

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur', // Runs validation when user loses focus
  });

  const shippingCost = 10;
  // const totalCartPrice = useSelector(getTotalCartPrice);
  // const { totalPay } = calcPay({
  //   totalCartPrice,
  //   shippingCost,
  // });
  // console.log(totalPay);

  if (!accessible) return <Navigate to="/cart" />;

  function onSubmit(inp) {
    console.log({ inp, selectedOption });
  }

  return (
    <div className="bg-slate-20 grow px-2 pb-14 pt-10 sm:px-4 md:px-8">
      <HeadingPrimary>CHECKOUT</HeadingPrimary>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-green-70 flex flex-col items-start gap-y-8 md:flex-row md:justify-between lg:gap-x-24"
      >
        <div className="bg-blue-10 w-full space-y-8 md:w-[320px] lg:w-[55%] xl:w-[60%]">
          <ShippingAddress register={register} errors={errors} />
          <ShippingMethod />
          <Payment
            register={register}
            errors={errors}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>

        <div className="bg-yellow-20 sticky top-20 w-full md:w-[320px] lg:top-24 2xl:top-28">
          <CheckoutInfoAction shippingCost={shippingCost} />

          <button
            type="submit"
            // disabled={isLoading}
            className="w-full bg-black py-4 font-medium tracking-wider text-white disabled:opacity-5"
          >
            <span className="undeline">Place Order</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
