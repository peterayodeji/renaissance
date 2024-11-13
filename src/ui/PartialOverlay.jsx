function PartialOverlay({ ...props }) {
  return (
    <div
      {...props}
      className="flex-1 backdrop-brightness-[.3] transition-all duration-500"
    ></div>
  );
}

export default PartialOverlay;
