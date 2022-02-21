import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddImageForm from './AddImageForm';



function AddImageFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='addImage' onClick={() => setShowModal(true)}>+</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddImageForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  )
}

export default AddImageFormModal;
