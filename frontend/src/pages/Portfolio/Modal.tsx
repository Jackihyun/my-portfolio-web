import React from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* 배경 클릭 시 모달 닫힘 */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="relative bg-white rounded-lg p-6 z-50 max-w-lg mx-auto">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          닫기
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
