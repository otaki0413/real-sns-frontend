import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import heartImg from "../../assets/heart.png";
import "./Post.css";

export const Post = (props) => {
  const { post } = props;
  const userName = Users.filter((user) => user.id === post.id)[0].username;
  const profilePicture = Users.filter((user) => user.id === post.id)[0]
    .profilePicture;

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
              alt=""
              className="heartImg"
            />
            <span className="postLikeCounter">
              {post.like}人がいいねを押しました
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
