import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h2 className="loginLogo">Real SNS</h2>
          <span className="loginDesc">本格的なSNSを自分の手で！</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">ログインはこちら</p>
            <input
              type="text"
              className="loginInput"
              placeholder="Eメール"
            />
            <input
              type="text"
              className="loginInput"
              placeholder="パスワード"
            />
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button className="loginRegisterButton">アカウント作成</button>
          </div>
        </div>
      </div>
    </div>
  );
};
