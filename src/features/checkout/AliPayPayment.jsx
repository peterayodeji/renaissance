import FormRow from '../../ui/FormRow';

function AliPayPayment({ register, errors }) {
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
        <FormRow label="Card number" error={errors?.cardNumberAP?.message}>
          <input
            type="text"
            id="cardNumberAP"
            {...register('cardNumberAP', {
              required: 'This field is required',
            })}
            className="input"
          />
        </FormRow>

        <FormRow
          label="Expiration date"
          error={errors?.expirationDateAP?.message}
        >
          <input
            type="text"
            id="expirationDateAP"
            {...register('expirationDateAP', {
              required: 'This field is required',
            })}
            className="input w-44"
          />
        </FormRow>
      </div>

      <FormRow
        label="Cardholder's name"
        error={errors?.cardholdersNameAP?.message}
      >
        <input
          type="text"
          id="cardholdersNameAP"
          {...register('cardholdersNameAP', {
            required: 'This field is required',
          })}
          className="input w-44"
        />
      </FormRow>
    </div>
  );
}

export default AliPayPayment;
