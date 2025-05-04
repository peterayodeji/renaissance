import { useForm } from 'react-hook-form';
import { getCountryData, countryOptions } from '../utils/helpers';

export function useCountryRegion(countryCode) {
  const { watch, setValue } = useForm();
  const selectedCountry = watch('country', countryCode);

  // Get states for selected country
  const stateOptions =
    getCountryData(selectedCountry, countryOptions)?.states || [];

  // Handle country change
  const handleCountryChange = e => {
    setValue('country', e.target.value, { shouldValidate: true });
  };

  return {
    stateOptions,
    selectedCountry,
    handleCountryChange,
    setValue,
  };
}
