function ProductDisplayList({ children }) {
  return (
    <ul className="bg-blue-20 grid grid-cols-2 items-end gap-x-4 gap-y-12 py-8 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </ul>
  );
}

export default ProductDisplayList;
