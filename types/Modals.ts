export interface FloatingButtonProps {
    onClick: () => void;
  }
  
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }