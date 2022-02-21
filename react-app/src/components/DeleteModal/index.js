import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteForm from './DeleteForm';

function DeleteModal({imageId}) {
  const [showModal, setShowModal] = useState(false);




  const onSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    setShowModal(true);
  }

  return (
    <>
      <button className='deleteButton' onClick={() =>{ setShowModal(true); 
}}>Delete</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteForm passedShowModal={showModal} imageId={imageId} />

        </Modal>
      )}
    </>
  );
}

export default DeleteModal;
