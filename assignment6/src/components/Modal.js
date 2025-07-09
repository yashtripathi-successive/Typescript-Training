
import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ background: 'white', padding: 20, borderRadius: 4, minWidth: 300 }}>
        {children}
        <button onClick={onClose} aria-label="Close modal">Close</button>
      </div>
    </div>
  );
}

export default Modal;
