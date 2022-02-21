import { useState } from 'react';
import * as imageActions from '../../store/images';
import './AddImage.css'
import { useDispatch, useSelector } from 'react-redux';

function AddImageForm({ setShowModal }) {
    const dispatch = useDispatch();
    const user_id = useSelector(state => state.session.user.id);
    const [caption, setCaption] = useState('');
    const [url, setURL] = useState('');
    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");



    const handleSubmit = async e => {
        e.preventDefault();
        setErrors([]);

        const newImage = {
            caption,
            url,
            user_id
        }

        return dispatch(imageActions.addImage(newImage))
            .then(
                (response) => {
                    if (response.errors) {
                        setErrors(response.errors)
                        return
                    }
                    setSuccess("Success!");
                    setTimeout(() => {
                        setShowModal(false);
                    }, 1500);
                }
            );
    };

    return (
        <div className="form-container">
            <form className='form' onSubmit={handleSubmit}>
            <h2 style={{color:"green", marginBottom:"-20px"}}>{success}</h2>
                <ul>
                    {errors.map((error, idx) => (
                        <li key={idx}>{error}</li>
                    ))}
                </ul>
                <label className='form'>
                <h1>Add Image</h1>

                    <input
                        type='text'
                        value={url}
                        onChange={e => setURL(e.target.value)}
                        required
                        placeholder='URL'
                        className='input'
                    />
                </label>
                <label>
                </label>
                <input
                    type='text'
                    value={caption}
                    onChange={e => setCaption(e.target.value)}
                    placeholder='Caption'
                    className='input'
                />

                <div className='form-button-container'>
                    <button>Add Image</button>
                </div>
            </form>
        </div>
    )
}

export default AddImageForm;
