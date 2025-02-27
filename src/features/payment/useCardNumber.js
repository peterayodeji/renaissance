import { useForm } from 'react-hook-form';

export function useCardNumber(cardNumberId) {
  const { watch, setValue } = useForm();

  // Watch for input changes
  const cardNumber = watch(cardNumberId, '');

  // Function to format card number with spaces
  const formatCardNumber = value => {
    return value
      .replace(/\D/g, '') // Remove non-numeric characters
      .replace(/(.{4})/g, '$1 ') // Add space after every 4 digits
      .trim(); // Remove trailing space
  };

  // Handle input change
  const handleChange = e => {
    const formatted = formatCardNumber(e.target.value);
    setValue(cardNumberId, formatted, { shouldValidate: true });
  };

  return { cardNumber, handleChange };
}
