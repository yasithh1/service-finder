import "./Hero.css";
import heroImage from "../assets/heroimg.png";
import { Link , useNavigate  } from "react-router-dom";
import { useState } from "react";




function Hero() {


  const navigate = useNavigate();
  const [search, setSearch] = useState("");



  const handleSearch = () => {
  navigate("/services", { state: { search } });
  };

  const handleCategory = (category) => {
  navigate("/services", { state: { search: category } });
  };


  return (
    <>
   
   <div className="container">

      <section className="hero">

        {/* Search Box Top Center */}
        <div className="search-top">
         <input
           type="text"
           placeholder="Search services..."
           value={search}
           onChange={(e) => setSearch(e.target.value)}
          />

          <div className="search-btn">
            <button onClick={handleSearch}>Search</button>

          </div>
        </div>

        <div className="hero-content">
          {/* Left Image */}
          <div className="hero-image">
            <img src={heroImage} alt="Service Illustration" />
          </div>

          {/* Right Text */}
          <div className="hero-text">
            <h1>
              <span className="highlight">Find Trusted</span><br />
              Local Services Near You
            </h1>
            <p>
              Search electricians, plumbers, cleaners and more in your area
            </p>
          </div>
        </div>

      </section>  
    </div>
  <div className="container">
      {/* Service Section */}
      <section id="services" className="services">
        <h2>Service Categories</h2>

        <div className="service-grid">
          <div className="service-card" onClick={() => handleCategory("Electrician")}>
           🛠 Electrician
          </div>

           <div className="service-card" onClick={() => handleCategory("Plumber")}>
            🚰 Plumber
           </div>

           <div className="service-card" onClick={() => handleCategory("Carpenter")}>
            🪚 Carpenter
           </div>


         <div className="service-card" onClick={() => handleCategory("Electrician")}>
           🛠 Electrician
          </div>

           <div className="service-card" onClick={() => handleCategory("Plumber")}>
            🚰 Plumber
           </div>

           <div className="service-card" onClick={() => handleCategory("Carpenter")}>
            🪚 Carpenter
           </div>

        </div>
      </section>
      </div>

 <div className="container">
      {/* Footer */}
 <footer className="footer">
  <div className="footer-container">

    <div className="footer-section">
      <h3>LocalFinder</h3>
      <p>Find trusted local professionals near you quickly and easily.</p>
    </div>

    <div className="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Services</h4>
      <ul>
        <li>Electrician</li>
        <li>Plumber</li>
        <li>Carpenter</li>
        <li>Cleaner</li>
      </ul>
    </div>

    <div className="footer-section">
      <h4>Contact</h4>
      <p>Email: support@localfinder.com</p>
      <p>Phone: +94 77 123 4567</p>
      <p>Location: Sri Lanka</p>
    </div>

   </div>

   <div className="footer-bottom">
    © {new Date().getFullYear()} LocalFinder. All rights reserved.
   </div>
   </footer>
   </div>
    </>
  );
}

export default Hero;