import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isShowModal, setIsShow] = useState(false);
  const [modalName, setModalName] = useState('');
  const [editTransaction, setEditTransaction] = useState(null);

  const modalOpen = (name, transaction = null) => {
    setIsShow(true);
    setModalName(name);
    setEditTransaction(transaction);
  };

  const modalClose = () => {
    setIsShow(false);
    setModalName('');
    setEditTransaction(null);
  };

  return (
    <ModalContext.Provider
      value={{ editTransaction, isShowModal, modalName, modalClose, modalOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};
