import React, { useState } from "react";
import "./Services.css";
import { useLocation } from "react-router-dom";


const Services = () => {

    const location = useLocation();
    const initialSearch = location.state?.search || "";
    const [search, setSearch] = useState(initialSearch);
    const [searchInput, setSearchInput] = useState("");





  const workers = [
    { name: "John Silva", type: "Plumber", location: "Colombo", phone: "0771234567" },
    { name: "Kasun Perera", type: "Electrician", location: "Kandy", phone: "0719876543" },
    { name: "Nimal Fernando", type: "Carpenter", location: "Galle", phone: "0754567890" }
  ];

  // Filter workers
  const filteredWorkers = workers.filter((worker) =>
    worker.name.toLowerCase().includes(search.toLowerCase()) ||
    worker.type.toLowerCase().includes(search.toLowerCase()) ||
    worker.location.toLowerCase().includes(search.toLowerCase())
  );

    const handleSearch = () => {
     setSearch(searchInput);
    };

  return (
    <div className="services-page">

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search service..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button onClick={handleSearch}>
          Search
         </button>
      </div>

      <div className="card-container">
        {filteredWorkers.map((worker, index) => (
          <div className="worker-card" key={index}>

            <div className="card-image"></div>

            <div className="card-info">
              <p><b>Worker Name :</b> {worker.name}</p>
              <p><b>Service Type :</b> {worker.type}</p>
              <p><b>Location :</b> {worker.location}</p>
              <p><b>Phone number :</b> {worker.phone}</p>

              <div className="services-buttons">
                <button className="call">Call</button>
                <button className="whatsapp">Whatsapp</button>
              </div>

              <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;
