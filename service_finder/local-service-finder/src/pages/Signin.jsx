import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/finder_logo.png";
import { signin } from "../services/authService";


function Signin() {
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await signin(formData);

      console.log(response.data);
      // SAVE ID
      localStorage.setItem("userId", response.data.id);

      alert("Login Successful");
      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Email or Password");

    }
  };

  

  return (
    <div className="signin-page">
      <div className="signin-container">

        <div className="signin-logo-box">
          <img src={logo} alt="logo" />
        </div>

        <form className="signin-form-ss" onSubmit={handleLogin}>

          <label>Email :</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />

          <label>Password :</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
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
