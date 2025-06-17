import React, { useEffect, useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AudioProductList.css";

const AudioProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://oppoproject4.onrender.com/api/product")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]);
      });
  }, []);

  const handleProductClick = (id) => {
    localStorage.setItem("productId", id);
  };

  const audioProducts = products.filter(
    (product) => product.category === "Audio"
  );

  return (
   <>
    <div className="audio-section">
      <h2 className="audio-title">OPPO Audio</h2>
      <div className="audio-grid">
        {audioProducts.map((product) => (
          <Link
            to={`/product/${product._id}`}
            key={product._id}
            onClick={() => handleProductClick(product._id)}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="audio-card">
              <div className="audio-badge">
                <AiFillThunderbolt /> ⚙ Up to 2% OFF
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="audio-img"
                loading="lazy"
              />
              <h3>{product.name}</h3>
              <p className="audio-price">
                ₹{Number(product.price).toLocaleString("en-IN")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
   </>
  );
};

export default AudioProductList;
