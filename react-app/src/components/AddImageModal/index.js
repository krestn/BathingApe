import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import AddImageForm from './AddImageForm';



function AddImageFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='addDeckButton' onClick={() => setShowModal(true)}>Add Image</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddImageForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  )
}

export default AddImageFormModal;
