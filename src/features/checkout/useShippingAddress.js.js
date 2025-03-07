import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { getUserLocation } from '../../services/apiAuth';
import { countryOptions, getCountryData } from '../../utils/helpers';

export function useShippingAddress(reset) {
  const { watch, setValue } = useForm();
  const [isResetDone, setIsResetDone] = useState(false);
  const { isLoading, data, isError } = useQuery({
    queryKey: ['userLocation'],
    queryFn: getUserLocation,
  });

  useEffect(() => {
    if (isError) {
      setIsResetDone(true); // Mark as reset done to prevent future resets
    }
  }, [isError]);

  useEffect(() => {
    if (data && !isResetDone) {
      reset({ state: data.region });
      setValue('country', data.country, { shouldValidate: true });
      setIsResetDone(true); // Ensure reset only happens once per visit
    }
  }, [data, reset, setValue, isResetDone]);

  const selectedCountry = watch('country', '');

  // Get states for selected country
  const stateOptions =
    getCountryData(selectedCountry, countryOptions)?.states || [];

  // Handle country change
  const handleCountryChange = e => {
    setValue('country', e.target.value, { shouldValidate: true });
  };

  return {
    isLoading,
    stateOptions,
    selectedCountry,
    handleCountryChange,
  };
}
