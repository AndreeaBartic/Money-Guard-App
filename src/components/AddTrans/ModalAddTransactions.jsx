import React from 'react';
import ReactDOM from 'react-dom';
import FormAddTransaction from './FormAddTransactions';

const ModalAddTransactions = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <FormAddTransaction onClose={onClose} />
      </div>
    </div>,
    document.body
  );
};

export default ModalAddTransactions;
