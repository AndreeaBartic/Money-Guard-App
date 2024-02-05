import React, { useState } from 'react';
import ModalAddTransactions from './ModalAddTransactions';

const ButtonAddTransactions = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}></button>
      <ModalAddTransactions isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default ButtonAddTransactions;
