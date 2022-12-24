import person1 from "src/assets/person/1.jpeg";
import person2 from "src/assets/person/2.jpeg";
import person3 from "src/assets/person/3.jpeg";
import person4 from "src/assets/person/4.jpeg";
import person5 from "src/assets/person/5.jpeg";
import "./ProfileRightbar.css";

export const ProfileRightBar = () => {
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
