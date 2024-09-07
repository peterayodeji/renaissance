function MobileNavOverlay({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-10 h-screen w-screen bg-gray-300/50"
    ></div>
  );
}

export default MobileNavOverlay;
