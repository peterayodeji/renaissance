import { createPortal } from 'react-dom';

function Loader() {
  return createPortal(
    <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center backdrop-brightness-[.3] transition-all duration-500">
      <div className="loader"></div>
    </div>,
    document.body,
  );
}

export default Loader;
