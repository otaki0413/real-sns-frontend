import { Rightbar } from "../../components/rightbar/Rightbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Timeline } from "../../components/timeline/Timeline";
import { Topbar } from "../../components/topbar/Topbar";
import post3 from "src/assets/post/3.jpeg";
import person1 from "src/assets/person/1.jpeg";
import "./Profile.css";

export const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={post3}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={person1}
                alt=""
                className="profilePersonImg"
              />
              <div className="profileInfo">
                <h4 className="profileInfoName">Otaki</h4>
                <span className="profileInfoDesc">プログラミングを勉強しています。</span>
              </div>
            </div>
          </div>
          <div className="profileRightBottom">
            <Timeline />
            <Rightbar />
          </div>
        </div>
      </div>
    </div>
  );
};
