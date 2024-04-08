import React from 'react';
import ReactDOM from 'react-dom';

import EditTransaction from '../Edit/Edit';

const ModalEditTransactions = ({ isOpen, onClose, edit, transactionData }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>

        <EditTransaction transactionData={transactionData} onClose={onClose} />
      </div>
    </div>,
    document.body
  );
};
export default ModalEditTransactions;
