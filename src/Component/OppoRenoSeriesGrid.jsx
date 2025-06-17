import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FindNSeriesGrid.css";
import { Link } from "react-router-dom";

const OppoRenoSeriesGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://oppoproject4.onrender.com/api/product")
      .then((res) => {
        const findNProducts = res.data.filter(
          (product) =>
            product.category === "Smartphone" &&
            product.name.toLowerCase().includes("reno")
        );
        setProducts(findNProducts);
      })
      .catch((err) => {
        console.error("Error fetching OPPO Reno Series products:", err);
      });
  }, []);

  const handleProductClick = (id) => {
    localStorage.setItem("productId", id);
  };

  return (
    <div className="findn-grid-container">
      {products.map((phone, index) => (
        <Link
          to={`/product/${phone._id}`}
          key={phone._id || index}
          onClick={() => handleProductClick(phone._id)}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="phone-box">
            <div className="img-container">
              <img src={phone.image} alt={phone.name} className="phone-img" />
              {phone.has360 && <div className="badge">360 Explore</div>}
              <div className="color-dots">
                {phone.color?.map((clr, idx) => (
                  <span
                    key={idx}
                    className="dot"
                    style={{ backgroundColor: clr.toLowerCase() }}
                  ></span>
                ))}
              </div>
            </div>
            <div className="info">
              <h3>{phone.name}</h3>
              <p>{phone.description}</p>
              <div className="learn-more">Learn more</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default OppoRenoSeriesGrid;
