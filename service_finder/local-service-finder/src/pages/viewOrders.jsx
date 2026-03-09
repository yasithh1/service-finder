import { useState } from "react";
import "./viewOrders.css";

function Orders() {

  const [orders, setOrders] = useState([
    {
      name: "John Silva",
      service: "Plumber",
      date: "2026-03-05",
      note: "Pipe leak",
      status: "Pending"
    },
    {
      name: "Amal Perera",
      service: "Electrician",
      date: "2026-03-06",
      note: "Fix light switch",
      status: "Completed"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [editData, setEditData] = useState({});

  const updateStatus = (index, newStatus) => {
    const updated = [...orders];
    updated[index].status = newStatus;
    setOrders(updated);
  };

  const deleteOrder = (index) => {
    const updated = orders.filter((_, i) => i !== index);
    setOrders(updated);
  };

  const openEdit = (index) => {
    setCurrentIndex(index);
    setEditData(orders[index]);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const saveEdit = () => {
    const updated = [...orders];
    updated[currentIndex] = editData;
    setOrders(updated);
    setShowModal(false);
  };

  return (
    <div className="orders-page">

      <h1 className="orders-title">Customer Orders</h1>

      <div className="orders-container">

        {orders.map((order, index) => (
          <div className="order-card" key={index}>

            <div className="order-details">
              <h3>{order.name}</h3>
              <p><b>Service:</b> {order.service}</p>
              <p><b>Date:</b> {order.date}</p>
              <p><b>Note:</b> {order.note}</p>

              <select
                value={order.status}
                onChange={(e) => updateStatus(index, e.target.value)}
                className="status-select"
              >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="order-actions">
              <button className="edit-btn" onClick={() => openEdit(index)}>
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => deleteOrder(index)}
              >
                Delete
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* POPUP MODAL */}

      {showModal && (
        <div className="modal-overlay">

          <div className="modal">

            <h2>Edit Order</h2>

            <input
              name="name"
              value={editData.name}
              onChange={handleChange}
              placeholder="Customer Name"
            />

            <input
              name="service"
              value={editData.service}
              onChange={handleChange}
              placeholder="Service"
            />

            <input
              type="date"
              name="date"
              value={editData.date}
              onChange={handleChange}
            />

            <textarea
              name="note"
              value={editData.note}
              onChange={handleChange}
              placeholder="Note"
            />

            <div className="modal-buttons">
              <button onClick={saveEdit} className="save-btn">
                Save
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Orders;