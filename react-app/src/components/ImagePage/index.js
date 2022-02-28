import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImage, deleteOneImage } from "../../store/image";
import { createComment } from "../../store/comment";
import { getTheLikes, setOneLike, unOneLike } from "../../store/likes";
import './ImagePage.css'

import full from '../../assets/heart.png'
import empty from '../../assets/emptyHeart.png'




import EditFormPage from "../EditFormPage";
import { useHistory } from "react-router-dom";

const ImagePage = (props) => {
  const userId = useSelector((state) => state.session.user.id);
  const likes = useSelector((state) => state.likes);
  const likesArr = Object.values(likes);
  const keys = Object.keys(likes);
  const likedImages = likesArr.filter((like) => like.user_id === userId);
  const dispatch = useDispatch();
  const history = useHistory();

  const [buttonPopup, setButtonPopup] = useState(0);
  const [showImageOptions, setShowImageOptions] = useState(false);
  const [showEditDelete, setShowEditDelete] = useState(0);

  const body = document.body;

  // working with imagesPage file
  const [contentB, setContentB] = useState("");
  const [editB, setEditB] = useState(false);
  const [commentShowB, setCommentShowB] = useState(0);
  const [commentIdB, setCommentIdB] = useState(-6);

  useEffect(() => {
    dispatch(getImage(props.image.id));
    dispatch(getTheLikes());
  }, [dispatch, props.image.id]);

  const handleClick = (e) => {
    const imagePage = document.querySelector(".image-page-body");
    if (e.target === imagePage) {
      body.style.overflow = "visible";
      props.setTrigger(0);
    }
  };

  // const handleLike = (e) => {
  //   e.preventDefault();

  //   const image_id =
  //     e.target.farthestViewportElement.className.baseVal.split(" ")[1];

  //   if (
  //     keys.filter(
  //       (key) =>
  //         likes[key].image_id === +image_id && likes[key].user_id === userId
  //     ).length
  //   ) {
  //     dispatch(unOneLike(image_id));
  //   } else dispatch(setOneLike(image_id));
  // };

  const newHandleLike = (event) => {
    event.preventDefault();

    console.log(event.target.className.match(/\d+/)[0])
    const image_id = event.target.className.match(/\d+/)[0];

    dispatch(setOneLike(image_id));
  };

  const handleUnlike = (event) => {
    event.preventDefault();
    const image_id =
      event.target.className.match(/\d+/)[0];

    dispatch(unOneLike(image_id));
  };

  const checkIfLiked = (imageId) => {
    for (let i = 0; i < likedImages.length; i++) {
      if (+likedImages[i].image_id === +imageId) return true;
    }
    return false;
  };

  useEffect(() => {
    document.body.addEventListener("click", handleClick);
  }, [handleClick]);

  const getUser = (userId) =>
    props.users.filter((user) => user.id === userId)[0];

  const commentFunction = (e) => {
    const submitButton = document.querySelector(".comment-submit-button");
    if (e.target.value !== "") submitButton.style.opacity = ".9";
    else submitButton.style.opacity = ".4";
  };

  return props.trigger === props.image.id ? (
    <div className="image-page-body">
      {showImageOptions && userId === props.image.user_id && (
        <div className="image-post-options">
          <button className={props.image.id} onClick={props.handleDelete}>
            Delete
          </button>
          <button onClick={() => setButtonPopup(props.image.id)}>Edit</button>
          <button onClick={() => setShowImageOptions(!showImageOptions)}>
            Close
          </button>
          <EditFormPage
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
            image={props.image}
          />
        </div>
      )}
      <div className="image-page-con">
        <div className="image-page-left">
          <img
            className={"image-page-image"}
            src={`${props.image.url}`}
            alt="user-upload"
          ></img>
        </div>
        <div className="image-page-right">
          <div className="image-page-header">
            <img
              src={getUser(props.image.user_id).avatar}
              className="image-page-avatar"></img>
            <p>{getUser(props.image.user_id)?.username}</p>
            {props.image.user_id === userId && (
              <p
                className="image-options-icon"
                onClick={() => setShowImageOptions(!showImageOptions)}> ... </p>
            )}
          </div>
          {props.commentsArray && (
            <div className="image-page-comment-container">
              <div className="image-page-user-caption-con">
                {/* <img
                  src={getUser(props.image.user_id).avatar}
                  className="image-page-caption-avatar"></img> */}

                {/* <div className="image-page-username">
                  {getUser(props.image.user_id)?.username}
                </div> */}
                <div className="image-page-caption">{props.image.caption}</div>
              </div>
              {props.commentsArray?.map((comment) => {
                if (comment.image_id === props.image.id) {
                  return (
                    <div
                      className='ind-comment'
                      id="ind-comment"
                    >
                      {/* <div className="image-page-comment-header"> */}


                        <div
                          className="image-page-ava-un"
                          onClick={() => {
                            history.push(`/users/${comment.user_id}`);
                            document.body.style.overflow = "visible";
                          }}
                        >
                          <img
                            src={getUser(comment.user_id).avatar}
                            className="image-page-comment-avatar"></img>
                          <p className="image-page-comment-username">
                            {getUser(comment.user_id)?.username}
                          </p>
                        </div>






                        {/* <div className="commentDiv"> */}
                          <p className='imgCom'>
                            {comment.content}
                          </p>
                        {/* </div> */}
                        {comment.user_id === userId && (
                          <p
                            className="ind-comment-option-toggle"
                            id={`comment-options-${comment.id}`}
                            onClick={() => setShowEditDelete(comment.id)}> ... </p>
                        )}
                      {/* </div> */}
                      {showEditDelete === comment.id &&
                        userId === comment.user_id && (
                          <div className="image-post-options">
                            <button
                              onClick={(e) => {
                                props.onDeleteComment(
                                  props.image.id,
                                  comment.id,
                                );
                              }}
                            >
                              Delete
                            </button>
                            <button
                              onClick={() => {
                                setEditB(true);
                                props.setEditB(true);
                                setCommentShowB(props.image.id);
                                setCommentIdB(comment.id);
                                setContentB(
                                  `${props.comments[comment.id].content}`
                                );
                                setShowEditDelete(0)
                              }}
                            >
                              Edit
                            </button>
                            <button onClick={() => setShowEditDelete(0)}>
                              Close
                            </button>
                          </div>
                        )}
                    </div>
                  );
                }
                return "";
              })}
            </div>
          )}
          <div className="image-page-footer">
            <div className="image-page-options-container">
              {checkIfLiked(props.image.id) ? (




                <img src={full}
                  className={`post-footer-icon ${props.image.id} liked-icon`}
                  onClick={handleUnlike}></img>
              ) : (
                <img src={empty}
                  className={`post-footer-icon ${props.image.id}`}
                  onClick={newHandleLike}></img>




              )}
              {/* <p
                className="image-page-options-icon"
                onClick={() => {
                  if (commentShowB === props.image.id) {
                    setCommentShowB(0);
                  } else {
                    setCommentShowB(props.image.id);
                    // body.getElementById
                  }
                  setContentB("");
                  setEditB(false);
                }}
              >Chat</p> */}
            </div>
            {editB === false &&
              props.postCommentForm(
                props.image.id,
                props.onContentSubmit,
                contentB,
                setContentB
              )}
            {editB === true &&
              props.editB &&
              props.editCommentForm(
                props.image.id,
                commentIdB,
                props.onEditComment,
                contentB,
                setContentB
              )}
          </div>

          <button className="x-button-wrap" onClick={() => props.setTrigger(0)}>
            <p
              onClick={() => {
                body.style.overflow = "visible";
              }}
              className="image-page-close"
            >X</p>
          </button>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ImagePage;
