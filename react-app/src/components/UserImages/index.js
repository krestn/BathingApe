import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as imageActions from "../../store/images";
import './UserImages.css'



function UserImages(){


  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(imageActions.getImages());
  }, [dispatch]);
  
  const images = useSelector(state => Object.entries(state.images));
  const userId = useSelector(state => state.session.user.id)



return (
  <div className='images'>
      {images?.map(image => <div key={image.id}>
        <img className='postImage' src={`${image[1].url}`} alt="image"></img>
        <div>{image[1].caption}</div>
      </div>)}



  </div>
)


}

export default UserImages;
