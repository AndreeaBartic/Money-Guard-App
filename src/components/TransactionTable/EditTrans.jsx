import ModalAddTransactions from 'components/AddTrans/ModalAddTransactions';
import React, { useState } from 'react';
import { BiPencil } from 'react-icons/bi';

const EditTrans = ({ transactionEdit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleEditClick = e => {
    e.preventDefault();
    setIsOpen(true);
    setEdit(true);
  };
  return (
    <>
      <BiPencil onClick={handleEditClick} />

      {isOpen && (
        <ModalAddTransactions
          transactionData={transactionEdit}
          edit={edit}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default EditTrans;
