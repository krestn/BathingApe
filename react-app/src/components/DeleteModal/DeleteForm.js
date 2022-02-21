import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as imageActions from "../../store/images";
import { useHistory } from 'react-router-dom';




function DeleteForm({ passedShowModal, imageId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [setErrors] = useState([]);
    const [success, setSuccess] = useState("");
    const [showModal, setShowModal] = useState(passedShowModal);

    const user_id = useSelector(state => state.session.user.id);





    const submitDelete = (e) => {
        const confirm = {
            id: imageId
        }
        return dispatch(imageActions.deleteImage(confirm))
            .then(
                response => {
                    if (response.errors) {
                        setErrors(response.errors)
                        return
                    }
                    setSuccess("Success");
                    setTimeout(() => {
                        setShowModal(false);
                    }, 1500);
                    history.push('/')
                }
            )
    }

    return (
        <div className='delete'>
            <h2>Are you sure you want to delete this image?</h2>
            <h3 style={{ color: "black" }} >This cannot be undone.</h3>
            <button type="button" onClick={(e) => submitDelete()} className="dark-button">Yes</button>
            <button type="button" onClick={(e) => setShowModal(false)} className="light-button">No</button>
            <h2 style={{ color: "green" }}>{success}</h2>
        </div>)
}

export default DeleteForm
