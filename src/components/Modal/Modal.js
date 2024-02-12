import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay, ButtonClose, CancelBtn } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../Redux/modal/modalSlice';

export default function Modal({ children, showCloseIcon = true }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      console.error("Element with id 'modal-root' not found in the DOM.");
      return;
    }

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModal());
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleModal());
    }
  };

  const closeClick = e => {
    if (e.target.name === 'cancel' || e.currentTarget.name === 'closeSvg') {
      dispatch(toggleModal());
    }
  };

  const modalRoot = document.getElementById('modal-root');

  return modalRoot
    ? createPortal(
        <Overlay onClick={handleBackdropClick}>
          <ModalWindow>
            {showCloseIcon && (
              <ButtonClose type="button" name="closeSvg" onClick={closeClick}>
                {/* ... Your close icon SVG */}
              </ButtonClose>
            )}
            {children}
            <CancelBtn type="button" name="cancel" onClick={closeClick}>
              Cancel
            </CancelBtn>
          </ModalWindow>
        </Overlay>,
        modalRoot
      )
    : null;
}
