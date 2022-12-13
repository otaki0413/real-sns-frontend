import {
  Bookmark,
  Home,
  MessageRounded,
  Notifications,
  Person,
  Search,
  Settings,
} from "@mui/icons-material";
import friendLogo2 from '../../assets/person/2.jpeg'
import friendLogo3 from '../../assets/person/3.jpeg'
import friendLogo4 from '../../assets/person/4.jpeg'
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Home className="sidebarIcon" />
            <span className="sidebarListItemText">ホーム</span>
          </li>
          <li className="sidebarListItem">
            <Search className="sidebarIcon" />
            <span className="sidebarListItemText">検索</span>
          </li>
          <li className="sidebarListItem">
            <Notifications className="sidebarIcon" />
            <span className="sidebarListItemText">通知</span>
          </li>
          <li className="sidebarListItem">
            <MessageRounded className="sidebarIcon" />
            <span className="sidebarListItemText">メッセージ</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">ブックマーク</span>
          </li>
          <li className="sidebarListItem">
            <Person className="sidebarIcon" />
            <span className="sidebarListItemText">プロフィール</span>
          </li>
          <li className="sidebarListItem">
            <Settings className="sidebarIcon" />
            <span className="sidebarListItemText">設定</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src={friendLogo2}
              alt="フレンド2"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Otaki</span>
          </li>
          <li className="sidebarFriend">
            <img
              src={friendLogo3}
              alt="フレンド2"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Tanaka</span>
          </li>
          <li className="sidebarFriend">
            <img
              src={friendLogo4}
              alt="フレンド2"
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Takegawa</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
