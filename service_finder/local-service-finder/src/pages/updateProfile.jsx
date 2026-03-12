import { useState, useEffect} from "react";
import axios from "axios";
import "./updateProfile.css";

function UpdateProfile() {
  const [image, setImage] = useState(null);

  const userId = localStorage.getItem("userId");
  console.log("User ID:", userId);

  const [images, setImages] = useState([]);

  const [formData, setFormData] = useState({
  email: "",
  currentPassword: "",
  newPassword: "",
  confirmPassword: ""
 });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/workers/user/${userId}`)
      .then((response) => {
        response.data.user.email
      });
  }, [userId]);

  const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImage(URL.createObjectURL(file));
    setImages([file]); // store real file
  }
};

  const handleUpdate = async () => {

    if(formData.newPassword !== formData.confirmPassword){
      alert("Passwords do not match");
      return;
    }

    const data = new FormData();
    
    data.append("email", formData.email);
    data.append("currentPassword", formData.currentPassword);
    data.append("newPassword", formData.newPassword);

    if(images.length > 0){
      data.append("profile_image", images[0]);
    }

    try {

      await axios.put(
        `http://localhost:8080/api/workers/update-profile/${userId}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );

      alert("Profile Updated");

    } catch (error) {
      console.error(error);
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
            <input type="email" 
             value={formData.email}
             onChange={(e)=>setFormData({...formData, email:e.target.value})}
             required />
          </div>

          <div className="form-row">
            <label>Current Password :</label>
            <input type="password" 
            value={formData.currentPassword}
            onChange={(e)=>setFormData({...formData, currentPassword:e.target.value})}
            required />
          </div>

          <div className="form-row">
            <label>New Password :</label>
            <input type="password" 
            value={formData.newPassword}
            onChange={(e)=>setFormData({...formData, newPassword:e.target.value})}
            required />
          </div>

          <div className="form-row">
            <label>Confirm Password :</label>
            <input type="password" 
            value={formData.confirmPassword}
            onChange={(e)=>setFormData({...formData, confirmPassword:e.target.value})}
            required />
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
            <button type="submit" onClick={handleUpdate}>Update</button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default UpdateProfile;