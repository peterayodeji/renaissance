function MobileNavActions({ children }) {
  return (
    <div className="mb4 sticky top-0 z-30 flex h-14 items-center justify-between bg-white px-4 font-medium md:h-16 lg:hidden [&:has(:only-child)]:justify-end">
      {children}
    </div>
  );
}

export default MobileNavActions;
