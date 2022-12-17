import "./Rightbar.css";
import profileImg from "../../assets/person/1.jpeg";
import promotionImg1 from "../../assets/promotion/promotion1.jpeg";
import promotionImg2 from "../../assets/promotion/promotion2.jpeg";
import promotionImg3 from "../../assets/promotion/promotion3.jpeg";
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
              <img
                src={profileImg}
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">otaki</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={profileImg}
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarOnlineBadge"></span>
            </div>
            <span className="rightbarUserName">otaki</span>
          </li>
        </ul>
        <p className="promotionTitle">プロモーション広告</p>
        <img
          src={promotionImg1}
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">ショッピング</p>
        <img
          src={promotionImg2}
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">トヨタ自動車</p>
        <img
          src={promotionImg3}
          alt=""
          className="rightbarPromotionImg"
        />
        <p className="promotionName">Apple</p>
      </div>
    </div>
  );
};
