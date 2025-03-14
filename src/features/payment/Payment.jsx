import RadioButton from '../../ui/RadioButton';
import AliPayPayment from './AliPayPayment';
import CreditDebitCardPayment from './CreditDebitCardPayment';
import PayPalPayment from './PayPalPayment';

const PAYMENT_OPTIONS = [
  { label: 'Pay with credit or debit card', value: 'creditDebitCard' },
  { label: 'Pay with PayPal', value: 'payPal' },
  { label: 'Pay with AliPay', value: 'aliPay' },
];

function Payment({ register, errors, selectedOption, setSelectedOption }) {
  return (
    <>
      <div className="space-y-4">
        <h4 className="bg-purple-40 border-b border-stone-300 pb-2">
          PAYMENT METHOD
        </h4>

        <div className="bg-green-30 flex flex-col items-start gap-y-2">
          <RadioButton
            name="payment"
            options={PAYMENT_OPTIONS}
            selectedOption={selectedOption}
            onSelectOption={setSelectedOption}
          />
        </div>
      </div>

      {selectedOption === 'creditDebitCard' && (
        <CreditDebitCardPayment register={register} errors={errors} />
      )}
      {selectedOption === 'payPal' && (
        <PayPalPayment register={register} errors={errors} />
      )}
      {selectedOption === 'aliPay' && (
        <AliPayPayment register={register} errors={errors} />
      )}
    </>
  );
}

export default Payment;
