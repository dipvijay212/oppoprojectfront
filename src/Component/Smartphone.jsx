import React, { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SmartphoneList.css";

export default function Smartphone() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://oppoproject4.onrender.com/api/product")
      .then((res) => {
        setPhones(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch smartphones:", err);
      });
  }, []);

  const handleProductClick = (id) => {
    localStorage.setItem("productId", id);
  };

  return (
    <div className="container">
      <h2 className="section-title">Hot-selling Smartphone below ₹20,000</h2>
      <div className="smartphone-grid">
        {phones
          .filter(
            (phone) => phone.price < 20000 && phone.category === "Smartphone"
          )
          .slice(0, 4)
          .map((phone) => (
            <Link
              to={`/product/${phone._id}`}
              key={phone._id}
              onClick={() => handleProductClick(phone._id)}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="phone-card">
                <div className="discount-badge">
                  <AiFillThunderbolt /> 15% OFF
                </div>
                <img
                  src={phone.image}
                  alt={phone.name}
                  className="phone-img"
                />
                <h3>{phone.name}</h3>
                <p>Exchange Bonus up to ₹2,000</p>
                <p>
                  ₹{phone.price?.toLocaleString("en-IN")}
                  <span className="old-price">
                    ₹{(phone.price * 1.2)?.toLocaleString("en-IN")}
                  </span>
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
