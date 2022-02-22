import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getComments } from "../../store/comment";
import { followUser, getFollowers, getFollowings, addToFollowing } from "../../store/follow";
import { getUserImages } from "../../store/image";
import { getTheLikes } from "../../store/likes";

const SideBar = (props) => {
  const user = useSelector((state) => state.session.user);
  const following = useSelector((state) => state.follows.followings);
  const history = useHistory();
  const dispatch = useDispatch();

  const followProfileUser = (profileId) => {
    const container = document.querySelector(`#suggestion-${profileId}`)
    dispatch(followUser(user.id, +profileId));
    container.style.display = "none";
  };

  const followingArr = Object.values(following || {});
  const usersToFollow = [];
  const followingSet = new Set();
  for (let i = 0; i < followingArr.length; i++) {
    const user = followingArr[i];
    followingSet.add(user.id);
  }
  for (let i = 0; i < props.users.length; i++) {
    const user = props.users[i];
    if (!followingSet.has(user.id)) {
      usersToFollow.push(user);
    }
  }

  useEffect(() => {
    dispatch(getFollowings(user.id));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getUserImages(user.id));
    dispatch(getTheLikes());
    dispatch(getComments());
    dispatch(getFollowings(user.id));
    dispatch(getFollowers(user.id));
  }, [dispatch, user, user.id]);

  return (
    <div className="sidebar-container">
      <div
        className="sidebar-header"
        onClick={() => history.push(`/users/${user.id}`)}
      >
        <p 
        // srcSet={user.avatar} className="sidebar-avatar" sx={{ width: 84, height: 84 }}
        >Avatar</p>
        <div className="sb-username-email">
          <p className="sidebar-username">{user.username}</p>
          <p className="sidebar-email">{user.email}</p>
        </div>
      </div>
      <p className="suggestions-text">Suggestions for you</p>
      <div className="suggestions-body">
        {usersToFollow?.slice(0, 8).map((userToFollow) => (
          <>
            {userToFollow.username !== user.username && (
              <div id={`suggestion-${userToFollow.id}`}className="suggestion">
                <div
                  className="suggestion-link"
                  onClick={() => history.push(`/users/${userToFollow.id}`)}
                >
                  <div className="suggestion-avatar">
                    <p
                    // srcSet={userToFollow.avatar}
                     >Avatar</p>
                  </div>
                  <p className="suggestion-username">{userToFollow.username}</p>
                </div>
                <div>
                  <p
                    className="suggestion-follow"
                    onClick={() => {
                      const utfId = +userToFollow.id;

                      followProfileUser(utfId);
                    }}
                  >
                    Follow
                  </p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
