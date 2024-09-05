function MobileNav({ isOpen }) {
  return (
    <>
      {isOpen && (
        <div className="absolute inset-0 h-[100vh] w-[100vw] bg-white [transform:translateX(0)] sm:w-[65vw] md:w-[65vw]">
          MOBILE NAV
        </div>
      )}
    </>
  );
}

export default MobileNav;
