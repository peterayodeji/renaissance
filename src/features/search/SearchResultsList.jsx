function SearchResultsList({ subcategoryMatches, tagsMatches, nameMatches }) {
  // Fix Maximum Number of Results Displayed;
  const subcategory = subcategoryMatches?.slice(0, 10);
  const tags = tagsMatches?.slice(0, 10);
  const nameLength = 20 - (subcategory.length + tags.length);
  const name = nameMatches?.slice(0, nameLength);

  return (
    <div className="space-y-2">
      {/* SUBCATEGORY */}
      {subcategory && (
        <ResultsList>
          {subcategoryMatches.map(({ subcategory, id }) => (
            <ResultsListItem key={id}>
              <span className="font-medium text-black">{subcategory}</span>
              <span className="text-stone-500">Category</span>
            </ResultsListItem>
          ))}
        </ResultsList>
      )}

      {/* TAGS */}
      {tags && (
        <ResultsList>
          {tagsMatches.map(({ key, tag, subcategory }) => (
            <ResultsListItem key={key} maxGap={false}>
              <span className="font-medium text-black">{tag}</span>
              <span>{subcategory}</span>
            </ResultsListItem>
          ))}
        </ResultsList>
      )}

      {/* NAME */}
      {name && (
        <ResultsList>
          {nameMatches.map(({ id, name }) => (
            <ResultsListItem key={id}>
              <span>{name}</span>
            </ResultsListItem>
          ))}
        </ResultsList>
      )}
    </div>
  );
}

export default SearchResultsList;

function ResultsList({ children }) {
  return <ul className="space-y-2 text-sm">{children}</ul>;
}

function ResultsListItem({ children, maxGap = true }) {
  return (
    <li className={`flex ${maxGap ? 'gap-x-4' : 'gap-x-2'}`}>{children}</li>
  );
}
