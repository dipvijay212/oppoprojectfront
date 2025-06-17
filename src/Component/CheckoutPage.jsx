import React, { useState } from "react";
import axios from "axios";
import "./CheckoutPage.css";
import { useCart } from "../contextApi/CartContext";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();

const [address, setAddress] = useState({
  fullName: "",
  phone: "",
  street: "",
  apt: "",
  pin: "",
  city: "",
  state: "",
  country: "",    // new required field
  isDefault: true,
});


  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal > 30000 ? 3000 : 0;
  const total = subtotal - discount;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddress((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

const placeOrder = async () => {
const { fullName, phone, street, apt, pin, city, state, country } = address;


  if (!fullName || !phone || !street || !pin || !city || !state || !country) {
    alert("Please fill out all required address fields including country.");
    return;
  }

 const orderData = {
  shippingInfo: {
    fullName,
    phoneNo: phone,
    address: street + (apt ? ", " + apt : ""),  // combine street + apt as 'address'
    pinCode: pin,
    city,
    state,
    country,
    isDefault: address.isDefault,
  },
  orderItems: cartItems.map(item => ({
    product: item._id || item.id,
    name: item.name,
    image: item.image,
    color: item.color,
    storage: item.storage,
    quantity: item.quantity,
    price: item.price,
  })),
  paymentInfo: {
    id: "cash-on-delivery",
    status: "Pending",
  },
  totalPrice: total,
};


  try {
    const response = await axios.post(
      "https://oppoproject4.onrender.com/api/v1/order/new",
      orderData,
      { withCredentials: true }
    );
    console.log(response);
    
    if (response.status === 201) {
      alert("Order placed successfully!");
      clearCart();
    }
  } catch (error) {
    console.error("Order Error:", error?.response?.data || error.message);
    alert("Order failed: " + (error?.response?.data?.message || error.message));
  }
};



  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-layout">
        <div className="checkout-left">
          <h3>Add new address</h3>
          <input
            name="fullName"
            placeholder="Full Name"
            value={address.fullName}
            onChange={handleInputChange}
          />
          <div className="phone-input">
            <span>+91</span>
            <input
              name="phone"
              placeholder="Phone Number"
              value={address.phone}
              onChange={handleInputChange}
            />
          </div>
          <input
            name="street"
            placeholder="House Number, Street Address"
            value={address.street}
            onChange={handleInputChange}
          />
          <input
            name="apt"
            placeholder="Apt, Suite, Building (Optional)"
            value={address.apt}
            onChange={handleInputChange}
          />
          <input
            name="pin"
            placeholder="6-digit PIN Code"
            value={address.pin}
            onChange={handleInputChange}
          />
          <input
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleInputChange}
          />
          <input
            name="state"
            placeholder="State"
            value={address.state}
            onChange={handleInputChange}
          />
          <input
  name="country"
  placeholder="Country"
  value={address.country}
  onChange={handleInputChange}
/>

          <label>
            <input
              type="checkbox"
              name="isDefault"
              checked={address.isDefault}
              onChange={handleInputChange}
            />
            Set as default
          </label>
          <button className="save-btn">Save</button>
        </div>

        <div className="checkout-right">
          <h4>Order Detail</h4>
          {cartItems.map((item, idx) => (
            <div key={idx} className="order-item">
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.name}</p>
                <small>{item.color} {item.storage}</small>
                <p>× {item.quantity}</p>
              </div>
              <p>₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
            </div>
          ))}
          <hr />
          <p>Item Subtotal: ₹{subtotal.toLocaleString("en-IN")}</p>
          <p>Total Savings: -₹{discount.toLocaleString("en-IN")}</p>
          <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>
          <button className="place-order-btn" onClick={placeOrder}>
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;





//this is right code using axios but some error
// import React, { useState } from "react";
// import axios from "axios";
// import "./CheckoutPage.css";
// import { useCart } from "../contextApi/CartContext";

// const CheckoutPage = () => {
//   const { cartItems, clearCart } = useCart();

//   const [address, setAddress] = useState({
//     fullName: "",
//     phone: "",
//     street: "",
//     apt: "",
//     pin: "",
//     city: "",
//     state: "",
//     isDefault: true,
//   });

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const discount = subtotal > 30000 ? 3000 : 0;
//   const total = subtotal - discount;

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setAddress((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const placeOrder = async () => {
//     const { fullName, phone, street, pin, city, state } = address;
//     if (!fullName || !phone || !street || !pin || !city || !state) {
//       alert("Please fill out all required address fields.");
//       return;
//     }

//     const orderData = {
//       cartItems,
//       address: { fullName, phone, street, pin, city, state },
//       total,
//     };

//     try {
//       const response = await axios.post("http://localhost:5000/api/v1/order/new",  orderData,
//   {
//     withCredentials: true,
//   });
//       if (response.status === 201) {
//         alert("Order placed successfully!");
//         clearCart();
//       }
//     } catch (error) {
//       alert("Order failed. Please try again.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="checkout-container">
//       <h2>Checkout</h2>
//       <div className="checkout-layout">
//         <div className="checkout-left">
//           <h3>Add new address</h3>
//           <input name="fullName" placeholder="Full Name" value={address.fullName} onChange={handleInputChange} />
//           <div className="phone-input">
//             <span>+91</span>
//             <input name="phone" placeholder="Phone Number" value={address.phone} onChange={handleInputChange} />
//           </div>
//           <input name="street" placeholder="House Number, Street Address" value={address.street} onChange={handleInputChange} />
//           <input name="apt" placeholder="Apt, Suite, Building (Optional)" value={address.apt} onChange={handleInputChange} />
//           <input name="pin" placeholder="6-digit PIN Code" value={address.pin} onChange={handleInputChange} />
//           <input name="city" placeholder="City" value={address.city} onChange={handleInputChange} />
//           <input name="state" placeholder="State" value={address.state} onChange={handleInputChange} />
//           <label>
//             <input type="checkbox" name="isDefault" checked={address.isDefault} onChange={handleInputChange} />
//             Set as default
//           </label>
//           <button className="save-btn">Save</button>
//         </div>

//         <div className="checkout-right">
//           <h4>Order Detail</h4>
//           {cartItems.map((item, idx) => (
//             <div key={idx} className="order-item">
//               <img src={item.image} alt={item.name} />
//               <div>
//                 <p>{item.name}</p>
//                 <small>{item.color} {item.storage}</small>
//                 <p>× {item.quantity}</p>
//               </div>
//               <p>₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
//             </div>
//           ))}
//           <hr />
//           <p>Item Subtotal: ₹{subtotal.toLocaleString("en-IN")}</p>
//           <p>Total Savings: -₹{discount.toLocaleString("en-IN")}</p>
//           <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>
//           <button className="place-order-btn" onClick={placeOrder}>Place order</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
