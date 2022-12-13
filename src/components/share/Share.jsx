import "./Share.css";
import userLogo from "../../assets/person/1.jpeg";
import { Analytics, Face, Gif, Image } from "@mui/icons-material";

export const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={userLogo}
            alt=""
            className="shareProfileImg"
          />
          <input
            type="text"
            className="shareInput"
            placeholder="今何しているの？"
          />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareButtons">
            <div className="shareButton">
              <Image
                className="shareIcon"
                htmlColor="blue"
              />
              <span className="shareIconText">画像</span>
            </div>
            <div className="shareButton">
              <Gif
                className="shareIcon"
                htmlColor="hotpink"
              />
              <span className="shareIconText">GIF</span>
            </div>
            <div className="shareButton">
              <Face
                className="shareIcon"
                htmlColor="green"
              />
              <span className="shareIconText">気持ち</span>
            </div>
            <div className="shareButton">
              <Analytics
                className="shareIcon"
                htmlColor="red"
              />
              <span className="shareIconText">投票</span>
            </div>
          </div>
          <button className="sharePostButton">投稿</button>
        </div>
      </div>
    </div>
  );
};
