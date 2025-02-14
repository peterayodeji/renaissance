function Overlay(props) {
  return (
    <div
      {...props}
      className="bg-red-30 fixed inset-0 z-50 h-full w-full backdrop-brightness-[.3] transition-all duration-500"
    ></div>
  );
}

export default Overlay;
