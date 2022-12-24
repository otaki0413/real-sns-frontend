import { HomeRightBar } from "src/components/rightbar/home/HomeRightbar";
import { ProfileRightBar } from "src/components/rightbar/profile/ProfileRightbar";
import "./Rightbar.css";

export const Rightbar = (props) => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {props.profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
};
