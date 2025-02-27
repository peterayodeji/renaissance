import FormRow from '../../ui/FormRow';

function ShippingAddress({ register, errors }) {
  //   const preventNonNumeric = e => {
  //     if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== ' ') {
  //       e.preventDefault();
  //     }
  //   };

  return (
    <div className="space-y-4">
      <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
        SHIPPING ADDRESS
      </h4>

      <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row md:flex-col lg:flex-row">
        <FormRow label="First Name" error={errors?.firstName?.message}>
          <input
            // inputMode="numeric"
            // pattern="[0-9 ]*"
            // onKeyDown={preventNonNumeric}
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
        <FormRow label="Street Address" error={errors?.streetAddress?.message}>
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
  );
}

export default ShippingAddress;
