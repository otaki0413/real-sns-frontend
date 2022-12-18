export const CloseFriend = (props) => {
  const { user } = props;
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={user.profilePicture}
          alt="近くの友達"
          className="sidebarFriendImg"
        />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};
