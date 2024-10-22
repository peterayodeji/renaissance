import { useNavigate } from 'react-router-dom';

function SearchResultsList({
  subcategoryMatches,
  tagsMatches,
  nameMatches,
  onClose,
}) {
  const navigate = useNavigate();

  // Fix Number of Results Displayed;
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
            <ResultsListItem
              key={id}
              onClick={() => navigate('/product/123')}
              onClose={onClose}
            >
              <StyledSpan weight={500}>{subcategory}</StyledSpan>
              <span className="text-stone-500">Category</span>
            </ResultsListItem>
          ))}
        </ResultsList>
      )}

      {/* TAGS */}
      {tags && (
        <ResultsList>
          {tagsMatches.map(({ key, tag, subcategory }) => (
            <ResultsListItem
              key={key}
              maxGap={false}
              onClick={() => navigate('/product/123')}
              onClose={onClose}
            >
              <StyledSpan weight={500}>{tag}</StyledSpan>
              <StyledSpan>{subcategory}</StyledSpan>
            </ResultsListItem>
          ))}
        </ResultsList>
      )}

      {/* NAME */}
      {name && (
        <ResultsList>
          {nameMatches.map(({ id, name }) => (
            <ResultsListItem
              key={id}
              onClick={() => navigate('/product/123')}
              onClose={onClose}
            >
              <StyledSpan>{name}</StyledSpan>
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

function ResultsListItem({ children, onClick, onClose, maxGap = true }) {
  function handleClick() {
    onClick();
    onClose();
  }

  return (
    <li
      onClick={handleClick}
      className={`group flex cursor-pointer ${maxGap ? 'gap-x-4' : 'gap-x-2'}`}
    >
      {children}
    </li>
  );
}

function StyledSpan({ children, weight }) {
  const style = {
    fontWeight: weight ? weight : 400,
  };

  return (
    <span style={style} className="decoration-[0.99px] group-hover:underline">
      {children}
    </span>
  );
}
