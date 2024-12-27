function SearchCategory({ category, setCategory }) {
  return (
    <div className="bg-purple-20 mb-2 space-x-12 border-b px-4 py-3 text-sm font-medium">
      <button
        onClick={() => setCategory('women')}
        className={`${category === 'women' ? 'text-black' : 'text-stone-500'}`}
      >
        Women
      </button>

      <button
        onClick={() => setCategory('men')}
        className={`${category === 'men' ? 'text-black' : 'text-stone-500'}`}
      >
        Men
      </button>
    </div>
  );
}

export default SearchCategory;
