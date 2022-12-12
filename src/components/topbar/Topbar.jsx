import userLogo from "../../assets/person/1.jpeg";

export const Topbar = () => {
  return (
    <div className="container">
      <div className="topbarLeft">
        <span className="logo">Real SNS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <input
            type="text"
            className="searchInput"
            placeholder="ここに入力してね！"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="iconMsg">1</div>
        <div className="iconNotification">2</div>
      </div>
      <img
        src={userLogo}
        alt=""
        className="iconUserImg"
      />
    </div>
  );
};
