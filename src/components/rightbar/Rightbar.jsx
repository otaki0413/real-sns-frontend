import person1 from "src/assets/person/1.jpeg";
import person2 from "src/assets/person/2.jpeg";
import person3 from "src/assets/person/3.jpeg";
import person4 from "src/assets/person/4.jpeg";
import person5 from "src/assets/person/5.jpeg";
import promotionImg1 from "../../assets/promotion/promotion1.jpeg";
import promotionImg2 from "../../assets/promotion/promotion2.jpeg";
import promotionImg3 from "../../assets/promotion/promotion3.jpeg";
import starImg from "../../assets/star.png";
import eventImg from "../../assets/event.jpeg";
import { Users } from "../../dummyData";
import { Online } from "src/components/online/Online";
import "./Rightbar.css";

export const Rightbar = (props) => {
  const HomeRightBar = () => {
    return (
      <>
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
          {Users.map((user) => (
            <Online
              user={user}
              key={user.id}
            />
          ))}
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
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">出身：</span>
            <span className="rightbarInfoKey">石川</span>
          </div>
          <h4 className="rightbarTitle">あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src={person1}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">otaki</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={person2}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">otaki</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={person3}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">mike</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={person4}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src={person5}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">mika</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {props.profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};
