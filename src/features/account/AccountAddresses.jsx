import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';

function AccountAddresses() {
  const { register, formState } = useForm();
  const { errors } = formState;

  return (
    <form className="bg-yellow-30">
      <h2 className="bg-blue-20 mb-10 text-center text-3xl font-semibold">
        Addresses
      </h2>

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

          <FormRow label="Company (Optional)" error={errors?.company?.message}>
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
              className="input w-44"
            />
          </FormRow>
        </div>

        {/* <div className="flex flex-col gap-x-2 gap-y-4  lg:flex-row">
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
              {stateOptions.map(([state, stateCode]) => (
                <option key={stateCode} value={state}>
                  {truncateText(state, 30)}
                </option>
              ))}
            </select>
          </FormRow>
        </div> */}

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
            className="input w-44"
          />
        </FormRow>
      </div>

      <button
        type="submit"
        // disabled={isLoading}
        className="mt-8 w-full bg-black py-4 font-medium tracking-wider text-white disabled:opacity-5"
      >
        <span className="undeline">Save Changes</span>
      </button>
    </form>
  );
}

export default AccountAddresses;
