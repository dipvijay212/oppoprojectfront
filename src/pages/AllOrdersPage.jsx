import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AllOrdersPage.css"; // Optional: if you use custom styling

const AllOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get("https://oppoproject4.onrender.com/api/v1/order/me", {
          withCredentials: true,
        });

        console.log("Fetched Orders:", data);

        // ✅ Fix: Flatten nested array if needed
        const flatOrders = Array.isArray(data.orders[0]) ? data.orders[0] : data.orders;

        setOrders(flatOrders || []);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="all-orders-page">
      <h2>📦 My Orders</h2>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order._id} className="order-card" style={{ border: "1px solid #ccc", margin: "20px 0", padding: "15px" }}>
            <h4>Order ID: {order._id}</h4>
            <p><strong>Date:</strong> {order.createdAt ? new Date(order.createdAt).toLocaleString() : "N/A"}</p>
            <p><strong>Total Amount:</strong> ₹{order.totalPrice || 0}</p>
            <p><strong>Status:</strong> {order.orderStatus || "N/A"}</p>
            <p><strong>Payment:</strong> {order.paymentInfo?.id || "N/A"} ({order.paymentInfo?.status || "N/A"})</p>

            <div>
              <strong>Items:</strong>
              <ul>
                {Array.isArray(order.orderItems) && order.orderItems.length > 0 ? (
                  order.orderItems.map((item, index) => (
                    <li key={`${order._id}-${index}`}>
                      <img src={item.image} alt={item.name} width="40" style={{ verticalAlign: "middle", marginRight: "10px" }} />
                      {item.name} — Qty: {item.quantity} — ₹{item.price}
                    </li>
                  ))
                ) : (
                  <li>No items in this order.</li>
                )}
              </ul>
            </div>

            <div>
              <strong>Shipping Info:</strong>
              <p>
                {order.shippingInfo?.address
                  ? `${order.shippingInfo.address}, ${order.shippingInfo.city}, ${order.shippingInfo.state}, ${order.shippingInfo.country} — ${order.shippingInfo.pinCode}`
                  : "No shipping information provided."}
              </p>
              <p><strong>Phone:</strong> {order.shippingInfo?.phoneNo || "N/A"}</p>
            </div>

            <hr />
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default AllOrdersPage;
