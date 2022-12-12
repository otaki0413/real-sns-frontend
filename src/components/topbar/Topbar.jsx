import { Chat, Notifications, Search } from "@mui/icons-material";
import userLogo from "../../assets/person/1.jpeg";
import "./Topbar.css";

export const Topbar = () => {
  return (
    <div className="container">
      <div className="topbarLeft">
        <span className="logo">Real SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="ここに入力してね！"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarItemIcons">
          <div className="topbarItemIcon">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarItemIcon">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <img
            src={userLogo}
            alt=""
            className="iconUserImg"
          />
        </div>
      </div>
    </div>
  );
};
