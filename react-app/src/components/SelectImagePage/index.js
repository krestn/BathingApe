import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getImages } from "../../store/image";

const SelectImagePage = (props) => {

    const dispatch = useDispatch();

    const [errors, setErrors] = useState([]);
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);

    const [imageLoading, setImageLoading] = useState(false);
    const history = useHistory(); // so that we can redirect after the image upload is successful

    const updateImage = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setImage(file);
    };

    const updateCaption = (e) => {
        setCaption(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errArr = [];
        image || errArr.push("* Please upload an image.");
        caption || errArr.push("* Please enter a caption.");

        if (errArr.length) {
            setErrors(errArr);

        } else {
            const formData = new FormData();
            formData.append("image", image);

            // aws uploads can be a bit slow—displaying
            // some sort of loading message is a good idea
            setImageLoading(true);

            formData.append("caption", caption);

            const res = await fetch("/api/posts", {
                method: "POST",
                body: formData,
            });
            if (res.ok) {
                await res.json();
                setImageLoading(false);
                history.push("/posts")
                    || dispatch(getImages()) && props.setTrigger(false);

            } else {
                setImageLoading(false);
                // a real app would probably use more advanced
                // error handling
                console.log("there was an error here is some info", res, res.formData, res.status);
            }
        }
    };

    return props.trigger && (
        <div className="select-image-page-body"
            onClick={e => e.target.className === "select-image-page-body" && props.setTrigger(false)}>
            <div className="modal-container">
                <div className="new-post-text">
                    <p>Create A New Post</p>
                    <p
                        className="X"
                        onClick={e => props.setTrigger(false)}
                    >X</p>
                </div>
                <form className="modal-form" onSubmit={handleSubmit}>
                    <ul>
                        {errors.length > 0 && errors.map(err => (
                            <li className="display-errors" key={err}>{err}</li>
                        ))}
                    </ul>
                        <input
                            className="file-thing"
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                            onClick={e => e.target.style.color = "black"}
                        />
                    <div className="upload">
                        <label>Caption</label>
                        <input
                            type="text"
                            name="caption"
                            className="caption-input"
                            onChange={updateCaption}
                            value={caption}
                        ></input>
                    </div>
                    <button className="submit-button" type="submit">Submit Post</button>
                    {imageLoading && <p>Loading...</p>}
                </form>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default SelectImagePage;
