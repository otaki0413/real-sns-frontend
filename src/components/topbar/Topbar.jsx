import React from "react";

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
        src="/assets/person/1.jpg"
        alt=""
        className="iconUserImg"
      />
    </div>
  );
};
