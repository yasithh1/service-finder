import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/finder_logo.png";

function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-container">

        <div className="signin-logo-box">
          <img src={logo} alt="logo" />
        </div>

        <form className="signin-form-ss" onSubmit={handleSignin}>

          <label>Username :</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password :</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <a href="#" className="forgot">forgot password</a>

          <button className="signin-btn" type="submit">Sign in</button>

        </form>

        <div className="divider">
          <span></span>
          <span></span>
        </div>

        <div className="social-login">
          <div className="social-box"></div>
          <div className="social-box"></div>
          <div className="social-box"></div>
        </div>

        <p className="signup-link">
          Don't have an account ? <a href="/signup">Sign Up</a>
        </p>

      </div>
    </div>
  );
}

export default Signin;
