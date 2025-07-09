"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog ref={modalRef} onClose={onHide}>
      <div className="p-4 flex justify-end">
        <button
          onClick={onHide}
          className="border w-8 h-8 rounded-full border-black"
        >
          x
        </button>
      </div>

      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  );
};

export default Modal;
