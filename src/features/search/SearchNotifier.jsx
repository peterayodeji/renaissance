function SearchNotifier({ searchInput, isValidInput, isValidResult, error }) {
  if (!searchInput) return <Notifier>Start typing to see suggestions</Notifier>;

  if (isValidResult && !error && isValidInput)
    return <Notifier>Please select from below</Notifier>;

  return <Notifier>Nothing found try typing something else</Notifier>;
}

export default SearchNotifier;

function Notifier({ children }) {
  return <p className="mb-4 text-stone-500 sm:text-base">{children}</p>;
}
