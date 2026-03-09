import "./Navbar.css";
import heroImage from "../assets/finder_logo.png";
import { Link  } from "react-router-dom";


import { useState } from "react";

function AuthToggle() {
  const [active, setActive] = useState("signup");

  return (
    <div className="auth-toggle">
      <button
        className={`toggle-btn ${active === "signup" ? "active" : ""}`}
        onClick={() => setActive("signup")}
      >
        Sign up
      </button>

      <button
        className={`toggle-btn ${active === "signin" ? "active" : ""}`}
        onClick={() => setActive("signin")}
      >
        Sign in
      </button>
    </div>
  );
}


function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
         <img src={heroImage} alt="Service Illustration" />
      </div>

      <div className="auth-toggle">
  <button className="toggle-btn active"><Link to="/signup">Sign up</Link></button>
  <button className="toggle-btn"> <Link to="/signin">Sign in</Link></button>
</div>
    </nav>
  );
}

export default Navbar;