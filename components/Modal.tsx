import React from 'react';
import { Spinner } from "@nextui-org/spinner";

interface ModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  // showSpinner?: boolean; // Optional prop to show spinner
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, title, message, /*showSpinner, */ onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-500 bg-black bg-opacity-50 w-screen h-full">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{message}</p>
        {/* {showSpinner && (
          <div className="flex justify-center mb-4">
            <Spinner label="Loading..." color="warning" />
          </div>
        )} */}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
