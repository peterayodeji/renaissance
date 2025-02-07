import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { usePageAccess } from '../../hooks/usePageAccess';
// import { useSelector } from 'react-redux';
// import { getTotalCartPrice } from '../cart/cartSlice';
// import { calcPay } from '../../utils/helpers';

import HeadingPrimary from '../../ui/HeadingPrimary';
import FormRow from '../../ui/FormRow';
import CheckBox from '../../ui/CheckBox';
import RadioButton from '../../ui/RadioButton';
import CartTableBody from '../cart/CartTableBody';
import CartSummary from '../cart/CartSummary';

const PAYMENT_OPTIONS = [
  { label: 'Pay with credit or debit card', value: 'creditDebitCard' },
  { label: 'Pay with PayPal', value: 'payPal' },
  { label: 'Pay with AliPay', value: 'aliPay' },
];

function Checkout() {
  const { accessible } = usePageAccess();
  const [selectedOption, setSelectedOption] = useState('creditDebitCard');
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const shippingCost = 10;
  // const totalCartPrice = useSelector(getTotalCartPrice);
  // const { totalPay } = calcPay({
  //   totalCartPrice,
  //   shippingCost,
  // });
  // console.log(totalPay);

  if (!accessible) return <Navigate to="/cart" />;

  function onSubmit(inp) {
    console.log(inp);
  }

  return (
    <div className="bg-slate-20 grow px-2 pb-14 pt-10 sm:px-4 md:px-8">
      <HeadingPrimary>CHECKOUT</HeadingPrimary>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-green-70 flex flex-col items-start gap-y-8 md:flex-row md:justify-between lg:gap-x-24"
      >
        <div className="bg-blue-40 w-full space-y-8 md:w-[320px] lg:w-[60%] xl:w-[70%]">
          <div className="space-y-4">
            <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
              SHIPPING ADDRESS
            </h4>

            <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row md:flex-col lg:flex-row">
              <FormRow label="First Name" error={errors?.firstName?.message}>
                <input
                  type="text"
                  id="firstName"
                  {...register('firstName', {
                    required: 'This field is required',
                  })}
                  className="input"
                />
              </FormRow>

              <FormRow label="Last Name" error={errors?.lastName?.message}>
                <input
                  type="text"
                  id="lastName"
                  {...register('lastName', {
                    required: 'This field is required',
                  })}
                  className="input"
                />
              </FormRow>
            </div>

            <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row md:flex-col lg:flex-row">
              <FormRow
                label="Street Address"
                error={errors?.streetAddress?.message}
              >
                <input
                  type="text"
                  id="streetAddress"
                  {...register('streetAddress', {
                    required: 'This field is required',
                  })}
                  className="input"
                />
              </FormRow>

              <FormRow
                label="Company (Optional)"
                error={errors?.company?.message}
              >
                <input
                  type="text"
                  id="company"
                  {...register('company', {
                    required: 'This field is required',
                  })}
                  className="input"
                />
              </FormRow>
            </div>

            <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row md:flex-col lg:flex-row">
              <FormRow label="City" error={errors?.city?.message}>
                <input
                  type="text"
                  id="city"
                  {...register('city', {
                    required: 'This field is required',
                  })}
                  className="input"
                />
              </FormRow>

              <FormRow label="ZIP Or Postal Code" error={errors?.zip?.message}>
                <input
                  type="text"
                  id="zip"
                  {...register('zip', {
                    required: 'This field is required',
                  })}
                  className="input w-44"
                />
              </FormRow>
            </div>

            <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row md:flex-col lg:flex-row">
              <FormRow label="Country/Region" error={errors?.country?.message}>
                <input
                  type="text"
                  id="country"
                  {...register('country', {
                    required: 'This field is required',
                  })}
                  className="input"
                />
              </FormRow>

              <FormRow label="State/Province" error={errors?.state?.message}>
                <input
                  type="text"
                  id="state"
                  {...register('state', {
                    required: 'This field is required',
                  })}
                  className="input w-44"
                />
              </FormRow>
            </div>

            <FormRow label="Phone" error={errors?.zip?.message}>
              <input
                type="text"
                id="phone"
                {...register('phone', {
                  required: 'This field is required',
                })}
                className="input w-44"
              />
            </FormRow>
          </div>

          <div className="space-y-4">
            <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
              SHIPPING METHOD
            </h4>

            <p>
              You are eligible for free shipping for a limited time on
              full-price merchandise totaling over $500 USD.
            </p>

            <CheckBox value={true} name="shipping">
              <p className="bg-purple-30 -mt-[2px]">
                $0.00 USD | Express <br /> Delivered by Wednesday, February 5 -
                Friday, February 7
              </p>
            </CheckBox>
          </div>

          <div className="space-y-4">
            <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
              PAYMENT METHOD
            </h4>

            <div className="bg-green-30 flex flex-col items-start gap-y-2">
              <RadioButton
                options={PAYMENT_OPTIONS}
                selectedOption={selectedOption}
                onSelectOption={setSelectedOption}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
              SECURE PAYMENT
            </h4>

            <p>
              To protect your security and privacy, RENAISSANCE encrypts all
              personal payment information.
            </p>

            <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row md:flex-col lg:flex-row">
              <FormRow label="Card number" error={errors?.cardNumber?.message}>
                <input
                  type="text"
                  id="cardNumber"
                  {...register('cardNumber', {
                    required: 'This field is required',
                  })}
                  className="input"
                />
              </FormRow>

              <FormRow
                label="Expiration date"
                error={errors?.expirationDate?.message}
              >
                <input
                  type="text"
                  id="expirationDate"
                  {...register('expirationDate', {
                    required: 'This field is required',
                  })}
                  className="input w-44"
                />
              </FormRow>
            </div>

            <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row md:flex-col lg:flex-row">
              <FormRow
                label="Cardholder's name"
                error={errors?.cardholdersName?.message}
              >
                <input
                  type="text"
                  id="cardholdersName"
                  {...register('cardholdersName', {
                    required: 'This field is required',
                  })}
                  className="input"
                />
              </FormRow>

              <FormRow
                label="Security code"
                error={errors?.securityCode?.message}
              >
                <input
                  type="text"
                  id="securityCode"
                  {...register('securityCode', {
                    required: 'This field is required',
                  })}
                  className="input w-44"
                />
              </FormRow>
            </div>
          </div>
        </div>

        <div className="bg-yellow-20 sticky top-20 w-full md:w-[320px] lg:top-24 2xl:top-28 2xl:w-2/5">
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
