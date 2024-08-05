'use client';

import { useState } from 'react';
import AddTransaction from "@/components/AddTransaction";
import { type FloatingButtonProps, ModalProps } from "@/types/Modals";

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => (
  <button
    className="floating-button"
    onClick={onClick}
  >
    +
  </button>
);

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close-button" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default function TransactionModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <FloatingButton onClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddTransaction />
      </Modal>
    </>
  );
}