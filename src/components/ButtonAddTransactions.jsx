import React, { useState } from 'react';
import ModalAddTransactions from './ModalAddTransactions';

const ButtonAddTransactions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="add-btn" onClick={() => setIsOpen(true)}>
        <span className="plus"></span>
        <span className="minus"></span>
      </button>
      <ModalAddTransactions isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ButtonAddTransactions;
