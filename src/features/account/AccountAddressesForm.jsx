import { useState } from 'react';
import { useUser } from '../auth/useUser';
import { useForm } from 'react-hook-form';
import { useUpdateShippingAddress } from '../checkout/useUpdateShippingAddress';
import { useCountryRegion } from '../../hooks/useCountryRegion';
import {
  countryOptions,
  getCountryData,
  truncateText,
} from '../../utils/helpers';

import FormRow from '../../ui/FormRow';
import Modal from '../../ui/Modal';

function AccountAddressesForm({ data }) {
  const {
    user: { id: userId },
  } = useUser();

  const { register, formState, handleSubmit, reset } = useForm({
    defaultValues: data ? { ...data, country: data.countryCode } : {},
  });
  const { errors } = formState;

  const { stateOptions, selectedCountry, handleCountryChange, setValue } =
    useCountryRegion(data?.countryCode);
  const { isPending, updateShippingAddress } = useUpdateShippingAddress();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState('');

  function onSubmit(inp) {
    const { country, countryCode } = getCountryData(
      inp.country,
      countryOptions,
    );
    const address = { ...inp, userId, country, countryCode };

    updateShippingAddress(address, {
      onSuccess: updatedAddress => {
        setShowSuccessModal(true);
        reset({ ...updatedAddress, country: updatedAddress.countryCode });
        setValue('country', updatedAddress.countryCode, {
          shouldValidate: true,
        });
      },
      onError: err => {
        setError(err);
        reset({ ...data, country: data.countryCode });
        setValue('country', data.countryCode, { shouldValidate: true });
      },
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-yellow-30">
        <div className="space-y-4">
          <div className="flex flex-col gap-x-2 gap-y-4 lg:flex-row">
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

          <div className="flex flex-col gap-x-2 gap-y-4 lg:flex-row">
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
                {...register('company')}
                className="input"
              />
            </FormRow>
          </div>

          <div className="flex flex-col gap-x-2 gap-y-4 lg:flex-row">
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
                className="input w-44 lg:w-40"
              />
            </FormRow>
          </div>

          <div className="flex flex-col gap-x-2 gap-y-4 lg:flex-row">
            <FormRow label="Country/Region" error={errors?.country?.message}>
              <select
                id="country"
                {...register('country', { required: 'Country is required' })}
                value={selectedCountry}
                onChange={handleCountryChange}
                className="input"
              >
                <option value="">Select Country</option>
                {countryOptions.map(({ countryCode, country }) => (
                  <option key={countryCode} value={countryCode}>
                    {truncateText(country, 30)}
                  </option>
                ))}
              </select>
            </FormRow>

            <FormRow label="State/Province" error={errors?.state?.message}>
              <select
                id="state"
                {...register('state', { required: 'State is required' })}
                disabled={!selectedCountry}
                className="input disabled:cursor-not-allowed"
              >
                <option value="">Select State</option>
                {stateOptions.map(([state, stateCode]) => (
                  <option key={stateCode} value={state}>
                    {truncateText(state, 30)}
                  </option>
                ))}
              </select>
            </FormRow>
          </div>

          <FormRow label="Phone" error={errors?.zip?.message}>
            <input
              // inputMode="numeric"
              // pattern="[0-9 ]*"
              // onKeyDown={preventNonNumeric}
              type="text"
              id="phone"
              {...register('phone', {
                required: 'This field is required',
              })}
              className="input w-44 lg:w-40"
            />
          </FormRow>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="mt-8 w-full bg-black py-4 font-medium tracking-wider text-white disabled:cursor-not-allowed disabled:opacity-5"
        >
          <span className="undeline">Save Changes</span>
        </button>
      </form>

      {showSuccessModal && (
        <Modal close={() => setShowSuccessModal(false)}>
          <h3>CHANGES SAVED SUCCESSFULLY</h3>
          <p>You have succesfully made changes to your saved addresses.</p>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="bg-black px-5 py-3 text-xs text-white"
          >
            OK
          </button>
        </Modal>
      )}

      {error && (
        <Modal close={() => setError(null)}>
          <h3>CHANGES NOT SUCCESSFUL</h3>
          <p>An error occured while making changes to your saved addresses!</p>
          <button
            onClick={() => setError(null)}
            className="bg-black px-5 py-3 text-xs text-white"
          >
            OK
          </button>
        </Modal>
      )}
    </>
  );
}

export default AccountAddressesForm;
