import { useForm } from 'react-hook-form';

export function useSecurityCode(securityCodeId) {
  const { watch, setValue } = useForm();

  // Watch for input changes
  const securityCode = watch(securityCodeId, '');

  const formatSecurityCode = value => {
    return value
      .replace(/\D/g, '') // Remove non-numeric characters
      .trim(); // Remove trailing space
  };

  // Handle input change
  const handleCodeChange = e => {
    const formatted = formatSecurityCode(e.target.value);
    setValue(securityCodeId, formatted, { shouldValidate: true });
  };

  return { securityCode, handleCodeChange };
}
