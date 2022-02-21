import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as imageActions from "../../store/images";
import './UserImages.css'
import { Modal } from '../../context/Modal';
import EditCaptionForm from '../EditCaptionModal'
import DeleteModal from '../DeleteModal'


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
      {images?.map(image => <div className='imageContainer' onClick={()=> setImageId(image[1].id)} key={image.id}>
        <img className='image' src={`${image[1].url}`} alt="image">
        </img>
          <button class="likeButton">Like</button>

          
          <DeleteModal imageId={imageId}/>


        <div className='captionContainer'>
        <div class="caption" onClick={() => {
          setShowModal(true);
          setCaption(image[1].caption);
          setImageId(image[1].id);
          setURL(image[1].url);

        }}>{image[1].caption}  <span class="captionEdit">Click to edit</span>
        </div>
        </div>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditCaptionForm url={url} caption={caption} imageId={imageId} setShowModal={setShowModal} />
          </Modal>
        )}
      </div>)}




    </div>
  )


}

export default UserImages;
