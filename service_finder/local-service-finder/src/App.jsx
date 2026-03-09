import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import WDashboard from "./pages/WorkerDashboard";
import UpdateService from "./pages/updateService";
import UpdateProfile from "./pages/updateProfile";
import OrdersPage from "./pages/ordersPage";
import Orders from "./pages/viewOrders";
import Services from "./pages/Services";


function App() {
  return (
   
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<WDashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update-service" element={<UpdateService />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/vieworders" element={<Orders />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

 