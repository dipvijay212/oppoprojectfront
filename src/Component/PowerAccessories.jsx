import React, { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PowerAccessories.css";

const PowerAccessories = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://oppoproject4.onrender.com/api/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleProductClick = (id) => {
    localStorage.setItem("productId", id);
  };

  const powerItems = products.filter(
    (item) => item.category === "Charger" || item.category === "Power"
  );

  return (
    <div className="accessories-section">
      <h2 className="accessories-title">OPPO Accessories</h2>
      <div className="accessories-grid">
        {powerItems.map((product) => {
          const oldPrice = Math.round(product.price / (1 - 0.1)); // Assuming 10% off
          const discount = Math.round(100 - (product.price / oldPrice) * 100);

          return (
            <Link
              to={`/product/${product._id}`}
              key={product._id}
              onClick={() => handleProductClick(product._id)}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="accessories-card">
                <div className="accessories-badge">
                  <AiFillThunderbolt /> ⚡ {discount}% OFF
                </div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="accessories-img"
                />
                <h3>{product.name}</h3>
                <p className="accessories-price">
                  ₹{product.price.toLocaleString("en-IN")}{" "}
                  <span className="old-price">
                    ₹{oldPrice.toLocaleString("en-IN")}
                  </span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default PowerAccessories;
