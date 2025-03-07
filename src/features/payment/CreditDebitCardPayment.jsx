import { useCardNumber } from './useCardNumber';
import { useCardExpDate } from './useCardExpDate';
import { useSecurityCode } from './useSecurityCode';

import FormRow from '../../ui/FormRow';

function CreditDebitCardPayment({ register, errors }) {
  const { cardNumber, handleChange } = useCardNumber('cardNumberCDC');
  const { expDate, handleExpChange, validateExpDate, inputRef } =
    useCardExpDate('expirationDateCDC');
  const { securityCode, handleCodeChange } = useSecurityCode('securityCodeCDC');

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
          error={errors?.expirationDateCDC?.message}
        >
          <input
            type="text"
            ref={inputRef}
            id="expirationDateCDC"
            {...register('expirationDateCDC', {
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
            autoComplete="new-password"
            className="input"
          />
        </FormRow>

        <FormRow label="Security code" error={errors?.securityCodeCDC?.message}>
          <input
            type="text"
            id="securityCodeCDC"
            {...register('securityCodeCDC', {
              required: 'This field is required',
              minLength: { value: 3, message: 'Invalid security code' },
            })}
            value={securityCode}
            onChange={handleCodeChange}
            placeholder="CVC"
            maxLength="3" // 3 digits
            autoComplete="new-password"
            className="input w-44"
          />
        </FormRow>
      </div>
    </div>
  );
}

export default CreditDebitCardPayment;
