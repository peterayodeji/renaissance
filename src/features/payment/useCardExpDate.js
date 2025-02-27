import { useRef } from 'react';
import { useForm } from 'react-hook-form';

export function useCardExpDate(expDateId) {
  const { watch, setValue } = useForm();

  // Get current month & year
  const currentMonth = new Date().getMonth() + 1; // Month is 0-based, so add 1
  const currentYear = new Date().getFullYear() % 100; // Get last 2 digits (e.g., 2025 -> 25)

  // Watch for input changes
  const expDate = watch(expDateId, '');
  const lastValueRef = useRef(''); // Track the previous value to detect backspace
  const inputRef = useRef(null); // Ref for the input element

  // * Function to format expiration date as "MM / YY"
  const formatExpDate = (value, lastValue) => {
    // Remove non-numeric characters
    let cleaned = value.replace(/\D/g, '');

    // Handle backspace on the slash
    if (lastValue.length > value.length && lastValue.endsWith(' / ')) {
      cleaned = cleaned.slice(0, -1); // Remove last digit if user deletes `/`
    }

    // Auto-correct first digit if >1 (for month)
    if (cleaned.length === 1 && parseInt(cleaned[0]) > 1) {
      cleaned = `0${cleaned[0]}`;
    }

    // Automatically insert "/" after two digits (MM)
    if (cleaned.length >= 2) {
      cleaned = `${cleaned.slice(0, 2)} / ${cleaned.slice(2)}`;
    }

    return cleaned.slice(0, 7); // Ensure max length is "MM / YY"
  };

  // * Handle input change as user types
  const handleExpChange = e => {
    const cursorPosition = e.target.selectionStart; // Get cursor position
    const prevLength = expDate.length; // Store previous length before change
    const formatted = formatExpDate(e.target.value, lastValueRef.current);

    // If user deletes from the first two digits, reset everything
    if (cursorPosition <= 2 && prevLength > formatted.length) {
      setValue(expDateId, '', { shouldValidate: true });
      return;
    }

    lastValueRef.current = formatted; // Update last value
    setValue(expDateId, formatted, { shouldValidate: true });

    // Restore cursor position at the right spot
    requestAnimationFrame(() => {
      if (inputRef.current) {
        const newCursorPosition = formatted.length; // Keep cursor at the end
        inputRef.current.setSelectionRange(
          newCursorPosition,
          newCursorPosition,
        );
      }
    });
  };

  // * Validation function for expiration date
  const validateExpDate = value => {
    const rawValue = value.replace(/\D/g, ''); // Remove non-numeric characters

    if (rawValue.length < 4) {
      return 'Invalid expiration date'; // Ensures MMYY format
    }

    const month = parseInt(rawValue.substring(0, 2), 10);
    const year = parseInt(rawValue.substring(2, 4), 10);

    if (month < 1 || month > 12) {
      return 'Invalid month'; // Ensures valid month
    }

    if (year < currentYear) {
      return 'Invalid year';
    }

    if (year > currentYear + 10) {
      return 'Year cannot be more than 10 years in the future';
    }

    if (year === currentYear && month < currentMonth) {
      return 'Card has already expired';
    }

    return true; // No error
  };

  return { expDate, handleExpChange, validateExpDate, inputRef };
}
