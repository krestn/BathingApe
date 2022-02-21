const LOAD_IMAGES = 'LOAD_IMAGES';
const ADD_IMAGE = 'ADD_IMAGE';
const DELETE_IMAGE = 'DELETE_IMAGE';


/* ----- ACTIONS ----- */
export const loadImages = images => {
    return {
        type: LOAD_IMAGES,
        payload: images,
    }
};

export const addNewImage = newImage => {
    return {
        type: ADD_IMAGE,
        payload: newImage
    }
}

export const deleteOneImage = image => {
    return {
        type: DELETE_IMAGE,
        payload: image
    }
}

/* ----- SELECTORS / THUNKS ----- */
export const getImages = () => async (dispatch) => {
    const res = await fetch('/api/images/');
    const data = await res.json();
    if (res.ok) {
        dispatch(loadImages(data.images));
        return res;
    }
}

export const getOneImage = (id) => async (dispatch) => {
    const res = await fetch(`/api/images/${id}`, {
        headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    if (res.ok) {
        dispatch(addNewImage(data))
    }
    return data;
}

export const addImage = (newImage) => async (dispatch) => {

    const res = await fetch('/api/images/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newImage)
    })
    const data = await res.json();
    if (res.ok) {
        return dispatch(addNewImage(data));
    }
    else return data
}

export const editImage = image => async (dispatch) => {
    const res = await fetch(`/api/images/${image.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(image)
    })
    const data = await res.json();
    if (res.ok) {
        dispatch(addNewImage(data));
    }
    return data;
}

export const deleteImage = commit => async (dispatch) => {
    const currImage = await fetch(`/api/images/${commit.id}`, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (currImage.ok) {
        const delImage = await fetch(`/api/images/${commit.id}`,
            {
                headers: {
                    "Content-Type": "application/json"
                },
                method: 'DELETE',
                body: JSON.stringify(commit)
            });
        if (delImage.ok) {
            const image = await currImage.json();
            dispatch(deleteOneImage(Image));
            return image;
        }
        else return delImage;
    }
    else return currImage;
}


/* ----- REDUCER ------ */
const initialState = {};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_IMAGES: {
            const newState = {};
            action.payload.forEach((image) => {
                newState[image.id] = image;
            })
            return newState;
        }
        case ADD_IMAGE: {
            const newState = Object.assign({}, state);
            newState[action.payload.id] = action.payload
            return newState;
        }
        case DELETE_IMAGE: {
            const newState = Object.assign({}, state);
            delete newState[action.payload.id];
            return newState;
        }
        default: {
            return state;
        }
    }
};

export default imagesReducer;
