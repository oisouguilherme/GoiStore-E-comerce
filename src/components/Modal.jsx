import { useState } from 'react';
import { CompreAqui } from './CompreAqui';

export function Modal(){
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div>
      <button onClick={openModal}>
        TEste
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-75 absolute inset-0 z-10" onClick={closeModal}></div>
          <CompreAqui/>
        </div>
      )}
    </div>
  );
};

