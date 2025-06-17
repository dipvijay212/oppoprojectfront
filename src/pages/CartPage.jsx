import React from "react";
import "./CartPage.css";
import { useCart } from "../contextApi/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal > 30000 ? 3000 : 4000; // for mock UI match
  const total = subtotal - discount;

  return (
    <div className="cart-page">
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-layout">
          {/* Left section: Products */}
          <div className="cart-left">
            <p className="free-shipping">🚚 Good news, your cart qualifies for free shipping.</p>
            {cartItems.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.storage}`}>
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>{item.color} | {item.storage}</p>
                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.storage, Math.max(1, item.quantity - 1))}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.storage, item.quantity + 1)}>+</button>
                  </div>
                  <p className="price">₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id, item.storage)}>🗑</button>
                  <p className="add-protection">+ Add Protection Plan</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right section: Summary */}
          <div className="cart-summary">
            <h3>Total</h3>
            <div className="summary-line">
              <span>Item Subtotal</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="summary-line discount">
              <span>Discount</span>
              <span>-₹{discount.toLocaleString("en-IN")}</span>
            </div>
            <hr />
            <div className="summary-line total">
              <h2>₹{total.toLocaleString("en-IN")}</h2>
            </div>
            <p className="reward-note">✖ Reward points after order received</p>
            <p className="reward-earned">🟢 998</p>
            <button className="checkout-btn" onClick={() => navigate("/checkout")}>Check out</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
