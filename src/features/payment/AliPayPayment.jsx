import { useCardNumber } from './useCardNumber';
import { useCardExpDate } from './useCardExpDate';

import FormRow from '../../ui/FormRow';

function AliPayPayment({ register, errors }) {
  const { cardNumber, handleChange } = useCardNumber('cardNumberAP');
  const { expDate, handleExpChange, validateExpDate, inputRef } =
    useCardExpDate('expirationDateAP');

  return (
    <div className="space-y-4">
      <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
        SECURE PAYMENT
      </h4>

      <p>
        To protect your security and privacy, RENAISSANCE encrypts all personal
        payment information.
      </p>

      <div className="flex flex-col gap-x-2 gap-y-4 lg:flex-row">
        <FormRow label="Card number" error={errors?.cardNumberAP?.message}>
          <input
            type="text"
            id="cardNumberAP"
            {...register('cardNumberAP', {
              required: 'This field is required',
              minLength: { value: 19, message: 'Invalid card number' },
            })}
            value={cardNumber}
            onChange={handleChange}
            placeholder="1234 1234 1234 1234"
            maxLength="19" // 16 digits + 3 spaces
            autoComplete="new-password"
            className="input"
          />
        </FormRow>

        <FormRow
          label="Expiration date"
          error={errors?.expirationDateAP?.message}
        >
          <input
            type="text"
            ref={inputRef}
            id="expirationDateAP"
            {...register('expirationDateAP', {
              required: 'This field is required',
              validate: validateExpDate,
            })}
            value={expDate}
            onChange={handleExpChange}
            placeholder="MM / YY"
            maxLength="7" // 4 digits + 2 spaces + 1 slash
            autoComplete="new-password"
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
          autoComplete="new-password"
          className="input w-44"
        />
      </FormRow>
    </div>
  );
}

export default AliPayPayment;
