import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { countryOptions, getCountryData } from '../../utils/helpers';

import ShippingMethod from './ShippingMethod';
import Payment from '../payment/Payment';
import ShippingAddress from './ShippingAddress';
import CheckoutInfoAction from './CheckoutInfoAction';

// import { useSelector } from 'react-redux';
// import { getTotalCartPrice } from '../cart/cartSlice';
// import { calcPay } from '../../utils/helpers';

function CheckoutForm({ fetchedShippingData }) {
  const [selectedOption, setSelectedOption] = useState('creditDebitCard');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: fetchedShippingData
      ? { ...fetchedShippingData, country: fetchedShippingData.countryCode }
      : {},
  });

  const shippingCost = 10;
  // const totalCartPrice = useSelector(getTotalCartPrice);
  // const { totalPay } = calcPay({
  //   totalCartPrice,
  //   shippingCost,
  // });
  // console.log(totalPay);

  function onSubmit(inp) {
    const { country, countryCode } = getCountryData(
      inp.country,
      countryOptions,
    );

    console.log({ country, countryCode });
    console.log({ inp, selectedOption });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-green-70 flex flex-col items-start gap-y-8 md:flex-row md:justify-between lg:gap-x-24"
    >
      <div className="bg-blue-10 w-full space-y-8 md:w-[320px] lg:w-[55%] xl:w-[60%]">
        <ShippingAddress
          register={register}
          errors={errors}
          fetchedShippingData={fetchedShippingData}
        />
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
          className="w-full bg-black py-4 font-medium tracking-wider text-white disabled:cursor-not-allowed disabled:opacity-5"
        >
          <span className="undeline">Place Order</span>
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;
