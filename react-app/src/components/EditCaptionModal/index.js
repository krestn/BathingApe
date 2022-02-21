import { useState } from 'react';
import { editImage } from '../../store/images';
import { useDispatch, useSelector } from 'react-redux';

function EditCaptionForm({ setShowModal, url, imageId, caption }) {
	const dispatch = useDispatch();
	const [newCaption, setNewCaption] = useState(caption);
	const user_id = useSelector((state) => state.session.user.id);
	const [errors, setErrors] = useState([]);
	const [success, setSuccess] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		setErrors([]);
		const updatedCaption = {
			id: imageId,
			caption: newCaption,
			url: url,
			user_id: user_id
		};

		console.log(updatedCaption)

		return dispatch(editImage(updatedCaption)).then((response) => {
			if (response.errors) {
				setErrors(response.errors);
				return;
			}
			setSuccess('Success!');
			setTimeout(() => {
				setShowModal(false);
			}, 1500);
		});
	};

	return (
		<div className="form-container">
			{success}
			<form onSubmit={handleSubmit}>
				<ul>{errors.map((error, idx) => <li key={idx}>{error}</li>)}</ul>
				<label className="title">
					Caption
					<input className='input' type="text" value={newCaption} onChange={(e) => setNewCaption(e.target.value)} required />
				</label>
				<div className='button-container'>
					<button className="form-button">Submit</button>
				</div>
			</form>
		</div>
	);
}

export default EditCaptionForm;
