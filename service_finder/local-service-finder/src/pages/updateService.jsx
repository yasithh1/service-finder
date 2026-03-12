import "./updateService.css";
import { useState, useEffect } from "react";
import axios from "axios";

function UpdateService() {

  const userId = localStorage.getItem("userId");
  console.log("User ID:", userId);

  const [images, setImages] = useState([]);

  const [formData, setFormData] = useState({
    full_name: "",
    serviceType: "",
    phone: "",
  });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/api/workers/user/${userId}`)
      .then((response) => {
        setFormData(response.data);
      });
  }, [userId]);

  const handleUpdate = async () => {

    const data = new FormData();

    data.append("full_name", formData.full_name);
    data.append("serviceType", formData.serviceType);
    data.append("phone", formData.phone);

    if(images.length > 0){
      data.append("profile_image", images[0]);
    }

    try {

      await axios.put(
        `http://localhost:8080/api/workers/update-service/${userId}`,
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

  return (
    <div className="update-container">
      <div className="update-card">

        <h2>Update Service</h2>

        <div className="form-grid">

          <div className="form-left">
            <label>Full name :</label>
            <input
              type="text"
              value={formData.full_name}
              onChange={(e)=>setFormData({...formData, full_name:e.target.value})}
            />

            <label>Service Type :</label>
            <input
              type="text"
              value={formData.serviceType}
              onChange={(e)=>setFormData({...formData, serviceType:e.target.value})}
            />

            <label>Phone number :</label>
            <input
              type="text"
              value={formData.phone}
              onChange={(e)=>setFormData({...formData, phone:e.target.value})}
            />
          </div>

          <div className="form-right">

            <label>Upload images :</label>
            <input type="file" multiple onChange={handleImageUpload} />

            <div className="image-preview">
              {images.map((file, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="preview-img"
                />
              ))}
            </div>

          </div>

        </div>

        <button className="update-btn" onClick={handleUpdate}>
          Update
        </button>

      </div>
    </div>
  );
}

export default UpdateService;