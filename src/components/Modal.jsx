import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  return (
    <div>
      <dialog open={isOpen} onClose={onClose} className="modal">
        <div className="modal-box ">{children}</div>
      </dialog>
    </div>
  );
}
