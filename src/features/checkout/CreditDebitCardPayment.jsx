import FormRow from '../../ui/FormRow';

function CreditDebitCardPayment({ register, errors }) {
  return (
    <div className="space-y-4">
      <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
        SECURE PAYMENT
      </h4>

      <p>
        To protect your security and privacy, RENAISSANCE encrypts all personal
        payment information.
      </p>

      <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row md:flex-col lg:flex-row">
        <FormRow label="Card number" error={errors?.cardNumberCDC?.message}>
          <input
            type="text"
            id="cardNumberCDC"
            {...register('cardNumberCDC', {
              required: 'This field is required',
            })}
            className="input"
          />
        </FormRow>

        <FormRow
          label="Expiration date"
          error={errors?.expirationDateCDC?.message}
        >
          <input
            type="text"
            id="expirationDateCDC"
            {...register('expirationDateCDC', {
              required: 'This field is required',
            })}
            className="input w-44"
          />
        </FormRow>
      </div>

      <div className="flex flex-col gap-x-2 gap-y-4 sm:flex-row md:flex-col lg:flex-row">
        <FormRow
          label="Cardholder's name"
          error={errors?.cardholdersNameCDC?.message}
        >
          <input
            type="text"
            id="cardholdersNameCDC"
            {...register('cardholdersNameCDC', {
              required: 'This field is required',
            })}
            className="input"
          />
        </FormRow>

        <FormRow label="Security code" error={errors?.securityCodeCDC?.message}>
          <input
            type="text"
            id="securityCodeCDC"
            {...register('securityCodeCDC', {
              required: 'This field is required',
            })}
            className="input w-44"
          />
        </FormRow>
      </div>
    </div>
  );
}

export default CreditDebitCardPayment;
