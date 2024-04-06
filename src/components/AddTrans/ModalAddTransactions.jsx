import React from 'react';
import ReactDOM from 'react-dom';
import FormAddTransaction from './FormAddTransactions';
import EditTransaction from '../Edit/Edit';

const ModalAddTransactions = ({ isOpen, onClose, edit, transactionData }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>

        {edit ? (
          <EditTransaction
            transactionData={transactionData}
            onClose={onClose}
          />
        ) : (
          <FormAddTransaction onClose={onClose} />
        )}
      </div>
    </div>,
    document.body
  );
};
export default ModalAddTransactions;
