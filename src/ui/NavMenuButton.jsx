function NavMenuButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-blue-30 flex flex-col items-center px-2 py-1 text-xs lg:w-16"
    >
      {children}
    </button>
  );
}
export default NavMenuButton;
