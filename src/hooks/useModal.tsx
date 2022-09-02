import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('🚀 ~ file: useModal.tsx ~ line 5 ~ useModal ~ isOpen', isOpen);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return { isOpen, openModal, closeModal };
};

export default useModal;
