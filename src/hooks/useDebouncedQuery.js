import { useEffect, useState } from 'react';

export function useDebouncedQuery({ query, delay = 500, enabled = true }) {
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(
    function () {
      const handler = setTimeout(() => {
        if (!enabled) return;
        setDebouncedQuery(query);
      }, delay);

      return () => clearTimeout(handler);
    },
    [query, delay, enabled],
  );

  return debouncedQuery;
}
