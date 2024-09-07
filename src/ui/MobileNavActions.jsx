function MobileNavActions({ children }) {
  return (
    <div className="mb-4 flex h-14 items-center justify-between bg-gray-50 px-4 font-medium md:h-16 [&:has(:only-child)]:justify-end">
      {children}
    </div>
  );
}

export default MobileNavActions;
