import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages } from "../../store/image";
import { getTheLikes } from "../../store/likes";
import { getComments } from "../../store/comment";
import {
  getFollowers,
  getFollowings,
  followUser,
  unfollowUser,
} from "../../store/follow";
import { useParams } from "react-router-dom";
import './ProfilePage.css'

import NavBar from "../Navbar";

const ProfilePage = (props) => {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const images = useSelector((state) => state.images);
  const likes = useSelector((state) => state.likes);
  const likesArr = Object.values(likes);
  const comments = useSelector((state) => state.comments);
  const commentsArr = Object.values(comments);
  const followings = useSelector((state) => state.follows.followings);
  const followers = useSelector((state) => state.follows.followers);
  const { userId: profileId } = useParams();
  const [users, setUsers] = useState([]);

  const userImages = Object.values(images).filter(
    (image) => image.user_id === +profileId
  );
  const followingsArr = Object.values(followings || {});
  const followersArr = Object.values(followers || {});

  useEffect(() => {
    dispatch(getUserImages(profileId));
    dispatch(getTheLikes());
    dispatch(getComments());
    dispatch(getFollowings(profileId));
    dispatch(getFollowers(profileId)); async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, [dispatch, user, profileId]);

  const followProfileUser = (profileId) => {
    dispatch(followUser(user.id, +profileId));
  };

  const unfollowProfileUser = (profileId) => {
    dispatch(unfollowUser(user.id, +profileId));
  };
  const getLikes = (imageId) => {
    const likes = likesArr.filter((like) => like.image_id === imageId);
    return likes.length;
  };
  const checkComments = (imageId) => {
    const comments = commentsArr.filter((like) => like.image_id === imageId);
    return comments.length;
  };

  const getUser = (userId) => users.filter((user) => user.id === +userId)[0];

  return (
    <div>
      <NavBar />
      <header className="profile-header-container">
        <div className="profile-avatar">
          <p
          //  srcSet={getUser(profileId)?.avatar} 
           sx={{ width: 150, height: 150 }}>Avatar</p>
        </div>
        <div className="column">
          <div className="profile-top-row">
            <p>{getUser(profileId)?.username}</p>
            {+profileId !== user.id ? (
              <div>
                {followersArr.filter(
                  (profileUser) => +profileUser.id === +user.id
                ).length === 0 ? (
                  <button
                    className="profile-follow-button"
                    onClick={(event) => followProfileUser(profileId)}
                  >
                    <p width={18}>Add User</p> 
                  </button>
                ) : (
                  <button
                    className="profile-unfollow-button"
                    onClick={(event) => unfollowProfileUser(profileId)}
                  >
                    <p width={18}>User Icon</p>
                  </button>
                )}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="profile-middle-row">
            <p>
              <span className="post-number">{userImages.length}</span> posts
            </p>
            <p className="followers">
              <span className="followers-number">{followersArr.length} </span>
              followers
            </p>
            <p>
              <span className="following-number">{followingsArr.length} </span>
              following
            </p>
          </div>
          <div className="profile-bottom-row">
            <h4>{getUser(profileId)?.email}</h4>
            <p>Description coming soon...</p>
          </div>
        </div>
      </header>
      <div className="image-container-body">
        <div className="image-container">
          {userImages.map((image) => (
            <div className="image-wrapper">
              <img
                className="profile-image"
                src={image.url}
                alt="user_upload"
              ></img>
              <div className="image-info">
                <p className="info-container">
                  <p className="profile-image-heart">Heart</p>
                  {getLikes(image.id)}
                </p>
                <p className="info-container">
                  <p className="profile-image-comment"> Chat </p>
                  {checkComments(image.id)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
