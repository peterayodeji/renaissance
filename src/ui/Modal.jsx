import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOutsideClick } from '../hooks/useOutsideClick';
import Overlay from './Overlay';

function Modal({ children, close }) {
  const modalEl = useRef();
  useOutsideClick(modalEl, close);

  return createPortal(
    <Overlay>
      <div
        ref={modalEl}
        className="bg-yellow-30 fixed left-1/2 top-1/2 w-64 -translate-x-1/2 -translate-y-1/2 transform border border-stone-300 bg-white px-5 pb-5 pt-7 text-sm transition-all sm:w-96"
      >
        <button
          onClick={close}
          className="bg-green-30 absolute right-5 top-2 p-2"
        >
          <img src="/x.svg" alt="Cancel" className="w-5" />
        </button>

        <div className="flex flex-col gap-y-6 [&>*:last-child]:self-end">
          {children}
        </div>
      </div>
    </Overlay>,
    document.body,
  );
}

export default Modal;
