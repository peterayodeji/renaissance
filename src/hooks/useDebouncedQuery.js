import { useEffect, useState } from 'react';

export function useDebouncedQuery(query, delay = 500) {
  const [debouncedQuery, setDebouncedQuery] = useState();

  useEffect(
    function () {
      const handler = setTimeout(() => {
        if (query.length < 2) return;
        setDebouncedQuery(query);
      }, delay);

      return () => clearTimeout(handler);
    },
    [query, delay],
  );

  return debouncedQuery;
}
