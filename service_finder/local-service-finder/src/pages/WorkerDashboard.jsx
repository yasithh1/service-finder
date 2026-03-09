import { User } from 'lucide-react';
import './WorkerDashboard.css';
import { useNavigate } from "react-router-dom";


function WorkerDashboard({ workerName = 'Petter' }) {
  const navigate = useNavigate();
  const handleEditProfile = () => {
  navigate("/update-profile");
};

 const handleUpdateService = () => {
  navigate("/update-service");
 };

 const handleViewOrders = () => {
  navigate("/vieworders");
 };

 const addOrderDetails = () => {
  navigate("/orders");
};


  const handleLogout = () => {
    console.log('Logout clicked');
  };

  return (
    <div className="worker-dashboard">
      <header className="worker-header">
        <div className="logo-container">
          <div className="logo-box">
            <User className="logo-icon" size={24} />
          </div>
        </div>
      </header>

      <main className="worker-main">
        <h1 className="welcome-title">
          Welcome, {workerName}
        </h1>

        <div className="action-buttons">
          <button
            onClick={handleEditProfile}
            className="action-btn"
          >
            Edit Profile
          </button>

          <button
            onClick={handleUpdateService}
            className="action-btn"
          >
            Update Service
          </button>

          <button
            onClick={handleViewOrders}
            className="action-btn"
          >
            View Orders
          </button>

          <button
            onClick={addOrderDetails}
            className="action-btn"
          >
            Add Orders list
          </button>
          
        </div>
      </main>

      <footer className="worker-footer">
        <button
          onClick={handleLogout}
          className="logout-btn"
        >
          Log out
        </button>
      </footer>
    </div>
  );
}

export default WorkerDashboard;
