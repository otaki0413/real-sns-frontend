import "./rightbar.css";
import profileImg from "../../assets/person/1.jpeg";
import starImg from "../../assets/star.png";
import eventImg from "../../assets/event.jpeg";

export const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="eventContainer">
          <img
            src={starImg}
            alt="スター画像"
            className="starImg"
          />
          <span className="eventText">
            <b>フォロワー限定</b>イベント開催中
          </span>
        </div>
        <img
          src={eventImg}
          alt="イベント画像"
          className="eventImg"
        />
        <h4 className="rightbarTitle">オンラインの友達</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={profileImg} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">otaki</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src={profileImg} alt="" className="rightbarProfileImg" />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">otaki</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
