import "./updateService.css";
import { useState } from "react";

function UpdateService() {

  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    <div className="update-container">
      <div className="update-card">

        <h2>Update Service</h2>

        <div className="form-grid">

          <div className="form-left">
            <label>Full name :</label>
            <input type="text" />

            <label>Location :</label>
            <input type="text" />

            <label>Phone number :</label>
            <input type="text" />
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

        <button className="update-btn">Update</button>

      </div>
    </div>
  );
}

export default UpdateService;