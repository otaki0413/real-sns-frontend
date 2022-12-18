import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import heartImg from "../../assets/heart.png";
import "./Post.css";
import { useState } from "react";

export const Post = (props) => {
  const { post } = props;
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const userName = Users.filter((user) => user.id === post.id)[0].username;
  const profilePicture = Users.filter((user) => user.id === post.id)[0]
    .profilePicture;

  // いいねボタン押下時の処理
  const handleLike = () => {
    setLike((currentCount) => (isLiked ? currentCount - 1 : currentCount + 1));
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={profilePicture}
              alt="ユーザのアイコンです"
              className="postProfileImg"
            />
            <span className="postUserName">{userName}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img
            src={post.photo}
            alt="投稿画像1"
            className="postImg"
          />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={heartImg}
              alt="いいねの画像"
              className="heartImg"
              onClick={() => handleLike()}
            />
            <span className="postLikeCounter">
              {like}人がいいねを押しました
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
};
