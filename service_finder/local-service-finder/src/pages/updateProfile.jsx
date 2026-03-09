import { useState } from "react";
import "./updateProfile.css";

function UpdateProfile() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile updated");
  };

  return (
    <div className="update-container">
      <div className="update-card">

        <h2>Update Profile</h2>
        

        <form onSubmit={handleSubmit}>

          <div className="form-row">
            <label>Email :</label>
            <input type="email" required />
          </div>

          <div className="form-row">
            <label>Current Password :</label>
            <input type="password" required />
          </div>

          <div className="form-row">
            <label>New Password :</label>
            <input type="password" required />
          </div>

          <div className="form-row">
            <label>Confirm Password :</label>
            <input type="password" required />
          </div>

          <div className="form-row">
            <label>Profile Picture :</label>
            <input type="file" onChange={handleImageUpload} />
          </div>

          {image && (
            <div className="image-preview">
              <img src={image} alt="preview" />
            </div>
          )}

          <div className="update-btn-container">
            <button type="submit">Update</button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default UpdateProfile;