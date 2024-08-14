import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({ children, open }) {
  const dialog = useRef();
  const modal = dialog.current;

  useEffect(() => {
    if (open) {
      modal?.showModal();
    } else modal?.close();
  }, [open, modal]);

  return createPortal(
    <dialog ref={dialog} className="modal-overlay">
      <div className="modal-content">{children}</div>
    </dialog>,
    document.getElementById("modal")
  );
}
