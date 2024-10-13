function Overlay(props) {
  return (
    <div
      {...props}
      className="fixed inset-0 z-10 h-screen w-screen backdrop-brightness-[.95]"
    ></div>
  );
}

export default Overlay;
