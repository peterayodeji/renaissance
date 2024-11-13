import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useOutsideClick } from '../hooks/useOutsideClick';
import Overlay from './Overlay';
import { useFixedScrollFlicker } from '../hooks/useFixedScrollFlicker';

function Modal({ children, close }) {
  const modalEl = useRef();
  useFixedScrollFlicker();
  useOutsideClick(modalEl, () => console.log("I'm handler"));

  return createPortal(
    <Overlay>
      <div
        ref={modalEl}
        className="bg-yellow-30 fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform border border-black bg-white p-4 shadow-md transition-all duration-500"
      >
        <button
          onClick={close}
          className="absolute right-1 top-1 bg-green-300 px-2"
        >
          X
        </button>

        {children}
      </div>
    </Overlay>,
    document.body,
  );
}

export default Modal;
