import "./Online.css";
export const Online = (props) => {
  const { user } = props;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={user.profilePicture}
          alt="オンラインの友達の画像"
          className="rightbarProfileImg"
        />
        <span className="rightbarOnlineBadge"></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
};
