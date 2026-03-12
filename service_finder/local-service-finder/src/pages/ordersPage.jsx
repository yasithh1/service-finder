import { useState } from "react";
import "./ordersPage.css";

function OrdersPage() {

  const [orders, setOrders] = useState([]);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    note: "",
    date: "",
    status: "Pending"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const addOrder = (e) => {
    e.preventDefault();
    setOrders([...orders, form]);

    setForm({
      name: "",
      phone: "",
      service: "",
      location: "",
      note: "",
      date: "",
      status: "Pending"
    });
  };

  return (
    <div className="add-orders-container">

      <div className="orders-card">

        <h2>Add Customer Order</h2>

        <form onSubmit={addOrder} className="orders-form">

          <input
            name="name"
            placeholder="Customer Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            name="service"
            placeholder="Service Type"
            value={form.service}
            onChange={handleChange}
          />

          <input
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <textarea
            name="note"
            placeholder="Order Note"
            value={form.note}
            onChange={handleChange}
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <button type="submit">Add Order</button>

        </form>

      </div>

    </div>
  );
}

export default OrdersPage;