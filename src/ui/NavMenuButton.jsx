function NavMenuButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-blue-20 flex flex-col items-center px-2 py-1 text-xs"
    >
      {children}
    </button>
  );
}
export default NavMenuButton;
