import { Chat, Notifications, Search } from "@mui/icons-material";
import userLogo from "../../assets/person/1.jpeg";

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
        <div className="icon">
          <Chat className="chatIcon" />2
        </div>
        <div className="iconNotification">
          <Notifications className="notificationIcon" />1
        </div>
      </div>
      <img
        src={userLogo}
        alt=""
        className="iconUserImg"
      />
    </div>
  );
};
