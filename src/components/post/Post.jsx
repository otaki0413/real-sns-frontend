import "./Post.css";
import userLogo from "../../assets/person/1.jpeg";
import { MoreVert } from "@mui/icons-material";
import postImg1 from "../../assets/post/1.jpeg";
import heartImg from "../../assets/heart.png";

export const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <img
            src={userLogo}
            alt="ユーザのアイコンです"
            className="postProfileImg"
          />
          <span className="postUserName">otaki</span>
          <span className="postDate">5分前</span>
        </div>
        <div className="postRight">
          <MoreVert />
        </div>
        <div className="postCenter">
          <span className="postText">ReactでSNSを作成中です</span>
          <img
            src={postImg1}
            alt="投稿画像1"
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={heartImg}
              alt=""
              className="heartIcon"
            />
            <span className="postLikeCounter">5人がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">4:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};
