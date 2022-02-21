import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as imageActions from "../../store/images";
import './UserImages.css'
import { Modal } from '../../context/Modal';
import EditCaptionForm from '../EditCaptionModal'


function UserImages() {
  const [showModal, setShowModal] = useState(false);
  const [imageId, setImageId] = useState('');
  const [caption, setCaption] = useState('');
  const [url, setURL] = useState('');


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(imageActions.getImages());
  }, [dispatch]);

  const images = useSelector(state => Object.entries(state.images));



  return (
    <div className='images'>
      {images?.map(image => <div key={image.id}>
        <img className='postImage' src={`${image[1].url}`} alt="image"></img>
        <div onClick={() => {
          setShowModal(true);
          setCaption(image[1].caption);
          setImageId(image[1].id);
          setURL(image[1].url);

        }}>{image[1].caption}  </div>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditCaptionForm url={url} caption={caption} imageId={imageId} setShowModal={setShowModal} />
          </Modal>
        )}
      </div>)}
      {console.log(imageId)}




    </div>
  )


}

export default UserImages;
