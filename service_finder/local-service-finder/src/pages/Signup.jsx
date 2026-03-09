import "./Signup.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import { signup } from "../services/authService";

function Signup() {

  const [formData, setFormData] = useState({
    fullname: "",
    serviceType: "",
    phoneNumber: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: ""
   });

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
   };

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signup(formData);
      alert("Signup Successful");
      console.log(res.data);
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
  };




  return (


    <div className="signup-page">
      <div className="signup-container">

        {/* Left Image Section */}
        <div className="signup-left"></div>

        {/* Right Form Section */}
        <div className="signup-right">

          <div className="form-grid-signup">

            <div className="form-group-signup">
              <label>Full name :</label>
              <input type="text"
              name="fullName"
              onChange={handleChange} />
            </div>

            <div className="form-group-signup">
              <label>Service Type :</label>
              <input type="text" 
              name="serviceType"
              onChange={handleChange} />
            </div>

            <div className="form-group-signup">
              <label>Phone Number :</label>
              <input type="text" 
              name="phoneNumber"
              onChange={handleChange} />
            </div>

            <div className="form-group-signup">
              <label>Location :</label>
              <input type="text" 
              name="location"
              onChange={handleChange} />
            </div>

            <div className="form-group-signup">
              <label>Email :</label>
              <input type="email" 
              name="email"
              onChange={handleChange} />
            </div>

            <div className="form-group-signup">
              <label>Password :</label>
              <input type="password" 
              name="password"
              onChange={handleChange} />
            </div>

            <div className="form-group full">
              <label>Confirm Password :</label>
              <input type="password" 
              name="confirmPassword"
              onChange={handleChange} />
            </div>

          </div>

          <button className="create-btn" onClick={handleSubmit}>Create Account</button>

            <p className="login-link">
              Already have an account? <Link to="/signin">Login</Link>
            </p>

        </div>

      </div>
    </div>
  );
}

export default Signup;